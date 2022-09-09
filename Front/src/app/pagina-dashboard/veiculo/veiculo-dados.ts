export interface VeiculoDados extends Array<VeiculoDado> {}

export interface VeiculoDado {
  id: number | string;
  vin: string;
  odometer: number | string;
  tirePressure: Array<number> | string;
  status: string;
  batteryStatus: string;
  fuelLevel: number | string;
  lat: number | string;
  long: number | string;
}

export interface VeiculosDadosAPI {
  vehicleData: VeiculoDados;
}
