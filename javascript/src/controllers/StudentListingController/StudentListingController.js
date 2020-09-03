import Express from 'express';
import Logger from '../../config/logger';
const StudentListingController = Express.Router();
const LOG = new Logger('StudentListingController.js');

const studentListing = async (req, res, next) => {
  console.log('i am runned');
  const { classCode, offset, limit } = req.params;
  console.log(classCode);
  console.log(offset);
  console.log(limit);

  res.send(200);
};

StudentListingController.get(
  '/class/:classCode/:offset/:limit',
  studentListing
);

export default StudentListingController;
