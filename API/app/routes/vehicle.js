const { vehicleAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/vehicle")
    .get(wrapAsync(vehicleAPI.list));
    

  app.route("/vehicle/:vehicleID").get(wrapAsync(vehicleAPI.findById));
};
