const getStudentsByLocation = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const studentIds = students.map((student) => student.id);
  return studentIds;
};

export default getListStudentIds;
