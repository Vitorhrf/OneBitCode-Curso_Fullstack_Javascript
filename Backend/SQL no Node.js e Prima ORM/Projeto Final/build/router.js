import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";
const router = Router();
router.get("/status", (req, res, next) => {
    try {
        throw new HttpError(401, "não autorizado");
        res.json({ message: "OK" });
    }
    catch (error) {
        next(error);
    }
});
export { router };
//# sourceMappingURL=router.js.map