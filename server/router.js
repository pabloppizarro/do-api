import { Router } from "express";
import { getAll, getOficial } from "../handlers/dolar.js";

const router = Router();

router.get("/all", getAll);
router.get("/oficial", getOficial);
// router.get("/BLUE", getAll);

export default router;
