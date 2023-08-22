import {TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          HttpClientTestingModule
      ],
      declarations: [ AppComponent ],
    }).compileComponents();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
        .toContain('Welcome to testing!!!');
  });
});
