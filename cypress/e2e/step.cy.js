import page from "../page/page"

describe('cypress test', () => {
  it('should login and be in plans', () => {
    page.open()
    page.login()
    page.check('/plans/list')
  })

  it('should login and be in keywords', () => {
    page.clickOn('Keywords')
    page.check('/functions')
  })

  it('should login and be in parameters', () => {
    page.clickOn('Parameters')
    page.check('/parameters')
  })

  it('should login and be in Schedules', () => {
    page.clickOn('Scheduler')
    page.check('/scheduler')
  })
})