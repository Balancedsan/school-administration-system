import filterDuplicateKey from '../filterDuplicateKey/filterDuplicateKey';

const getTeacherStudentData = (csvData) => {
  const mappedData = csvData.map((data) => {
    return {
      teacherEmail: data.teacherEmail,
      studentEmail: data.studentEmail,
      isTeaching: data.toDelete,
    };
  });

  return filterDuplicateKey(mappedData, 'teacherEmail', 'studentEmail');
};

export default getTeacherStudentData;
