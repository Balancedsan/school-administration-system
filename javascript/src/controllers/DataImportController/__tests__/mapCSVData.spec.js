import mapCSVData from '../utils/mapCSVdata/mapCSVData';

describe('mapCSVData', () => {
  describe('edge cases', () => {
    it('should throw an error if a non array is passed in', () => {
      expect(() => mapCSVData('rawar')).toThrow(
        'csvData passed in is not a array'
      );
    });

    it('should throw an error when a non string argument is passed in', () => {
      expect(() => mapCSVData([], 1, 2)).toThrow(
        'attribute passed is not a string'
      );
    });
  });

  describe('testing of filtering of data', () => {
    it('should return  an array of teacher records when i try to filter the csvdata by teacherEmail and teacherName', () => {
      const csvData = [
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher1',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
        {
          teacherEmail: 'test1@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
        {
          teacherEmail: 'test2@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
      ];

      expect(mapCSVData(csvData, 'teacherEmail', 'teacherName')).toEqual([
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher1',
        },
        {
          teacherEmail: 'test1@gmail.com',
          teacherName: 'teacher2',
        },
        {
          teacherEmail: 'test2@gmail.com',
          teacherName: 'teacher2',
        },
      ]);
    });

    it('should return an array of class records when i try to filter the csvData by classCode and className', () => {
      const csvData = [
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher1',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
        {
          teacherEmail: 'test1@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-2',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test2@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-3',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
      ];

      expect(mapCSVData(csvData, 'classCode', 'className')).toEqual([
        {
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          classCode: 'P1-2',
          className: 'RARWSRWARW',
        },
        {
          classCode: 'P1-3',
          className: 'RARWSRWARW',
        },
      ]);
    });

    it('should return an array of subject records when i try to filter the data by subjectName and subjectCode', () => {
      const csvData = [
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher1',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
          subjectCode: 'MATHS',
          subjectName: 'Mathematics',
        },
        {
          teacherEmail: 'test1@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-2',
          subjectCode: 'ENGLISH',
          subjectName: 'English',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test2@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-3',
          className: 'RARWSRWARW',
          subjectCode: 'SCIENCE',
          subjectName: 'Science',
        },
      ];

      expect(mapCSVData(csvData, 'subjectCode', 'subjectName')).toEqual([{
        subjectCode: 'MATHS',
        subjectName: 'Mathematics',
      },
      {
        subjectCode: 'ENGLISH',
        subjectName: 'English',
      },
      {
        subjectCode: 'SCIENCE',
        subjectName: 'Science'
      }
    ]);
    });

    it('should return  an array of student records when i try to filter the csvdata by studentEmail and studentName', () => {
      const csvData = [
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher1',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test1@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student1@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test2@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student2@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
      ];
      expect(mapCSVData(csvData, 'studentEmail', 'studentName')).toEqual([
        {
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
        },
        {
          studentEmail: 'student1@gmail.com',
          studentName: 'student1',
        },
        {
          studentEmail: 'student2@gmail.com',
          studentName: 'student1',
        },
      ]);
    });
  });

  describe('testing of duplicate key', () => {
    it('should return the latest record of teachers showing teachers when the same teacherEmail is passed in', () => {
      const csvData = [
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
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher3',
          studentEmail: 'student@gmail.com',
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
      expect(mapCSVData(csvData, 'teacherEmail', 'teacherName')).toEqual([
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher5',
        },
      ]);
    });

    it('should return the latest record of teacher when the same email is passed in regardless of how the order of the initial csvArray is passed in', () => {
      const csvData = [
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
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'random@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher3',
          studentEmail: 'student@gmail.com',
          studentName: 'student1',
          classCode: 'P1-1',
          className: 'RARWSRWARW',
        },
        {
          teacherEmail: 'random2@gmail.com',
          teacherName: 'teacher2',
          studentEmail: 'student@gmail.com',
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

      expect(mapCSVData(csvData, 'teacherEmail', 'teacherName')).toEqual([
        {
          teacherEmail: 'test@gmail.com',
          teacherName: 'teacher5',
        },
        {
          teacherEmail: 'random@gmail.com',
          teacherName: 'teacher2',
        },
        {
          teacherEmail: 'random2@gmail.com',
          teacherName: 'teacher2',
        },
      ]);
    });
  });
});
