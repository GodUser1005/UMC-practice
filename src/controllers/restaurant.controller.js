import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"
import {
  createRestaurant,
  createReview,
} from "../services/restaurant.service.js"

export const postRestaurant = async (req, res, next) => {
  console.log("가게를 생성합니다.")
  console.log("body:", req.body) // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await createRestaurant(req.body)))
}

export const postReview = async (req, res, next) => {
  console.log("리뷰를 생성합니다.")
  console.log("body:", req.body)

  res.send(response(status.SUCCESS, await createReview(req.body)))
}
