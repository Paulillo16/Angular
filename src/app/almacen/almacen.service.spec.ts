import { TestBed } from '@angular/core/testing';
import { AlmacenService } from './almacen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AlmacenService', () => {
  let service: AlmacenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlmacenService]
    });

    service = TestBed.get(AlmacenService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
