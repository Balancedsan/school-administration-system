import request from 'supertest';
import app from '../../../app';
import cleanDataBase from '../../../mainUtils/cleanDatabase';

describe('studentController test', () => {
  beforeEach(async () => {
    await cleanDataBase();
  });
  describe.only('GET /api/:classCode/:offset/:limit', () => {


    it('should be to fetch the data with 5 limit', (done) => {
      request(app)
        .get('/api/class/P1-1/0/5')
        .expect(200)
        .end(done);
    });
  });
});

