import { convertCsvToJson } from '../../../mainUtils';
import validateColumns from '../utils/validateCoulmns/validateColumns';
import errorBase from '../../../errors/ErrorBase';

const fileParser = async (req, res, next) => {
  const { file } = req;

  try {
    const csvData = await convertCsvToJson(file.path);
    const invalidColumnName = validateColumns(csvData);
    if (invalidColumnName) {
      const error = new errorBase(
        `${invalidColumnName} is a invalid column or has a undefined value`,
        400,
        400
      );
      throw error;
    }
    req.csvData = csvData;
    next();
  } catch (error) {
    return next(error);
  }
};

export default fileParser;
