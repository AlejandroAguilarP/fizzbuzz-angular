import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { ApiConnectService } from './api-connect.service';

describe('ApiConnectService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiConnectService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ApiConnectService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiConnectService);;
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('#requestElement()', () => {
    it('returned Observable should match the right data', () => {
      const element = 3;
  
      service.requestElement(element)
        .subscribe(element => {
          expect(element).toEqual('3');
        });

      const req = httpTestingController.expectOne(
        '/api/element/3'
      );
      req.flush(element);
    });
  });
  describe('#requestSequence()', () => {
    it('returned Observable should match the right data', () => {
      const element = 3;
  
      service.requestSequence(element)
        .subscribe(element => {
          expect(element).toEqual('3');
        });

      const req = httpTestingController.expectOne(
        '/api/sequence/3'
      );
      req.flush(element);
    });
  });
});
