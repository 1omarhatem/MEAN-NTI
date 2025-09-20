let students = [
  { name: "Omar", marks: [90, 85, 95], address: { city: "Cairo" } },
  { name: "Layla", marks: [70, 80, 75] },
  { name: "Ahmed", marks: [88, 92, 85], address: { city: "Giza" } }
];
function showReport({ name, marks = [], address }) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let avg = marks.length > 0 ? total / marks.length : 0;

    console.log(`Student Report:
Name: ${name}
City: ${address?.city ?? "Not Available"}
Total Marks: ${total}
Average Marks: ${avg}
    `);

    console.log();
}

for (let student of students) {
  showReport(student);
}

let name = "Sara";
let marks = [100, 100, 90];
let address = { city: "Alex" };

let newStudent = { name, marks, address };
let fullStudent = { ...newStudent, graduated: true };

students.push(fullStudent);

console.log(" After Adding New Student:\n");
for (let student of students) {
  showReport(student);
}
