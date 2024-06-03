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

export const getMissionFromUserDTO = (mission) => {
  return {
    message: "아래의 미션을 도전합니다!",
    mission_id: mission.id,
    price: mission.price,
    point: mission.point,
    due_date: mission.due_date,
  }
}
