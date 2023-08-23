const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.trim().split('\n');

    lines.shift(); // Remove header line

    let totalStudents = 0;
    const studentsByField = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (field) {
        totalStudents += 1;

        if (studentsByField[field]) {
          studentsByField[field].count += 1;
          studentsByField[field].list.push(firstname);
        } else {
          studentsByField[field] = {
            count: 1,
            list: [firstname],
          };
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const { count, list } = studentsByField[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const databasePath = 'database.csv';
countStudents(databasePath);

module.exports = countStudents;
