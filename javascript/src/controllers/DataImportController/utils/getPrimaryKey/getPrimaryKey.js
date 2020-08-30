const getPrimaryKey = (csvData, primaryKey) => {
  return [...new Set(csvData.map(data => data[primaryKey]))];
};

export default getPrimaryKey
