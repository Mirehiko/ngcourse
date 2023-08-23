import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import { MainComponent } from "./main.component";
import { AuthService } from 'projects/resolver/src/app/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SERVER_URL } from 'projects/resolver/src/app/server-url.const';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let paragraphs: DebugElement[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientModule],
      
      providers: [
        AuthService,
        { provide: SERVER_URL, useValue: 'http://localhost:4000' },
      ]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
