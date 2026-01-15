import express from "express";
import { config } from "dotenv";
import { router } from "./routes/index.js";
import morgan from "morgan";
import { error_middleware } from "./utils/response/res_error.js";
config();
const app = express();
app.use(morgan("tiny"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/test",router.test_router)
app.use("/api/v1/user",router.user_router)
app.use("/api/v1/admin",router.admin_router)
app.use(error_middleware)
export default app;