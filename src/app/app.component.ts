import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {
    BehaviorSubject,
    combineLatest,
    concat,
    connectable,
    defer,
    EMPTY,
    forkJoin,
    from,
    fromEvent,
    interval,
    merge,
    NEVER,
    Observable,
    of,
    race,
    range,
    reduce,
    Subject,
    throwError,
    timer,
    windowCount,
    zip,
} from 'rxjs';

import {
    auditTime,
    buffer,
    bufferTime,
    catchError,
    debounce,
    debounceTime,
    distinctUntilChanged,
    map,
    mergeMap,
    retry,
    sampleTime,
    scan,
    share,
    startWith,
    switchMap,
    take,
    takeUntil,
    takeWhile,
    tap,
    throttleTime,
    toArray,
    window,
    withLatestFrom,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {HttpClient} from "@angular/common/http";
import {Action, CustomService, State} from "./custom.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'rxjs-demo';
    countdown?: number;
    switchMapCount?: number;
    //@ts-ignore
    post$: Observable<any>;
    //@ts-ignore

    private source$: Observable<number>;
    @ViewChild('functionText')
    functionText?: ElementRef<HTMLDivElement>;

    private customService = inject(CustomService);

    get state(): State {
        return this.customService.currentState;
    }

    get action(): Action {
        return this.customService.action;
    }

    protected changeState(): void {
        switch (this.state) {
            case State.Stopped: {
                this.customService.start();
                break;
            }
            case State.Paused: {
                this.customService.resume();
                break;
            }
            default: {
                this.customService.pause();
            }
        }
    }

    protected stop(): void {
        this.customService.stop();
    }

    constructor(private http: HttpClient) {
    }

    show(f: Function) {

        // let func = ""
        // let name = f.name.replaceAll("([A-Z])"," $1")
        // func += f.toString()
        //   .replace(/this\.show\(this\.[A-z]+\);\n +/g,"")
        //   .replaceAll(/\(0,rxjs__WEBPACK_IMPORTED_MODULE_[0-9]{1,2}__\.?([A-z]+)\)/g,"$1")
        //   .replaceAll(/rxjs_ajax__WEBPACK_IMPORTED_MODULE_[0-9]{1,2}__\.?([A-z]+)/g,"$1")
        //   .replaceAll(/\(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_[0-9]{1,2}__\.([A-z]+)\)/g,"$1")
        // let html = func
        //   .replaceAll(" ","&nbsp;")
        //   .replaceAll("<","&lt;")
        //   .replaceAll(">","&gt;")
        //   .replaceAll("\n","<br>")
        // if (this.functionText) {
        //   this.functionText.nativeElement.innerHTML =
        //     `<br>${html}<br>`;
        // }
        // console.log(func);
    }

    ngOnInit() {
        this.source$ = interval(1000).pipe(
          share()
        );
    }
    subscribeToStream() {
        this.source$.subscribe(value => {
            console.log(`Received value: ${value}`);
        });
    }

    createObservable() {
        // this.show(this.createObservable);
        const observable = new Observable(observer => {
            observer.next('Hello');
            observer.error('Some Error')
            observer.next('World');

            observer.complete();
        });

        const subscribe = observable
          .pipe()
          .subscribe(val => console.log(val));
    }

    createObservableAsync() {
        // this.show(this.createObservableAsync);
        const observable = new Observable(observer => {
            let value = 0;
            const t = setInterval(() => {
                observer.next(value++);
            }, 1000);
            setTimeout(() => {
                observer.complete();
                clearInterval(t);
            }, 5000);
        });

        const subscribe = observable.subscribe(val => console.log(val));
    }

    from() {
        this.show(this.from);
        // emit result of promise
        const promiseSource = from(
          new Promise(resolve =>
            resolve('Hello World!')));
        // output: 'Hello World'
        const subscribe = promiseSource.subscribe(val => console.log(val));
    }

    fromEvent() {
        this.show(this.fromEvent);
        // create observable that emits click events
        const source = fromEvent(document, 'click');

        // map to string with given event timestamp
        const example = (source as Observable<MouseEvent>).pipe(
          map((e: MouseEvent) =>
            `Event time: ${e.timeStamp} ${e.x} ${e.y}`),
        );
        const subscribe = example.subscribe(val => console.log(val));

    }

    defer() {
        this.show(this.defer);
        const s1 = of(new Date()); // will capture current date time
        const s2 = of(new Date());
        // will capture date time at the moment of subscription

        console.log('current: ', new Date());

        timer(2000)
          .pipe(mergeMap(_ => concat(s1, s2)))
          .subscribe(console.log);
    }

    deferClick(button: HTMLButtonElement) {
        this.show(this.deferClick);
        const s1 = of(new Date()); // will capture current date time
        const s2 = defer(() => of(new Date()));

        console.log('current: ', new Date());

        fromEvent(button, 'click')
          .pipe(mergeMap(_ => concat(s1, s2)))
          .subscribe(console.log);
    }

    interval() {
        // this.show(this.interval);
        // emit value in sequence every 1 second
        const source = interval(1000);
        // output: 0,1,2,3,4,5....
        const subscribe = source.subscribe(val => console.log(val));
        setTimeout(() => subscribe.unsubscribe(), 5000);
    }

    range() {
        this.show(this.range);
        // emit 1-10 in sequence
        const source = range(1, 10);
        // output: 1,2,3,4,5,6,7,8,9,10
        const example = source.subscribe(val => console.log(val));
    }

    throw() {
        this.show(this.throw);
        // emits an error with specified value on subscription
        const source = throwError(() => 'This is an error!');
        // output: 'Error: This is an error!'
        const subscribe = source.pipe().subscribe({
            next: val => console.log(val),
            complete: () => console.log('Complete!'),
            error: val => console.log(`Error: ${val}`),
        });
    }

    timer() {
        this.show(this.timer);
        // emit 0 after 1 second then complete
        // Создаем Observable, который будет излучать 0 через 1 секунду
        const source = timer(2000);

        // Подписываемся на Observable
        const subscribe = source.subscribe(
          val => console.log(val), // Выводим значение
          err => console.error(err), // Обрабатываем ошибку (если возникнет)
          () => console.log('Complete'), // Обрабатываем завершение
        );
    }

    catchError() {
        this.show(this.catchError);
        // emit error
        const source = throwError(() => 'This is an error!');
        // gracefully handle error, returning observable with error message
        const example = source.pipe(catchError(val => of(`I caught: ${val}`)));

        // output: 'I caught: This is an error'
        const subscribe = example.subscribe(val => console.log(val));
    }

    retry() {
        this.show(this.retry);
        const source = interval(1000);
        const example = source.pipe(
          mergeMap(val => {
              // throw error for demonstration
              if (val > 3) {
                  return throwError(() => 'Error!');
              }
              return of(val);
          }),
          // retry 2 times on error
          retry(2),
          catchError(e => of("get cached version")),
        );

        const subscribe = example.subscribe({
            next: val => console.log(val),
            error: val => console.log(`${val}: Retried 2 times then quit!`),
        });
    }

    // Makes a cold Observable hot
    connect() {
        this.show(this.connect);
        // emit value every 1 second
        const source = interval(1000);
        const example = connectable(source.pipe(
          // side effects will be executed once
          tap(_ => console.log('Do Something!')),
          // do nothing until connect() is called
          takeUntil(timer(7000)),
        ));

        const subscribe = example.subscribe(val =>
          console.log(`Subscriber One: ${val}`),
        );
        const subscribeTwo = example.subscribe(val =>
          console.log(`Subscriber Two: ${val}`),
        );

        console.log('waiting to connect...');
        // call connect after 3 seconds, causing source to begin emitting items
        setTimeout(() => {
            example.connect();
        }, 5000);
        setTimeout(() => {
            subscribe.unsubscribe();
            subscribeTwo.unsubscribe();
        }, 7000);
    }

    share() {
        this.show(this.share);
       const obs = interval(1000).pipe(
         take(5),
         tap((i) => console.log('Tap i', i)),
         share()
       )
        obs.subscribe(value =>{
            console.log('obser 1 ===>' + value);
        })
        obs.subscribe(value =>{
            console.log('obser 2===>' + value);
        })

    }

    distinctUntilChanged() {
        this.show(this.distinctUntilChanged);
        const source$ = from([1, 1, 2, 2, 1, 3, 3, 3]);

        source$
          .pipe(distinctUntilChanged())
          // output: 1,2,3
          .subscribe(console.log);
    }

    debounce() {
        this.show(this.debounce);
        const example = of(1100, 1100, 500, 1500)
          .pipe(mergeMap(v => timer(v)));
        /*
            Only emit values after a second has passed between the last emission,
            throw away all other values
        */
        const debouncedExample = example.pipe(
          debounce(() => timer(1000)));
        /*
            In this example, all values but the last will be omitted
            output: 'Last will display'
        */
        const subscribe = debouncedExample.subscribe(
          val => console.log(val));

    }

    debounceTime(searchBox: HTMLInputElement) {
        this.show(this.debounceTime);
        const keyup$ = fromEvent(searchBox, 'keyup');
        console.time('debounceTime');

        // wait .5s between keyups to emit current value
        keyup$
          .pipe(
            map((i: any) => i.currentTarget.value),
            debounceTime(1000),
          )
          .subscribe(v => {
              (console as any).timeLog('debounceTime');
              console.log(v);
          });

    }

    throttle(searchBox: HTMLInputElement) {
        this.show(this.throttle);
        const keyup$ = fromEvent(searchBox, 'keyup');
        console.time('throttle');

        // wait .5s between keyups to emit current value
        keyup$
          .pipe(
            map((i: any) => i.currentTarget.value),
            throttleTime(1000),
          )
          .subscribe(v => {
              (console as any).timeLog('throttle');
              console.log(v);
          });
    }

    sampleTime(searchBox: HTMLInputElement) {
        this.show(this.sampleTime);
        const keyup$ = fromEvent(searchBox, 'keyup');
        console.time('sample');
        // wait .5s between keyups to emit current value
        keyup$
          .pipe(
            map((i: any) => i.currentTarget.value),
            sampleTime(1000),
          )
          .subscribe(v => {
              (console as any).timeLog('sample');
              console.log(v);
          });
    }

    audit(searchBox: HTMLInputElement) {
        this.show(this.audit);
        const keyup$ = fromEvent(searchBox, 'keyup');
        console.time('audit');

        // wait .5s between keyups to emit current value
        keyup$
          .pipe(
            map((i: any) => i.currentTarget.value),
            auditTime(1000),
          )
          .subscribe(v => {
              (console as any).timeLog('audit');
              console.log(v);
          });
    }

    mouseEvent(eventName: string) {
        let events = fromEvent(document, eventName) as Observable<MouseEvent>;
        return events.pipe(
          map((e: MouseEvent) => ({x: e.clientX, y: e.clientY})),
        );
    }

    zip() {
        this.show(this.zip);
        zip(
          this.mouseEvent('mousedown'),
          this.mouseEvent('mouseup')).subscribe(e =>
          console.log(JSON.stringify(e)),
        );
    }

    combineLatest() {
        this.show(this.combineLatest);
        const seconds$ = interval(1000).pipe(take(10));

        combineLatest([
            this.mouseEvent('mousedown'),
            seconds$,
        ]).subscribe(e =>
          console.log(JSON.stringify(e)),
        );
    }

    merge() {
        this.show(this.merge);
        const seconds$ = interval(1000).pipe(take(10));

        merge(
          this.mouseEvent('mousedown'),
          seconds$,
        ).subscribe(e =>
          console.log(JSON.stringify(e)),
        );
    }

    concat() {
        this.show(this.concat);
        const seconds$ = interval(1000).pipe(take(3));

        concat(
          seconds$,
          this.mouseEvent('mousemove'),
        ).subscribe(e =>
          console.log(JSON.stringify(e)),
        );
    }

    withLatestFrom() {
        this.show(this.withLatestFrom);
        const seconds$ = interval(1000).pipe(take(10));

        seconds$.pipe(
          withLatestFrom(this.mouseEvent('mousemove')),
        ).subscribe(e =>
          console.log(JSON.stringify(e)),
        );
    }

    forkJoin() {
        this.show(this.forkJoin);
        console.time('forkJoin');
        // forkJoin expects the Observables to be completed,
        // while combineLatest returns the latest values
        const seconds$ = interval(1000).pipe(take(10));
        forkJoin([
            ajax.getJSON('https://api.github.com/users/google'),
            ajax.getJSON('https://api.github.com/users/microsoft'),
            ajax.getJSON('https://api.github.com/users'),
            // seconds$
        ])
          .pipe(tap(_ => console.timeEnd('forkJoin')),
            catchError(e => of('Oops!')))
          .subscribe(console.log);
    }

    race() {
        this.show(this.race);
        console.time('race');
        race([
            ajax.getJSON('https://api.github.com/users/google'),
            ajax.getJSON('https://api.github.com/users/microsoft'),
            ajax.getJSON('https://api.github.com/users'),
        ])
          .pipe(tap(_ => console.timeEnd('race')))
          .subscribe(console.log);
    }

    concatJSON() {
        this.show(this.concatJSON);
        console.time('concat');
        concat(
          ajax.getJSON('https://api.github.com/users/google'),
          ajax.getJSON('https://api.github.com/users/microsoft'),
          ajax.getJSON('https://api.github.com/users'),
          defer(() => of(console.timeEnd('concat'))),
        ).subscribe(console.log);

    }

    switchMap(playButton: HTMLButtonElement, pauseButton: HTMLButtonElement) {
        this.show(this.switchMap);
        const COUNTDOWN_SECONDS = 10;

        const interval$ = interval(1000).pipe(map(() => -1));
        const pause$ = fromEvent(pauseButton, 'click')
          .pipe(map(() => false));
        const play$ = fromEvent(playButton, 'click')
          .pipe(map(() => true));

        const timer$ = merge(pause$, play$)
          .pipe(
            startWith(true),
            switchMap(val => (val ? interval$ : EMPTY)),
            scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
            takeWhile(v => v >= 0),
          )
          .subscribe(v => this.countdown = v);
    }

    switchMapCounter(start: HTMLButtonElement) {
        this.show(this.switchMapCounter);
        fromEvent(start, 'click')
          .pipe(
            tap(console.log),
            switchMap(() => timer(0, 1000)),
          )
          .subscribe(v => this.switchMapCount = v);
    }

    windowButton(button: HTMLButtonElement) {
        this.show(this.windowButton);
        const source = timer(0, 1000);
        const example = source.pipe(
          // emit next element every 3s
          window(fromEvent(button, 'click')),
          tap(_ => console.log('NEW WINDOW!')),
          mergeMap(toArray()),
        ).subscribe(console.log);
    }

    bufferTime() {
        this.show(this.bufferTime);
        const source = timer(0, 1000);
        const example = source.pipe(
          // start new window every 3s
          bufferTime(3000),
          tap(_ => console.log('next buffer')),
        ).subscribe(console.log);
    }

    windowMouseMoves() {
        this.show(this.windowMouseMoves);

        fromEvent<MouseEvent>(document, 'mousemove').pipe(
          map(e => ({x: e.x, y: e.y})),
          windowCount(150),
          // windowTime(1000),
          mergeMap(
            reduce<{ x: number, y: number }, string>(
              (a, v) =>
                (a.constructor === String ? a : JSON.stringify(a))
                + "," + JSON.stringify(v),
            ),
          ),
        ).subscribe(r => console.log("next window: " + r));
    }

    pausable() {
        // BehaviorSubject allows you to retrieve and keep the last emitted value
        let pauser = new BehaviorSubject(true);
        let source = fromEvent(document, 'mousemove');
        const pausable = pauser.pipe(switchMap(
          paused => paused ? NEVER : source));

        let subscription = pausable.subscribe(
          x => console.log(x),
          // x => console.log("Mouse move")
        );

        // To begin the flow
        pauser.next(true);
        // To pause the flow at any point
        pauser.next(false);

        // example of pausing/resuming when clicked:
        let clicks = fromEvent(document, 'click');
        // on every click change pauser to opposite
        clicks.subscribe(_ => pauser.next(!pauser.getValue()));
    }

    pausableWithBuffer() {

        // BehaviorSubject allows you to retrieve and keep the last emitted value
        const pauser = new BehaviorSubject(true);
        // here we will have a buffer for the pause
        const buf = new Subject();
        const source = fromEvent(document, 'mousemove');

        // we are sending the source to the buffer in case if pauser is turned on
        source.pipe(buffer(pauser)).subscribe(buf);
        // buffer will have an array with items buffered during pause

        // now pausable will take values either
        // from source (if not paused) or from buffer (if paused)
        const pausable = pauser.pipe(switchMap(
          paused => paused ? buf : source));
        pausable.subscribe(e => console.log(e));

        // example of pausing/resuming when clicked:
        const clicks = fromEvent(document, 'click');
        clicks.subscribe(_ => pauser.next(!pauser.getValue())); // on click, changes pauser to opposite
    }
}
