import { UserEstonia } from '../src/UserEstonia'
import { UserLatvia } from '../src/UserLatvia'
import { KYC } from '../src/KYC'
import { UserBase } from '../src/UserBase'
import { User } from '../src/User'

let userEstonia: UserEstonia
let userLatvia: UserLatvia
let userEstoniaIsYoung: UserEstonia
let userLatviaIsYoung: UserLatvia
let kyc: KYC

beforeEach(() => {
  userEstonia = new UserEstonia('Janek', 'Estold', 21, '3720021', 'Tallinn', 'test')
  userLatvia = new UserLatvia('Mihas', 'Latold', 21, '3710021', 'Riga', 'test')
  userEstoniaIsYoung = new UserEstonia('Janek', 'Estyoung', 12, '3720012', 'Valga', 'test')
  userLatviaIsYoung = new UserLatvia('Mihas', 'Latyoung', 12, '3710012', 'Valka', 'test')
  kyc = new KYC()
})

describe('Test for Estonia user', () => {
  test('new user mobile', () => {
    expect(userEstonia.mobileIDAuthorization).toBeUndefined()
  })

  test('check adult', () => {
    kyc.activateMobileIDForEstonia(userEstonia)
    expect(userEstonia.mobileIDAuthorization).toBeTruthy()
  })

  test('check is too young', () => {
    expect(() => {
      kyc.activateMobileIDForEstonia(userEstoniaIsYoung)
    }).toThrow('User is too young!')
  })
})

describe('Test for Latvia user', () => {
  test('new user mobile', () => {
    expect(userLatvia.activateEParakstsForLatvia).toBeUndefined()
  })

  test('check adult', () => {
    kyc.activateEParakstsForLatvia(userLatvia)
    expect(userLatvia.activateEParakstsForLatvia).toBeTruthy()
  })

  test('check is too young', () => {
    expect(() => {
      kyc.activateEParakstsForLatvia(userLatviaIsYoung)
    }).toThrow('User is too young!')
  })
})
