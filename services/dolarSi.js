import axios, { HttpStatusCode } from "axios";
import * as xm2 from "xml-js";

export default async function getDolarSiData() {
  return axios
    .get(process.env.DOLARSI_API)
    .then((res) => xm2.xml2json(res.data, { compact: true, spaces: 4 }))
    .then((json) => JSON.parse(json))
    .catch((e) => {
      throw {
        error: e,
        code: HttpStatusCode.InternalServerError,
      };
    });
}
