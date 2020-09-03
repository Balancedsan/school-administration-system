import getPrimaryKey from '../getPrimaryKey/getPrimaryKey';

const getPrimaryKeyToDelete = (csvData) => {
  const teacherKey = getPrimaryKey(csvData, 'teacherEmail');
  const studentKey = getPrimaryKey(csvData, 'studentEmail');
  const classKey = getPrimaryKey(csvData, 'classCode');
  const subjectKey = getPrimaryKey(csvData, 'subjectCode');



  return [
    teacherKey,
    studentKey,
    classKey,
    subjectKey,
  ];
};

export default getPrimaryKeyToDelete;
