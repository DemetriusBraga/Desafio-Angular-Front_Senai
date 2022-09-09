const { VehicleDao } = require("../infra");

const api = {};


api.list = async (req, res) => {
  let { valor } = req.query;
  valor = valor || "";
  console.log(`find vehicle ${valor}`);
  const vehicle = await new VehicleDao(req.db).listAll(valor);
  const result = { vehicles: vehicle };
  res.json(result);
};

api.findById = async (req, res) => {
  const { vehicleID } = req.params;
  console.log("####################################");
  console.log(`find vehicle by ID ${vehicleID}`);
  const vehicle = await new VehicleDao(req.db).findById(vehicleID);
  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ message: "vehicle does not exist" });
  }
};

module.exports = api;
