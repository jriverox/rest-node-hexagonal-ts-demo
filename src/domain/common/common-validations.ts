export default {
  validateEmail: (email: string): boolean => {
    const regex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  },
  validatePersonName: (name: string): boolean => {
    const regex = /^[A-Za-z]+$/
    return regex.test(name)
  },
  validateAlphanumeric: (value: string): boolean => {
    const regex = /^[a-zA-Z0-9]+$/
    return regex.test(value)
  },
}
