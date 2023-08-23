import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import { LoginPageComponent } from "./login-page.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from 'projects/resolver/src/app/auth/auth.service';
import { SERVER_URL } from "../../server-url.const";
import { HttpClientModule } from '@angular/common/http';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let paragraphs: DebugElement[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
      ],
      providers: [
        AuthService,
        { provide: SERVER_URL, useValue: 'http://localhost:4000' },
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
