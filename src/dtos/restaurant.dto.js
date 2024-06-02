export const getRestaurantDTO = (restaurant) => {
  return {
    name: restaurant.restaurant_name,
    address: restaurant.address,
    region: restaurant.region,
  }
}
