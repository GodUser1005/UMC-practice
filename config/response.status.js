// response.status.js

import { StatusCodes } from "http-status-codes"
export const status = {
  // success
  SUCCESS: {
    status: StatusCodes.OK,
    isSuccess: true,
    code: 2000,
    message: "success!",
  },

  // error
  // common err
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: "COMMON000",
    message: "서버 에러, 관리자에게 문의 바랍니다.",
  },
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "COMMON001",
    message: "잘못된 요청입니다.",
  },
  UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: "COMMON002",
    message: "권한이 잘못되었습니다.",
  },
  METHOD_NOT_ALLOWED: {
    status: StatusCodes.METHOD_NOT_ALLOWED,
    isSuccess: false,
    code: "COMMON003",
    message: "지원하지 않는 Http Method 입니다.",
  },
  FORBIDDEN: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: "COMMON004",
    message: "금지된 요청입니다.",
  },
  NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "COMMON005",
    message: "요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다.",
  },

  // member err
  MEMBER_NOT_FOUND: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "MEMBER4001",
    message: "사용자가 없습니다.",
  },
  NICKNAME_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "MEMBER4002",
    message: "닉네임은 필수입니다.",
  },

  // article err
  ARTICLE_NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "ARTICLE4001",
    message: "게시글이 없습니다.",
  },

  // email err
  EMAIL_ALREADY_EXIST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "EMAIL4001",
    message: "이메일이 이미 존재합니다.",
  },

  // mission err
  MISSION_ALREADY_CHALLENGING: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "MISSION4001",
    message: "이미 진행중인 미션입니다.",
  },

  // data err
  DATA_NOT_EXIST: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "DATA4001",
    message: "DB에 없는 데이터입니다.",
  },

  MISSION_NOT_EXIST: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "DATA4002",
    message: "미션이 존재하지 않거나 이미 종료된 미션입니다.",
  },

  //sql err
  PARAMETER_IS_WRONG: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "DB4001",
    message: "DB오류입니다.",
  },
}
