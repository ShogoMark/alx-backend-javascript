const getStudentsByLocation = (data, city) => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const studentsFiltered = students.filter((student) => student.location === city));
  return studentsFiltered;
};


export default getStudentsByLocation;
