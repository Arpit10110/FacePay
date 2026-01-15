import { rateLimit } from 'express-rate-limit'

export const read_limit = rateLimit({
	windowMs: 10 * 60 * 1000, 
	limit: 100, 
    message:{
        success:false,
        message:"Too many requests , please try again after 10 minutes"
    }
})
export const post_limit = rateLimit({
	windowMs: 10 * 60 * 1000, 
	limit: 100, 
    message:{
        success:false,
        message:"Too many requests , please try again after 10 minutes"
    }
})