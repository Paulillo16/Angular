import { TestBed } from '@angular/core/testing';
import { EstanteriaService } from './estanteria.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EstanteriaService', () => {
  let service: EstanteriaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstanteriaService]
    });

    service = TestBed.get(EstanteriaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
