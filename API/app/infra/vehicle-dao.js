const vehicleConverter = (row) => ({
  id: row.vehicle_id,
  vehicle: row.vehicle_model,
  volumetotal: row.vehicle_volumetotal,
  connected: row.vehicle_connected,
  softwareUpdates: row.vehicle_softwareUpdates,
});

class VehicleDao {
  constructor(db) {
    this._db = db;
  }



  listAll(value) {
    return new Promise((resolve, reject) => {
      this._db.all(
        `
              SELECT 
              vehicle_id,
              vehicle_model, 
              vehicle_volumetotal,
              vehicle_connected,
              vehicle_softwareUpdates
                FROM VEHICLE
                WHERE vehicle_model LIKE $codigo
			UNION 
			  SELECT 
        vehicle_id,
        vehicle_model, 
        vehicle_volumetotal,
        vehicle_connected,
        vehicle_softwareUpdates
          FROM VEHICLE
          WHERE vehicle_model LIKE $codigo
                `,
        { $codigo: `%${value}%` },
        (err, rows) => {
          if (err) {
            console.log("++++ERRO+++");
            console.log(err);
            return reject("Can`t load vehicle");
          }
          const vehicle = rows.map(vehicleConverter);
          return resolve(vehicle);
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
              SELECT  
              vehicle_id,
              vehicle_model, 
              vehicle_volumetotal,
              vehicle_connected,
              vehicle_softwareUpdates
                FROM VEHICLE
                WHERE vehicle_id = ?
                `,
        [id],
        (err, row) => {
          console.log(row);
          if (err) {
            console.log(err);
            return reject("Can`t load vehicle");
          }
          return resolve(vehicleConverter(row));
        }
      );
    });
  }
}

module.exports = VehicleDao;
