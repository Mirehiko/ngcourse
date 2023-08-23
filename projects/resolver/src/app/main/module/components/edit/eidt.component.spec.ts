import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EditComponent } from './edit.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'projects/resolver/src/app/main/module/services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from 'projects/resolver/src/app/auth';
import { SERVER_URL } from 'projects/resolver/src/app/server-url.const';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let paragraphs: DebugElement[];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditComponent, HttpClientModule, CommonModule],
      providers: [
        UserService,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { params: { id: 123 } }
          }
        },
        { provide: SERVER_URL, useValue: 'http://localhost:4000' },
      ]
    });
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paragraphs = fixture.debugElement.queryAll(By.css('p'))
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
