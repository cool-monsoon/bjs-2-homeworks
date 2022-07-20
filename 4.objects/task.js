function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Ronny", "female", 34);
let student2 = new Student("Anny", "female", 32);
let student3 = new Student("Jonny", "male", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = mark;
  }
  else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum = sum + this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.ecluded = reason;
}
