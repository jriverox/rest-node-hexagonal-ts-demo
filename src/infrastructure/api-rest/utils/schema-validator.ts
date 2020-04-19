/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'koa'

const validateRequest = (contextPart: any, label: string, schema: any, options: any = null): void => {
  if (!schema) return
  const { error } = schema.validate(contextPart, options)
  if (error) {
    throw new Error(`Invalid ${label} - ${error.message}`)
  }
}

const validate = (schema: any) => (ctx: Context, next: () => Promise<any>): Promise<any> => {
  try {
    validateRequest(ctx.headers, 'Headers', schema.headers, { allowUnknown: true })
    validateRequest(ctx.params, 'URL Parameters', schema.params)
    validateRequest(ctx.query, 'URL Query', schema.query)
    if (ctx.request.body) {
      validateRequest(ctx.request.body, 'Request Body', schema.body)
    }
    return next()
  } catch (error) {
    ctx.throw(422, error.message)
  }
}

export default validate
