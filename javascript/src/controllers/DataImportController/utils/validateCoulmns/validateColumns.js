const validateColumns = (csvData) => {
  const validateColumns = new Set([
    'teacherEmail',
    'teacherName',
    'studentEmail',
    'studentName',
    'classCode',
    'className',
    'subjectCode',
    'subjectName',
    'toDelete',
  ]);

  for (let row of csvData) {
    for (let columnHeader in row) {
      if (!validateColumns.has(columnHeader) || row[columnHeader] === '') {
        return columnHeader;
      }
    }
    const columnHeaders = new Set(Object.keys(row));
    if (columnHeaders.size != 9) {
      const requiredColumns = [...validateColumns];
      const [first] = requiredColumns.filter(column => !columnHeaders.has(column))
      return first;
    }
  }
  return;
};

export default validateColumns;
