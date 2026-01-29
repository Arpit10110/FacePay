import express from "express";
import { helper } from "../../utils/index.js";

const test_router = express.Router();

test_router.get("/",helper.rate_limit.read_limit, (req, res,next) => {
    try {
        helper.response.message_success_res(res,"Welcome to FacePay Backend",200)
    } catch (error:any) {
       return next ( new helper.res_error(error.message,500,false))
    }
});

export default test_router;
