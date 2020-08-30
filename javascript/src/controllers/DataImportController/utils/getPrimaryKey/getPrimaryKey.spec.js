import getPrimaryKey from './getPrimaryKey';

describe('testing of getPrimaryKey', () => {
  let csvData;
  beforeEach(()=> {
    csvData=[
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher1',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher2',
        studentEmail: 'student1@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher3',
        studentEmail: 'student2@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher4',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
      },
      {
        teacherEmail: 'test@gmail.com',
        teacherName: 'teacher5',
        studentEmail: 'student@gmail.com',
        studentName: 'student1',
        classCode: 'P1-1',
        className: 'RARWSRWARW',
      },
    ];
  })


  it('should return a list of unique primary key values of teacherEmail when duplicate values are passed ', () => {
    expect(getPrimaryKey(csvData,'teacherEmail')).toEqual(['test@gmail.com']);
  });

  it('should return a list of unique primary key values of studentEmail when duplicate values are passed', () => {
    expect(getPrimaryKey(csvData,'studentEmail')).toEqual(['student@gmail.com','student1@gmail.com','student2@gmail.com'])
  });
});
