import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserDetailsComponent } from './user-details.component';
import { EditComponent } from 'projects/resolver/src/app/main/module/components/edit';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from 'projects/resolver/src/app/main/module/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { SERVER_URL } from 'projects/resolver/src/app/server-url.const';
import { AuthService } from 'projects/resolver/src/app/auth';
import { of } from 'rxjs';


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let paragraphs: DebugElement[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [HttpClientModule, CommonModule],
      providers: [
        UserService,
        AuthService,
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(new Map(Object.entries({
              id: '34' // or use a variable (better): fakeRouteArgument
            })))
          }
        },
        { provide: SERVER_URL, useValue: 'http://localhost:4000' },
      ]
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });
  
  it('should be created', () => {
    // expect(component).toBeTruthy();
  });
});
