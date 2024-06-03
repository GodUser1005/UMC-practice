import { pool } from "../../config/db.config.js"
import {
  insertRestaurantSql,
  insertReviewSql,
  restaurantExistsSql,
} from "./restaurant.sql.js"
import { selectRestaurantSql } from "./restaurant.sql.js"
import { status } from "../../config/response.status.js"
import { BaseError } from "../../config/error.js"

export const insertRestaurant = async (data) => {
  try {
    const conn = await pool.getConnection()
    const result = await conn.query(insertRestaurantSql, [
      data.restaurant_name,
      data.address,
      data.food_category_id,
      data.region_id,
    ])
    conn.release()
    return result[0].insertId
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const selectRestaurant = async (restaurant_id) => {
  try {
    const conn = await pool.getConnection()
    const [restaurant] = await conn.query(selectRestaurantSql, restaurant_id)
    console.log(restaurant[0])
    conn.release()

    return restaurant[0]
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const restaurantExists = async (restaurant_id) => {
  try {
    const conn = await pool.getConnection()
    const [result] = await conn.query(restaurantExistsSql, restaurant_id)

    conn.release()
    return result[0].restaurantExists
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}

export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection()
    const result = await conn.query(insertReviewSql, [
      data.review_text,
      data.score,
      data.member_id,
      data.restaurant_id,
    ])
    conn.release()
    return result[0].insertId
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG)
  }
}
