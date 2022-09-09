const { vehicledataAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/vehicledata")
    .get(wrapAsync(vehicledataAPI.list));
   

  app.route("/vehicledata/:vehicledataID").get(wrapAsync(vehicledataAPI.findById));
};
