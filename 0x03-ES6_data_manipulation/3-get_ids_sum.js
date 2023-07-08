import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = (data) => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const _ids = getListStudentIds(students);
  const Id_sum = _ids.reduce((accumulator, currentValue));
  return Id_sum;
};

export default getStudentIdsSum;
