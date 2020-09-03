import Express from 'express';
import Logger from '../../config/logger';
import fileParser from './middleware/fileParser';
import upload from '../../config/multer';
import getMappedData from './utils/getMappedData/getMappedData';
import getPrimaryKeysToDelete from './utils/getPrimaryKeysToDelete/getPrimaryKeysToDelete';
import model from '../../models/index';

const DataImportController = Express.Router();
const LOG = new Logger('DataImportController.js');

const dataImportHandlerCreate = async (req, res, next) => {
  const { csvData } = req;

  try {
    const [
      teacherData,
      studentData,
      classData,
      subjectData,
      teacherStudentData,
      teacherClassData,
      teacherSubjectData,
      classStudentData,
    ] = getMappedData(csvData);

    await model.sequelize.transaction(async (t) => {
      await model.Student.bulkCreate(studentData, { transaction: t });
      await model.Teacher.bulkCreate(teacherData, { transaction: t });
      await model.Class.bulkCreate(classData, { transaction: t });
      await model.Subject.bulkCreate(subjectData, { transaction: t });
      await model.TeacherStudent.bulkCreate(teacherStudentData, {
        transaction: t,
      });
      await model.TeacherClass.bulkCreate(teacherClassData, { transaction: t });
      await model.TeacherSubject.bulkCreate(teacherSubjectData, {
        transaction: t,
      });
      await model.ClassStudent.bulkCreate(classStudentData, { transaction: t });
    });
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
  return res.status(204).send('excel data is imported successfully');
};

const dataImportHandlerUpdate = async (req, res, next) => {
  const { csvData } = req;
  try {
    const [teacherData, studentData, classData, subjectData] = getMappedData(
      csvData
    );

    await model.sequelize.transaction(async (t) => {
      await model.Student.bulkCreate(studentData, {
        transaction: t,
        updateOnDuplicate: ['studentName'],
      });
      await model.Teacher.bulkCreate(teacherData, {
        transaction: t,
        updateOnDuplicate: ['teacherName'],
      });
      await model.Class.bulkCreate(classData, {
        transaction: t,
        updateOnDuplicate: ['className'],
      });
      await model.Subject.bulkCreate(subjectData, {
        transaction: t,
        updateOnDuplicate: ['subjectName'],
      });
    });
  } catch (err) {
    LOG.error(err);
    return next(err);
  }

  return res.status(204).send('data is updated successfully');
};

const dataImportHandlerDelete = async (req, res, next) => {
  const { csvData } = req;

  try {
    const [
      teacherKey,
      studentKey,
      classKey,
      subjectKey,
    ] = getPrimaryKeysToDelete(csvData);

    await model.sequelize.transaction(async (t) => {
      await model.Teacher.destroy(
        {
          where: {
            teacherEmail: teacherKey,
          },
        },
        {
          transaction: t,
        }
      );

      await model.Student.destroy(
        {
          where: {
            studentEmail: studentKey,
          },
        },
        {
          transaction: t,
        }
      );

      await model.Class.destroy(
        {
          where: {
            classCode: classKey,
          },
        },
        {
          transaction: t,
        }
      );

      await model.Subject.destroy(
        {
          where: {
            subjectCode: subjectKey,
          },
        },
        {
          transaction: t,
        }
      );
    });

    return res.status(204).send('successfully deleted data from the table');
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

DataImportController.post(
  '/upload',
  upload.single('data'),
  fileParser,
  dataImportHandlerCreate
);

DataImportController.delete(
  '/upload',
  upload.single('data'),
  fileParser,
  dataImportHandlerDelete
);

DataImportController.put(
  '/upload',
  upload.single('data'),
  fileParser,
  dataImportHandlerUpdate
);

export default DataImportController;
