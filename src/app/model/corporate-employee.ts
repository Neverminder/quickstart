export class CorporateEmployee {
  name?: string;
  gender?: string;
  company?: string;
  age?: number;
  date?: string;

  constructor(name?: string, gender?: string, company?: string, age?: number, date?: string) {
    this.name = name;
    this.gender = gender;
    this.company = company;
    this.age = age;
    this.date = date;
  }
}
