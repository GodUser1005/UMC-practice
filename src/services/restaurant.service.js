import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import { getRestaurantDTO } from "../dtos/restaurant.dto.js"
import {
  addReview,
  insertRestaurant,
  restaurantExists,
} from "../models/restaurant.dao.js"
import { selectRestaurant } from "../models/restaurant.dao.js"

export const createRestaurant = async (body) => {
  const restaurant_id = await insertRestaurant({
    restaurant_name: body.restaurant_name,
    address: body.address,
    food_category_id: body.food_category_id,
    region_id: body.region_id,
  })

  return getRestaurantDTO(await selectRestaurant(restaurant_id))
}

export const createReview = async (body) => {
  const restaurantExsits = await restaurantExists(body.restaurant_id)

  if (restaurantExsits == 0) {
    throw new BaseError(status.DATA_NOT_EXIST)
  } else {
    return await addReview({
      review_text: body.review_text,
      score: body.score,
      member_id: body.member_id,
      restaurant_id: body.restaurant_id,
    })
  }
}
