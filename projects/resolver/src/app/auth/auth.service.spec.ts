import {TestBed} from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SERVER_URL } from 'projects/resolver/src/app/server-url.const';

describe('AuthService Spy', () => {
  let authService: AuthService;
  
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ConstantService', ['anyNumber']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        AuthService,
        { provide: SERVER_URL, useValue: 'http://localhost:4000' },
        // { provide: ConstantService, useValue: spy }
      ]
    });
    authService = TestBed.inject(AuthService);
    // constantService = TestBed.inject(ConstantService) as jasmine.SpyObj<ConstantService>;
  });
  
  it('should increment fake value', () => {
    // constantService.anyNumber.and.returnValue(13);
    // expect(authService.login()).toBe(14);
  });
});
