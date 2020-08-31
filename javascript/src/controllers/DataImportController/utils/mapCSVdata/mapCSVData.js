const mapCSVData = (csvData, primaryKey, attribute) => {
  if (!Array.isArray(csvData)) {
    throw new Error('csvData passed in is not a array');
  }

  if (typeof primaryKey !== 'string' || typeof attribute !== 'string') {
    throw new Error('attribute passed is not a string');
  }

  const mappedData = csvData.map((data) => {
    return {
      [primaryKey]: data[primaryKey],
      [attribute]: data[attribute],
    };
  });

  const filteredArray = updateDuplicate(mappedData,primaryKey,attribute);

  return filteredArray;
};

const updateDuplicate = (mappedData,primaryKey,attribute) => {
  const latestArray = [];

  for(let data of mappedData){
    const recordExist = latestArray.find(latest => latest[primaryKey] === data[primaryKey]);
    if(recordExist){
      recordExist[attribute] = data[attribute]
    }else{
      latestArray.push(data);
    }
  }

  return latestArray;
}



export default mapCSVData;
