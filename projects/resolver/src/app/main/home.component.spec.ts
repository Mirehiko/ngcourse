import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import { HomeResComponent } from "./home.component";

describe('HomeResComponent', () => {
  let component: HomeResComponent;
  let fixture: ComponentFixture<HomeResComponent>;
  let paragraphs: DebugElement[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeResComponent]
    });
    fixture = TestBed.createComponent(HomeResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
