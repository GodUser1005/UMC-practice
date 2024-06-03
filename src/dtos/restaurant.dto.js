export const getRestaurantDTO = (restaurant) => {
  return {
    name: restaurant.restaurant_name,
    address: restaurant.address,
    region: restaurant.region,
  }
}

export const getReviewIdDTO = (reviewId) => {
  return {
    review_id: reviewId,
    message: "소중한 리뷰 감사합니다.",
  }
}
