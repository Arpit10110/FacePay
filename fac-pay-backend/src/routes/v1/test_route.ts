import express from "express";
import { helper } from "../../utils/index.js";

const test_router = express.Router();

test_router.get("/",helper.rate_limit.read_limit, (req, res) => {
    try {
        helper.response.message_success_res(res,"Welcome to FacePay Backend",200)
    } catch (error:any) {
        return res.json({
            success:false,
            message:error.message
        })
    }
});

export default test_router;
