class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.scores = [];
  }
  // instance method
  fullName() {
    return this.firstname + " " + this.lastname;
  }
  // instance method
  addScores(score) {
    this.scores.push(score);
    return this.scores;
  }

  // class method
  static EnrollStudents() {
    return "Student Enrolled!";
  }
}

console.log(Student.EnrollStudents());

let firstStudent = new Student("Cold", "Steele");
let secondStudent = new Student("John", "macke");

console.log(firstStudent.fullName());
firstStudent.addScores(92);
console.log(firstStudent.scores);
