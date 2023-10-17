import { Router } from "express";
import {
  getAll,
  getBlueCronista,
  getBlueDolarHoy,
  getOficial,
  getOficialDolarHoy,
} from "../handlers/dolar.js";
const router = Router();

router.get("/all", getAll);
router.get("/blue-cronista", getBlueCronista);
router.get("/blue-dolarhoy", getBlueDolarHoy);
router.get("/oficial-dolarhoy", getOficialDolarHoy);
// router.get("/BLUE", getAll);

function haltOnTimedout(req, res, next) {
  if (!req.timeout) next();
}
export default router;
