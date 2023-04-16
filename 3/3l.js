function Student(firstName, lastName, studentID, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.grades = grades;

    this.getAverageGrade = function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    this.printInfo = function() {
        const averageGrade = this.getAverageGrade();
        console.log(`${this.firstName} ${this.lastName} (Student ID: ${this.studentID}) ma średnią ocen wynoszącą ${averageGrade.toFixed(2)}`);
    }
}

const student1 = new Student('Jan', 'Kowalski', 123456, [4.5, 3.5, 4.0]);
student1.printInfo();
