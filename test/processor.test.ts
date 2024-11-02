import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Marek', 'Vorp', '12345678', 'Toompea')
  processor = new Processor()
})

/*
Необработанный пользователь должен изначально иметь undefined значение согласия
Используйте матчер toBeUndefined. Не используйте giveConsent или verifyConsent.
 */
test('check user undefined', () => {
  expect(user.consentGiven).toBeUndefined()
})

/*
 Processor может предоставить согласие пользователю
Используйте матчер toBe. Используйте только метод giveConsent.
 */
test('check processor approve', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

/*
3 Processor должен проверить, что согласие подтверждено (true)
Используйте матчер toBeTruthy. Используйте оба метода: giveConsent и verifyConsent.
 */
test('check processor verify', () => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy() //или можно .toBe(true)
})

/*
4 Processor должен проверять, что согласие не подтверждено, если оно не предоставлено
Используйте матчер toBeFalsy.
Используйте только метод verifyConsent.
 */
test('negative test', (): void => {
  expect(processor.checkConsent(user)).toBeFalsy()
})
