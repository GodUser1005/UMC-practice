import express from 'express'
import asyncHandler from 'express-async-handler'
import postRestaurant from '../controllers/restaurant.controller.js'

export const restaurantRouter = express.Router()

restaurantRouter.post('/region/:id', asyncHandler(postRestaurant))
