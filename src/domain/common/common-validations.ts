import Constants from '../common/constants'

export default {
  validateEmail: (email: string): boolean => {
    if (!email) return false
    const regex = RegExp(Constants.emailValidationPattern)
    return regex.test(email)
  },
  validatePersonName: (name: string): boolean => {
    if (!name) return false
    const regex = RegExp(Constants.personNameValidationPattern)
    return regex.test(name)
  },
  validateAlphanumeric: (value: string): boolean => {
    if (!value) return false
    const regex = RegExp(Constants.alphanNumericValidationPattern)
    return regex.test(value)
  },
}
