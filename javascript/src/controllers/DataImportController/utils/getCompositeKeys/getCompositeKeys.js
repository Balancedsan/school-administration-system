import filterDuplicateKey from '../filterDuplicateKey/filterDuplicateKey';

const getCompsiteKeys = (csvData,primaryKey, secondaryKey) => {
  const mappedData = csvData.map((data) => {
    return {
      [primaryKey]: data[primaryKey],
      [secondaryKey]: data[secondaryKey],
    };
  });

  return filterDuplicateKey(mappedData, primaryKey, secondaryKey);
};


export default getCompsiteKeys
