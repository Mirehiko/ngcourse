import {UserDetailsComponent} from "./user-details.component";
import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let paragraphs: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = {id: 1, cardNumber: '12', cardType: '', name: 'asd'};
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('check user name', () => {
    expect(paragraphs[0].nativeElement.innerHTML).toContain('asd')
  });

});