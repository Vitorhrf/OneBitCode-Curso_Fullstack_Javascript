import { HttpError } from "../errors/HttpError.js";
export const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof HttpError) {
        res.status(error.status).json({ message: error.message });
    }
    else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    }
    else {
        res.status(500).json({ message: "erro interno no servidor desconhecido" });
    }
};
//# sourceMappingURL=error-handler.js.map