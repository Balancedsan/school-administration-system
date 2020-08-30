const filterDuplicateKey = (mappedData, primaryKey, secondaryKey) => {
  const latestElements = [];

  for (let element of mappedData) {
    const recordExist = latestElements.find((data) => {
      return (
        data[primaryKey] === element[primaryKey] &&
        data[secondaryKey] === element[secondaryKey]
      );
    });
    if (recordExist) {
      continue;
    } else {
      latestElements.push(element);
    }
  }

  return latestElements;
};

export default filterDuplicateKey;
