import fs from "fs";
import * as swaggerUi from "swagger-ui-express";

var options = {
  explorer: true,
};

//init swagger documentation.
export function initSwagger(app, path) {
  var swaggerDocument = fs.readFileSync("./documentation/swagger.json");
  var swaggerJSON = JSON.parse(swaggerDocument);
  app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerJSON, options));
}
