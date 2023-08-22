const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const fieldCounts = {};

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');

      if (values.length !== 4) {
        console.error(`Malformed data in line ${i + 1}.`);
        continue;
      }

      const [, , , field] = values;

      if (field && field.trim() !== '') {
        if (!fieldCounts[field]) {
          fieldCounts[field] = {
            count: 1,
            names: []
          };
        }
        fieldCounts[field].count++;
      }
    }

    console.log(`Number of students: ${fieldCounts['CS'].count + fieldCounts['SWE'].count}`);
    for (const field in fieldCounts) {
      if (field !== 'firstname') {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
