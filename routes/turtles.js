import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('turtles are cool')
})

export {
  router
}
