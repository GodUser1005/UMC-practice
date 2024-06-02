import express from "express"
import asyncHandler from "express-async-handler"
import {
  postRestaurant,
  postReview,
} from "../controllers/restaurant.controller.js"

export const restaurantRouter = express.Router()

restaurantRouter.post("/", asyncHandler(postRestaurant))
restaurantRouter.post("/reviews", asyncHandler(postReview))
