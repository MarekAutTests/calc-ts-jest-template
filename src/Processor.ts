import { User } from './User'

export class Processor {
  givenConsent(user: User): void {
    user.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  isAgeAcceptableForConsent(user: User): boolean {
    if (user.age >= 18) {
      return true
    }
    return false
  }

  revokeConsent(user: User): void {
    user.consentGiven = false
  }
}
