import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {HelloComponent} from "./hello.component";

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let h1: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloComponent]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    component.name = 'Random string';
    fixture.detectChanges();
    h1 = fixture.debugElement.query(By.css('h1'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check name', () => {
    expect(h1.nativeElement.innerHTML).toContain('Random string');
  });

});