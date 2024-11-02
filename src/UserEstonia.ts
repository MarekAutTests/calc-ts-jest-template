import { UserBase } from './UserBase'

export class UserEstonia extends UserBase {
  mobileIDAuthorization: undefined | boolean

  constructor(
    name: string,
    surname: string,
    age: number,
    personalCode: string,
    phone: string,
    address: string,
  ) {
    super(name, surname, age, personalCode, phone, address)
    this.mobileIDAuthorization = undefined
  }
}
