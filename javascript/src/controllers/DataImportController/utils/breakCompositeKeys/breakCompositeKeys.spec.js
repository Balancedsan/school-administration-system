import breakCompositeKeys from './breakCompositeKeys';

describe('breakCompositeKeysFunction', () => {
  it.only('should be able to seperate out the keys to a new array', () => {
    const testData = [
      {
        teacherEmail: 'teacher@gmail.com',
        studentEmail: 'student@gmail.com',
      },
    ];

    expect(breakCompositeKeys(testData)).toEqual([
      {
        teacherEmail: 'teacher@gmail.com',
      },
      {
        studentEmail: 'student@gmail.com',
      },
    ]);
  });
});
