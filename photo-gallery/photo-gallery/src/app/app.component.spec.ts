import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component'; // Adjust the path as needed
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PhotoService } from './photo.service'; // Adjust the path as needed

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhotoListComponent // Add PhotoListComponent to the declarations
      ],
      imports: [
        HttpClientTestingModule // Add HttpClientTestingModule to imports
      ],
      providers: [PhotoService], // Ensure PhotoService is provided
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Optionally add CUSTOM_ELEMENTS_SCHEMA
    }).compileComponents();
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'photo-gallery'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('photo-gallery');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(`Welcome to ${component.title}!`);
  });
});
