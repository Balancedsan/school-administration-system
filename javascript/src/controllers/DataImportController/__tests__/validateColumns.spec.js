import validateColumns from '../utils/validateCoulmns/validateColumns';

describe('validate Columns', () => {
  it('should return an invalid column name when a unknown column is parsed ', () => {
    const data = [
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        unknown: '',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
    ];

    expect(validateColumns(data)).toEqual('unknown');
  });

  it('should return the column name of the field if one of the column name is empty', () => {
    const data = [
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: '',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: null,
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
    ];

    expect(validateColumns(data)).toEqual('studentName');
  });

  it('should return the name of any missing column not included as a column heading ', () => {
    const data = [
      {
        teacherEmail: 'test@gmail.com',
        studentEmail: 'student@gmail.com',
        studentName: 'TEST',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'test1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
        toDelete: '1',
      },
    ];

    expect(validateColumns(data)).toEqual('teacherName');
  });
});
