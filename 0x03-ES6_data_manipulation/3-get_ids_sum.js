import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const _ids = getListStudentIds(students);
  const IdSum = _ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return IdSum;
};

export default getStudentIdsSum;
