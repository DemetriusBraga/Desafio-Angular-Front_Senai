const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data2.db");

const USER_SCHEMA = `
CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_name VARCHAR(30) NOT NULL UNIQUE, 
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCAHR(255) NOT NULL,
    user_full_name VARCAHR(40) NOT NULL, 
    user_join_date TIMESTAMP DEFAULT current_timestamp
)
`;

const INSERT_DEFAULT_USER_1 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'admin', 'admin@ford.com', '123456', 'Admin' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'admin')
`;

const INSERT_DEFAULT_USER_2 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'diogo', 'diogo@ford.com', '1234', 'Diogo' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'diogo')
`;

const VEHICLE_SCHEMA = `
CREATE TABLE IF NOT EXISTS VEHICLE (
    vehicle_id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicle_model TEXT DEFAULT ('') NOT NULL, 
    vehicle_volumetotal INTEGER,
    vehicle_connected INTEGER,
    vehicle_softwareUpdates INTEGER
)
`;

const INSERT_VEHICLE_1 = `
INSERT INTO VEHICLE (
    vehicle_model, 
    vehicle_volumetotal,
    vehicle_connected,
    vehicle_softwareUpdates
) SELECT 'Ranger', 145760, 70000, 27550 WHERE NOT EXISTS (SELECT * FROM VEHICLE WHERE vehicle_model = 'Ranger')
`;

const INSERT_VEHICLE_2 = `
INSERT INTO VEHICLE (
    vehicle_model, 
    vehicle_volumetotal,
    vehicle_connected,
    vehicle_softwareUpdates
) SELECT 'Mustang', 1500, 500, 750 WHERE NOT EXISTS (SELECT * FROM VEHICLE WHERE vehicle_model = 'Mustang')
`;


const INSERT_VEHICLE_3 = `
INSERT INTO VEHICLE (
    vehicle_model, 
    vehicle_volumetotal,
    vehicle_connected,
    vehicle_softwareUpdates
) SELECT 'Territory', 4560, 4000, 3050 WHERE NOT EXISTS (SELECT * FROM VEHICLE WHERE vehicle_model = 'Territory')
`;


const INSERT_VEHICLE_4 = `
INSERT INTO VEHICLE (
    vehicle_model, 
    vehicle_volumetotal,
    vehicle_connected,
    vehicle_softwareUpdates
) SELECT 'Bronco Sport', 7560, 4060, 2050 WHERE NOT EXISTS (SELECT * FROM VEHICLE WHERE vehicle_model = 'Bronco Sport')
`;


const DELETVEHICLES = `
DROP TABLE IF EXISTS VEHICLE
`;

const VEHICLEDATA_SCHEMA = `
CREATE TABLE IF NOT EXISTS VEHICLEDATA (
    vehicledata_id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicledata_vin VARCHAR(20) NOT NULL UNIQUE, 
    vehicledata_odometer VARCHAR(30) DEFAULT ('') NOT NULL, 
    vehicledata_tirePressure VARCHAR(30) DEFAULT ('') NOT NULL,
    vehicledata_status VARCHAR(30) DEFAULT ('') NOT NULL,
    vehicledata_batteryStatus VARCHAR(30) DEFAULT ('') NOT NULL,
    vehicledata_fuelLevel VARCHAR(30) DEFAULT ('') NOT NULL,
    vehicledata_lat VARCHAR(30) DEFAULT ('') NOT NULL,
    vehicledata_long VARCHAR(30) DEFAULT ('') NOT NULL
)
`;

const INSERT_VEHICLEDATA_1 = `
INSERT INTO VEHICLEDATA (
    vehicledata_vin, 
    vehicledata_odometer, 
    vehicledata_tirePressure,
    vehicledata_status,
    vehicledata_batteryStatus,
    vehicledata_fuelLevel,
    vehicledata_lat,
    vehicledata_long
) SELECT '2FRHDUYS2Y63NHD22454', '23344', '36,36,35,34', 'on', 'Ok', '76','-12,2322', '-35,2314'  WHERE NOT EXISTS (SELECT * FROM VEHICLEDATA WHERE vehicledata_vin = '2FRHDUYS2Y63NHD22454')
`;

const INSERT_VEHICLEDATA_2 = `
INSERT INTO VEHICLEDATA (
    vehicledata_vin, 
    vehicledata_odometer, 
    vehicledata_tirePressure,
    vehicledata_status,
    vehicledata_batteryStatus,
    vehicledata_fuelLevel,
    vehicledata_lat,
    vehicledata_long
) SELECT '2RFAASDY54E4HDU34874', '130000', '36,34,36,33', 'off', 'Recharge', '19','-12,2322', '-35,2314'  WHERE NOT EXISTS (SELECT * FROM VEHICLEDATA WHERE vehicledata_vin = '2RFAASDY54E4HDU34874')
`;
const INSERT_VEHICLEDATA_3 = `
INSERT INTO VEHICLEDATA (
    vehicledata_vin, 
    vehicledata_odometer, 
    vehicledata_tirePressure,
    vehicledata_status,
    vehicledata_batteryStatus,
    vehicledata_fuelLevel,
    vehicledata_lat,
    vehicledata_long
) SELECT '2FRHDUYS2Y63NHD22455', '50000', '36,36,35,34', 'on', 'Ok', '90','-12,2322', '-35,2314'  WHERE NOT EXISTS (SELECT * FROM VEHICLEDATA WHERE vehicledata_vin = '2FRHDUYS2Y63NHD22455')
`;
const INSERT_VEHICLEDATA_4 = `
INSERT INTO VEHICLEDATA (
    vehicledata_vin, 
    vehicledata_odometer, 
    vehicledata_tirePressure,
    vehicledata_status,
    vehicledata_batteryStatus,
    vehicledata_fuelLevel,
    vehicledata_lat,
    vehicledata_long
) SELECT '2RFAASDY54E4HDU34875', '10000', '36,34,36,33', 'off', 'Ok', '25','-12,2322', '-35,2314'  WHERE NOT EXISTS (SELECT * FROM VEHICLEDATA WHERE vehicledata_vin = '2RFAASDY54E4HDU34875')
`;

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON");
  db.run(DELETVEHICLES);
  db.run(USER_SCHEMA);
  db.run(INSERT_DEFAULT_USER_1);
  db.run(INSERT_DEFAULT_USER_2);
  db.run(VEHICLE_SCHEMA);
  db.run(INSERT_VEHICLE_1);
  db.run(INSERT_VEHICLE_2);
  db.run(INSERT_VEHICLE_3);
  db.run(INSERT_VEHICLE_4);
  db.run(VEHICLEDATA_SCHEMA);
  db.run(INSERT_VEHICLEDATA_1);
  db.run(INSERT_VEHICLEDATA_2);
  db.run(INSERT_VEHICLEDATA_3);
  db.run(INSERT_VEHICLEDATA_4);

  db.each("SELECT * FROM user", (err, user) => {
    console.log("Users");
    console.log(user);
  });
  db.each("SELECT * FROM VEHICLEDATA", (err, user) => {
    console.log("VEHICLEDATA");
    console.log(user);
  });
});

process.on("SIGINT", () =>
  db.close(() => {
    console.log("Database closed");
    process.exit(0);
  })
);

module.exports = db;
