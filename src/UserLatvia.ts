import { UserBase } from './UserBase'

export class UserLatvia extends UserBase {
  activateEParakstsForLatvia: undefined | boolean

  constructor(
    name: string,
    surname: string,
    age: number,
    personalCode: string,
    phone: string,
    address: string,
  ) {
    super(name, surname, age, personalCode, phone, address)
    this.activateEParakstsForLatvia = undefined
  }
}
