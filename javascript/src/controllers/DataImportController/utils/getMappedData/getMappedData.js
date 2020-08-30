import mapCSVData from '../mapCSVdata/mapCSVData';
import getTeacherStudentData from '../getTeacherStudentData/getTeacherStudentData';
import getCompsiteKeys from '../getCompositeKeys/getCompositeKeys';


const getMappedData = (csvData) => {
  const teacherData = mapCSVData(csvData, 'teacherEmail', 'teacherName');
  const studentData = mapCSVData(csvData, 'studentEmail', 'studentName');
  const classData = mapCSVData(csvData, 'classCode', 'className');
  const subjectData = mapCSVData(csvData, 'subjectCode', 'subjectName');
  const teacherStudentData = getTeacherStudentData(csvData);
  const teacherClassData = getCompsiteKeys(
    csvData,
    'teacherEmail',
    'classCode'
  );
  const teacherSubjectData = getCompsiteKeys(
    csvData,
    'teacherEmail',
    'subjectCode'
  );
  const classStudentData = getCompsiteKeys(
    csvData,
    'classCode',
    'studentEmail'
  );

  return [teacherData,studentData,classData,subjectData,teacherStudentData,teacherClassData,teacherSubjectData,classStudentData];
}


export default getMappedData;
