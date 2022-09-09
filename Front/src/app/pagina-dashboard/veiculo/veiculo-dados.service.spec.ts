import { TestBed } from '@angular/core/testing';

import { VeiculoDadosService } from './veiculo-dados.service';

describe('VeiculoDadosService', () => {
  let service: VeiculoDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
