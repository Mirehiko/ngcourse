import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {UserDetailsFormComponent} from "./user-details-form.component";
import {FormsModule} from "@angular/forms";

describe('UserDetailsFormComponent', () => {
  let component: UserDetailsFormComponent;
  let fixture: ComponentFixture<UserDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsFormComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Name should be validated', fakeAsync(()  => {
    fixture.detectChanges();
    let span = fixture.debugElement.query(By.css('#nameId + span'));
    expect(span.nativeElement.innerText).toContain('Name must be defined');

    component.user.name = 'vlad';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    span = fixture.debugElement.query(By.css('#nameId + span'));
    expect(span).toBeNull();
  }));

});