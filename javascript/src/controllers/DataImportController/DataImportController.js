import Express from 'express';
import Logger from '../../config/logger';
import upload from '../../config/multer';
import { convertCsvToJson } from '../../utils';
import getMappedData from './utils/getMappedData/getMappedData';
import getPrimaryKeysToDelete from './utils/getPrimaryKeysToDelete/getPrimaryKeysToDelete';
import model from '../../models/index';
import { Op } from 'sequelize';

const DataImportController = Express.Router();
const LOG = new Logger('DataImportController.js');

const dataImportHandlerCreate = async (req, res, next) => {
  const { file } = req;

  try {
    const data = await convertCsvToJson(file.path);
    const [
      teacherData,
      studentData,
      classData,
      subjectData,
      teacherStudentData,
      teacherClassData,
      teacherSubjectData,
      classStudentData,
    ] = getMappedData(data);

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

  return res.sendStatus(204);
};

const dataImportHandlerUpdate = async (req, res, next) => {
  const { file } = req;
  try {
    const data = await convertCsvToJson(file.path);
    const [teacherData, studentData, classData, subjectData] = getMappedData(
      data
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
};

const dataImportHandlerDelete = async (req, res, next) => {
  const { file } = req;
  try {
    const data = await convertCsvToJson(file.path);
    const [
      teacherKey,
      studentKey,
      classKey,
      subjectKey,
    ] = getPrimaryKeysToDelete(data);

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
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

DataImportController.post(
  '/upload',
  upload.single('data'),
  dataImportHandlerCreate
);

DataImportController.delete(
  '/upload',
  upload.single('data'),
  dataImportHandlerDelete
);

DataImportController.put(
  '/upload',
  upload.single('data'),
  dataImportHandlerUpdate
);

export default DataImportController;
