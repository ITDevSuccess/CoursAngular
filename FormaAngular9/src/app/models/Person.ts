export class Person{
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;

  constructor(id = 0, name = '', firstname = "", age = 0, path = "", cin = 1, job = ""){
    this.id = id;
    this.name = name;
    this.firstname= firstname;
    this.path = path;
    this.age = age;
    this.cin  = cin;
    this.job  = job;
  }
}
