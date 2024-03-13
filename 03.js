const students = [
  {
    name: "Santosh",
    marks: 98,
  },
  {
    name: "Sunil",
    marks: 97,
  },
  {
    name: "Alpha",
    marks: 92,
  },
  {
    name: "Shivani",
    marks: 50,
  },
  {
    name: "Babita",
    marks: 99,
  },
];

const checkResults = (name) => {
  for (let student of students) {
    if (student.name === name) {
      return student.marks > 90
        ? console.log(
            `Congratulations ${student.name}! You have cleared the exam.`
          )
        : console.log(`Sorry ! You have not cleared the exam.`);
    }
  }
  console.log("Invalid User !!!");
};

checkResults("Santosh");

checkResults("Sunil");

checkResults("Alpha j");

