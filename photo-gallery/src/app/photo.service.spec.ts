import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoService, Photo } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService]
    });
    service = TestBed.inject(PhotoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch photos', () => {
    const testData: Photo[] = [
      { albumId: 1, id: 1, title: 'Photo 1', url: 'https://example.com/photo1', thumbnailUrl: 'https://example.com/photo1_thumb' },
      { albumId: 1, id: 2, title: 'Photo 2', url: 'https://example.com/photo2', thumbnailUrl: 'https://example.com/photo2_thumb' }
    ];

    service.getPhotos().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });
});
