const { VehicledataDao } = require("../infra");

const api = {};


api.list = async (req, res) => {
  let { valor } = req.query;
  valor = valor || "";
  console.log(`find vehicle data ${valor}`);
  const vehicledata = await new VehicledataDao(req.db).listAll(valor);
  const result = { vehicleData: vehicledata };
  res.json(result);
};

api.findById = async (req, res) => {
  const { vehicledataID } = req.params;
  console.log("####################################");
  console.log(`find vehicle data by ID ${vehicledataID}`);
  const vehicledata = await new VehicledataDao(req.db).findById(vehicledataID);
  if (vehicledata) {
    res.json(vehicledata);
  } else {
    res.status(404).json({ message: "vehicle data does not exist" });
  }
};

module.exports = api;
