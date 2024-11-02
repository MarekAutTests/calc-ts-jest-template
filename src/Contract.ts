import { UserEstonia } from './UserEstonia'
import { UserLatvia } from './UserLatvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false //signed: изначально должно быть установлено в false
  }

  isSigningPossibleForEst(user: UserEstonia) {
    if (!user.mobileIDAuthorization) {
      throw new Error(
        `Contract cannot be signed! mobileIDAuthorization: ${user.mobileIDAuthorization}`,
      )
    }
    this.signed = true
  }

  isSigningPossibleForLat(user: UserLatvia) {
    if (!user.activateEParakstsForLatvia) {
      throw new Error(
        `Contract cannot be signed! activateEParaksts: ${user.activateEParakstsForLatvia}`,
      )
    }
    this.signed = true
  }
}
