import getCompsiteKeys from '../getCompositeKeys/getCompositeKeys';
import getPrimaryKey from '../getPrimaryKey/getPrimaryKey';
import breakCompositeKeys from '../breakCompositeKeys/breakCompositeKeys';

const getPrimaryKeyToDelete = (csvData) => {
  const teacherKey = getPrimaryKey(csvData, 'teacherEmail');
  const studentKey = getPrimaryKey(csvData, 'studentEmail');
  const classKey = getPrimaryKey(csvData, 'classCode');
  const subjectKey = getPrimaryKey(csvData, 'subjectCode');
  const teacherStudentKeys = breakCompositeKeys(getCompsiteKeys(
    csvData,
    'teacherEmail',
    'studentEmail'
  ));
  const teacherClassKeys = breakCompositeKeys(getCompsiteKeys(
    csvData,
    'teacherEmail',
    'classCode'
  ));
  const teacherSubjectKeys = breakCompositeKeys(getCompsiteKeys(
    csvData,
    'teacherEmail',
    'subjectCode'
  ));
  const classStudentKeys = breakCompositeKeys(getCompsiteKeys(
    csvData,
    'classCode',
    'studentEmail'
  ));


  return [
    teacherKey,
    studentKey,
    classKey,
    subjectKey,
    teacherStudentKeys,
    teacherClassKeys,
    teacherSubjectKeys,
    classStudentKeys,
  ];
};

export default getPrimaryKeyToDelete;
