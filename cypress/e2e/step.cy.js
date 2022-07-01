const page = require('../page/page.js')

describe('cypress test', () => {
  it('should login and be in plans', () => {
    page.open()
    page.login()
    page.check('/plans/list')
  })

  it('should login and be in keywords', () => {
    page.open()
    page.login()
    page.clickOn('Keywords')
    page.check('/functions')
  })

  it('should login and be in parameters', () => {
    page.open()
    page.login()
    page.clickOn('Parameters')
    page.check('/parameters')
  })

  it('should login and be in Schedules', () => {
    page.open()
    page.login()
    page.clickOn('Scheduler')
    page.check('/scheduler')
  })
})