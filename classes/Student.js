class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullName() {
    return this.firstname + " " + this.lastname;
  }
}
let firstStudent = new Student("Cold", "Steele");
let secondStudent = new Student("John", "macke");

console.log(firstStudent.fullName());
