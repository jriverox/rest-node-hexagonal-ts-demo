import KoaRouter from 'koa-router'
import UserController from '../controllers/user.controller'
import schemaValidator from '../utils/schema-validator'
import userSchemas from '../schemas/user.schema'

const registerValidator = schemaValidator({ body: userSchemas.register })
const queryValidator = schemaValidator({ body: userSchemas.query })
const userNameParamsValidator = schemaValidator({ params: userSchemas.userNameParams })
const router = new KoaRouter({ prefix: '/user' })
const controller = new UserController()

router.put('user/register', '/', registerValidator, controller.register)
router.post('user/query', '/', queryValidator, controller.find)
router.get('user/get', '/:username', userNameParamsValidator, controller.findByUsername)
router.delete('user/delete', '/:username', userNameParamsValidator, controller.delete)

export default router
