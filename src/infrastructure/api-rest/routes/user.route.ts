import KoaRouter from 'koa-router'
import UserController from '../controllers/user.controller'

const router = new KoaRouter({ prefix: '/user' })
const controller = new UserController()

router.put('user/register', '/', controller.register)

export default router
