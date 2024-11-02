import { UserEstonia } from '../src/UserEstonia'
import { UserLatvia } from '../src/UserLatvia'
import { Contract } from '../src/Contract'

let userEstonia: UserEstonia
let userLatvia: UserLatvia
let newContract: Contract

beforeEach(() => {
  userEstonia = new UserEstonia('Janek', 'Estold', 21, '3720021', 'Tallinn', 'test')
  userLatvia = new UserLatvia('Mihas', 'Latold', 21, '3710021', 'Riga', 'test')
  newContract = new Contract(`Contract${Math.floor(Math.random() * 100)}`)
})

describe('Contract signing possibility for Estonian', () => {
  test('mobileIDAuthorization is not activated', () => {
    userEstonia.mobileIDAuthorization = false
    expect(() => {
      newContract.isSigningPossibleForEst(userEstonia)
    }).toThrow(
      `Contract cannot be signed! mobileIDAuthorization: ${userEstonia.mobileIDAuthorization}`,
    )
  })

  test('mobileIDAuthorization is undefined', () => {
    expect(() => {
      newContract.isSigningPossibleForEst(userEstonia)
    }).toThrow(
      `Contract cannot be signed! mobileIDAuthorization: ${userEstonia.mobileIDAuthorization}`,
    )
  })

  test('mobileIDAuthorization is activated', () => {
    userEstonia.mobileIDAuthorization = true
    newContract.isSigningPossibleForEst(userEstonia)
    expect(newContract.signed).toBeTruthy()
  })
})

describe('Contract signing possibility for Latvian', () => {
  test('activateEParaksts is not activated', () => {
    userLatvia.activateEParakstsForLatvia = false
    expect(() => {
      newContract.isSigningPossibleForLat(userLatvia)
    }).toThrow(
      `Contract cannot be signed! activateEParaksts: ${userLatvia.activateEParakstsForLatvia}`,
    )
  })

  test('mobileIDAuthorization is undefined', () => {
    expect(() => {
      newContract.isSigningPossibleForLat(userLatvia)
    }).toThrow(
      `Contract cannot be signed! activateEParaksts: ${userLatvia.activateEParakstsForLatvia}`,
    )
  })

  test('activateEParaksts is activated', () => {
    userLatvia.activateEParakstsForLatvia = true
    newContract.isSigningPossibleForLat(userLatvia)
    expect(newContract.signed).toBeTruthy()
  })
})
