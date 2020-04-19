export default class User {
  userName: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  email: string | undefined
  active: boolean

  constructor() {
    this.active = true
  }

  static createFromObject(data: object): User {
    return Object.assign(new User(), data)
  }
}
