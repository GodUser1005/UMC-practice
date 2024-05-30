// const express = require('express')   // common JS
import express from 'express' // ES6
import { tempRouter } from './src/routes/temp.route.js'
import { response } from './config/response.js'
//import { status } from './config/response.status.js'
import { userRouter } from './src/routes/user.route.js'
import { restaurantRouter } from './src/routes/restaurant.route.js'
import cors from 'cors'

import { specs } from './config/swagger.config.js'
import SwaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.set('port', process.env.PORT)
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs))

// router setting

app.use('/temp', tempRouter)

// router for user
app.use('/user', userRouter)

// router for restaurant
app.use('/restaurant', restaurantRouter)

// app.use((req,res,next) => {
//   const err = new BaseError(status.NOT_FOUND);
//   next(err);
// });

app.use((err, req, res, next) => {
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.data.status).send(response(err.data))
})

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
})
