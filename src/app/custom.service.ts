import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, fromEvent, merge, mergeAll, mergeMap, NEVER, Observable, of, Subject} from "rxjs";
import {buffer, debounceTime, sampleTime, switchMap, take, takeUntil, tap} from "rxjs/operators";

export enum Action {
  Run = 'Run',
  Resume = 'Resume',
  Pause = 'Pause',
  Stop = 'Stop'
}

export enum State {
  Running = 'Running',
  Paused = 'Paused',
  Stopped = 'Stopped'
}

export interface ActionsBuffer {
  // type: 'click' | 'move';
  type: string;
  position: { x: number, y: number };
  mouseKey: string | undefined;
  elapsedMilliseconds: number;
}

export interface ActionsBufferGroup {
  started: string;
  ended: string;
  buffer: ActionsBuffer[];
}

const mouseKeys: {[key: string]: string} = {
  0: 'MouseButton: Left',
  1: 'MouseButton: Wheel',
  2: 'MouseButton: Right',
}

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  public currentState: State = State.Stopped;
  public action: Action = Action.Run;

  private actionsBuffer: ActionsBuffer[] = [];
  private actionsBufferGroup: ActionsBufferGroup[] = [];
  private initialTime: Date | undefined;
  private pauser$ = new BehaviorSubject(true);
  private pack$ = new BehaviorSubject(false);
  private destroy$ = new Subject();


  public start(): void {
    this.currentState = State.Running;
    this.action = Action.Pause;
    let source$ = fromEvent<MouseEvent>(document, 'mousemove');
    let clicks$ = fromEvent<MouseEvent>(document, 'mouseup');
    let actions$ = merge(source$, clicks$);
    this.initialTime = new Date();
    // const buf = new Subject();
    // actions$.pipe(buffer(this.pack$)).subscribe(buf);

    const pausableActions$ = this.pauser$.pipe(switchMap(isPaused => isPaused ? NEVER : actions$));

    this.pauser$.next(false);
    const sub$ = pausableActions$
      .pipe(
        sampleTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe((event: MouseEvent) => {
        this.actionsBuffer.push({
          type: event.type,
          mouseKey: event.type === 'mouseup' ? this.getMouseKey(event.button) : undefined,
          position: {
            x: event.clientX,
            y: event.clientY
          },
          elapsedMilliseconds: this.getElapsedMilliseconds()
        });
        if (this.actionsBuffer.length === 10) {
          this.setNewFragment();
        }
        console.log(new Date().getTime() - this.initialTime?.getTime()!, event.button)
    });

  }

  public pause(): void {
    this.currentState = State.Paused;
    this.action = Action.Resume;
    this.pauser$.next(true);
  }

  public resume(): void {
    this.currentState = State.Running;
    this.action = Action.Pause;
    this.setNewFragment(true);
    this.pauser$.next(false);
  }

  public stop(): void {
    this.action = Action.Run;
    this.currentState = State.Stopped;
    this.pauser$.next(true);
    this.destroy$.next(true);
    if (this.actionsBuffer.length) {
      this.setNewFragment();
    }
    const buf = [...this.actionsBufferGroup];
    this.actionsBufferGroup = [];
    this.sendToServer(buf).subscribe();
  }

  public sendToServer(data: ActionsBufferGroup[]): Observable<any> {
    return of(data).pipe(
      take(1),
      tap(d => {
        console.log(data);
      })
    );
  }

  private getMouseKey(key: number): string {
    return mouseKeys[`${key}`];
  }

  private setNewFragment(resetTimer: boolean = false): void {
    this.actionsBufferGroup.push({
      started: this.initialTime!.toUTCString(),
      ended: new Date().toUTCString(),
      buffer: [...this.actionsBuffer]
    });
    this.actionsBuffer = [];

    if (resetTimer) {
      this.initialTime = new Date();
    }
  }

  private getElapsedMilliseconds(): number {
    return new Date().getTime() - this.initialTime?.getTime()!;
  }
}