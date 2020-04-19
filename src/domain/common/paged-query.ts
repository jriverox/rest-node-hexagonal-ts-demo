export default class PagedQuery {
  filter: object
  page: number
  size: number

  constructor(filter: object, size = 10, page = 1) {
    this.filter = filter
    this.size = size
    this.page = page
  }

  getSkip(): number {
    return this.size * (this.page - 1)
  }
}
