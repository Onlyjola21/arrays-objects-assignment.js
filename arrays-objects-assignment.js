const student = [
  { id: 1, name: "John James", age: 22, grades: [82, 19, 66] },
  { id: 2, name: "Faith Ben", age: 25, grades: [95, 51, 44] },
  { id: 3, name: "Ridwan Sodiq", age: 20, grades: [75, 85, 90] },
  { id: 4, name: "Stephen Uche", age: 29, grades: [45, 87, 32] },
  { id: 5, name: "Lola Aina", age: 26, grades: [80, 45, 75] },
];

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  const average = sum / grades.length;
  return Number(average.toFixed(2));
}

const studentsWithAverages = student.map((student) => {
  return {
    id: student.id,
    name: student.name,
    age: student.age,
    grades: student.grades,
    average: calculateAverage(student.grades),
  };
});

const passing = studentsWithAverages.filter(
  (students) => students.average >= 60
);

function calculateClassAverage(students) {
  let totalAverage = 0;
  for (let i = 0; i < students.length; i++) {
    totalAverage += students[i].average;
  }
  const classAverage = totalAverage / students.length;
  return Number(classAverage.toFixed(2));
}

console.log(student);
console.log(calculateAverage([80, 85, 75]));
console.log(studentsWithAverages);
console.log(passing);
console.log("Class Average:", calculateClassAverage(studentsWithAverages));
