export const insertRestaurantSql =
  "INSERT INTO restaurant (name, address, food_category_id, region_id,status) VALUES (?,?,?,?,'정상');"

export const selectRestaurantSql =
  "SELECT restaurant.name as restaurant_name, restaurant.address as address, food_category.name as category_name, region.name as region " +
  "FROM restaurant JOIN food_category ON restaurant.food_category_id = food_category.id JOIN region ON region.id = restaurant.region_id " +
  "WHERE restaurant.id = ?;"

export const restaurantExistsSql =
  "SELECT EXISTS (SELECT * FROM restaurant WHERE id = ?) as restaurantExists;"

export const insertReviewSql =
  "INSERT INTO review (review_text, score, member_id, restaurant_id) VALUES (?,?,?,?);"
