export default class PagedFilter {
  filter: object
  page: number
  rows: number

  constructor(filter: object, rows = 10, page = 1) {
    this.filter = filter
    this.rows = rows
    this.page = page
  }

  getSkip(): number {
    return this.rows * this.page - 1
  }
}
