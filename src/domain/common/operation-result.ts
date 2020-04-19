export default class OperationResult {
  success: boolean
  errorMessages: Array<string>
  result: object

  constructor(success: boolean, errosMessages: Array<string> = [], result = {}) {
    this.success = success
    this.errorMessages = errosMessages
    this.result = result
  }

  static ok(value: object = {}): OperationResult {
    return new OperationResult(true, [], value)
  }

  static fail(error: string): OperationResult {
    const errors = []
    errors.push(error)
    return new OperationResult(false, errors)
  }

  static failMultipleErrors(errors: Array<string>): OperationResult {
    return new OperationResult(false, errors)
  }
}
