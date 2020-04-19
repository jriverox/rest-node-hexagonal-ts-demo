import Joi from '@hapi/joi'
import Constants from '../../../domain/common/constants'

const register = Joi.object().keys({
  userName: Joi.string().min(3).regex(RegExp(Constants.alphanNumericValidationPattern)).required(),
  firstName: Joi.string().min(2).regex(RegExp(Constants.personNameValidationPattern)).required(),
  lastName: Joi.string().min(2).regex(RegExp(Constants.personNameValidationPattern)).required(),
  email: Joi.string().email().required(),
  active: Joi.boolean().default(true).optional(),
})

const query = Joi.object().keys({
  filter: Joi.object({
    userName: Joi.string().optional(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().optional(),
    active: Joi.boolean().optional(),
  }),
  page: Joi.number().default(1).optional(),
  size: Joi.number().default(10).optional(),
})

const userNameParams = Joi.object().keys({
  username: Joi.string().min(3).required()
})

export default {
  register,
  query,
  userNameParams,
}
