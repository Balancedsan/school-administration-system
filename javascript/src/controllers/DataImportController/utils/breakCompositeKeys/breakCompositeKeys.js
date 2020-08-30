const breakCompositeKeys = (compositeKeys) => {
  const seperatedCompositeKeys = [];
  for (let keys of compositeKeys) {
    const [first, second] = Object.keys(keys);
    seperatedCompositeKeys.push({ [first]:keys[first] });
    seperatedCompositeKeys.push( { [second]:keys[second] })
  }
  return seperatedCompositeKeys;
};

export default breakCompositeKeys;
