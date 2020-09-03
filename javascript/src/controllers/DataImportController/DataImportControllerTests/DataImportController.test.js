import request from 'supertest';
import app from '../../../app';
import path from 'path';
import cleanDataBase from '../../../mainUtils/cleanDatabase';
import model from '../../../models/index';

describe('dataImportController test', () => {
  beforeEach(async () => {
    await cleanDataBase();
  });

  describe('POST /api/upload', () => {
    it('should  return a response of 400 if a csv with missing column is uploaded', (done) => {
      request(app)
        .post('/api/upload')
        .attach(
          'data',
          path.resolve(__dirname, './testData/data.missing.sample.csv')
        )
        .expect(400)
        .end(done);
    });

    it('should return a response of 400 if a csv with missing mandatory column is uploaded', (done) => {
      request(app)
        .post('/api/upload')
        .attach(
          'data',
          path.resolve(__dirname, './testData/column.missing.sample.csv')
        )
        .expect(400)
        .end(done);
    });

    it('should return a response of 400 if a csv with invalid column name is uploaded', (done) => {
      request(app)
        .post('/api/upload')
        .attach(
          'data',
          path.resolve(__dirname, './testData/invalid.column.name.csv')
        )
        .expect(400)
        .end(done);
    });

    it('it should be able to upload the excel data and return a response of 204', (done) => {
      request(app)
        .post('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.sample.csv'))
        .expect(204)
        .end(done);
    });
  });

  describe('PUT api/upload', () => {
    beforeEach(async () => {
      await model.sequelize.transaction(async (t) => {
        Promise.all([
          await model.Student.create(
            {
              studentEmail: 'commonstudent3@gmail.com',
              studentName: 'Common Student 1',
            },
            { transaction: t }
          ),
          await model.Teacher.create(
            {
              teacherEmail: 'teacher1@gmail.com',
              teacherName: 'test1',
            },

            { transaction: t }
          ),
          await model.Class.create(
            {
              classCode: 'P1-1',
              className: 'p1 test',
            },

            { transaction: t }
          ),
          await model.Subject.create(
            {
              subjectCode: 'MATHS',
              subjectName: 'maths-1',
            },

            { transaction: t }
          ),
        ]);
      });
    });

    it('should update the teacher"s column correctly', async (done) => {
      await request(app)
        .put('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'))
        .expect(204);

      const teacherData = await model.Teacher.findOne({
        where: {
          teacherEmail: 'teacher1@gmail.com',
        },
      });
      expect(teacherData.dataValues.teacherName).toEqual('Test 3');

      done();
    });

    it('should update the student column correctly', async (done) => {
      await request(app)
        .put('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'))
        .expect(204);

      const studentData = await model.Student.findOne({
        where: {
          studentEmail: 'commonstudent3@gmail.com',
        },
      });

      expect(studentData.dataValues.studentName).toEqual('Common Student 3');
      done();
    });

    it('should be able to update className correctly', async (done) => {
      await request(app)
        .put('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'));

      const classData = await model.Class.findOne({
        where: {
          classCode: 'P1-1',
        },
      });
      expect(classData.dataValues.className).toEqual('P1 Integrity');
      done();
    });

    it('should be able to update the subjectName correctly', async (done) => {
      await request(app)
        .put('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'));

      const subjectData = await model.Subject.findOne({
        where: {
          subjectCode: 'MATHS',
        },
      });

      expect(subjectData.dataValues.subjectName).toEqual('Mathematics');
      done();
    });
  });

  describe('DELETE api/upload', () => {
    beforeEach(async () => {
      await model.sequelize.transaction(async (t) => {
        Promise.all([
          await model.Student.create(
            {
              studentEmail: 'commonstudent3@gmail.com',
              studentName: 'Common Student 3',
            },
            { transaction: t }
          ),
          await model.Teacher.create(
            {
              teacherEmail: 'teacher1@gmail.com',
              teacherName: 'test3',
            },
            { transaction: t }
          ),
          await model.Class.create(
            {
              classCode: 'P1-1',
              className: 'P1 Integrity',
            },
            { transaction: t }
          ),
          await model.Subject.create(
            {
              subjectCode: 'MATHS',
              subjectName: 'Mathematics',
            },

            { transaction: t }
          ),
        ]);
      });
    });

    it('should be able to delete the teacher data successfully', async (done) => {
      await request(app)
        .delete('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'))
        .expect(204);

      const teacherData = await model.Teacher.findOne({
        where: {
          teacherEmail: 'teacher1@gmail.com',
        },
      });
      expect(teacherData).toBeNull();
      done();
    });


    it('should update the student column correctly', async (done) => {
      await request(app)
        .delete('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'))
        .expect(204);

      const studentData = await model.Student.findOne({
        where: {
          studentEmail: 'commonstudent3@gmail.com',
        },
      });

      expect(studentData).toBeNull();
      done();
    });

    it('should be able to update className correctly', async (done) => {
      await request(app)
        .delete('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'));

      const classData = await model.Class.findOne({
        where: {
          classCode: 'P1-1',
        },
      });
      expect(classData).toBeNull();
      done();
    });

    it('should be able to update the subjectName correctly', async (done) => {
      await request(app)
        .delete('/api/upload')
        .attach('data', path.resolve(__dirname, './testData/data.update.csv'));

      const subjectData = await model.Subject.findOne({
        where: {
          subjectCode: 'MATHS',
        },
      });

      expect(subjectData).toBeNull();
      done();
    });

  });
});
