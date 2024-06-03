export const getMissionDTO = (mission) => {
  return {
    message:
      mission.restaurant_id + "번 가게에서 다음의 미션을 생성하였습니다.",
    mission_id: mission.id,
    price: mission.price,
    point: mission.point,
    due_date: mission.due_date,
  }
}
