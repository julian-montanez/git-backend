import { Router } from "express";
import infoControler from "../controllers/informacion.js";

const infoRouter = Router();

infoRouter.post("/", infoControler.create)

infoRouter.get("/", infoControler.readAll)

infoRouter.get("/:id", infoControler.readOne)

// infoRouter.get("/:name", infoControler.getName)

infoRouter.get("/:flavor/:name", infoControler.getFlavorAndName)

infoRouter.put("/:id", infoControler.update)

infoRouter.delete("/:id", infoControler.delete)

export default infoRouter;