export class User {
  name: string
  surname: string
  age: number
  phone: string
  address: string
  consentGiven: undefined | boolean

  constructor(name: string, surname: string, age: number, phone: string, address: string) {
    this.name = name
    this.surname = surname
    this.age = age
    this.phone = phone
    this.address = address
  }
}
