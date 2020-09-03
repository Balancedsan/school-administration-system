import Express from 'express';
import DataImportController from './controllers/DataImportController/DataImportController';
import HealthcheckController from './controllers/HealthcheckController';
import StudentListingController from './controllers/StudentListingController/StudentListingController';

const router = Express.Router();

router.use('/', DataImportController);
router.use('/', HealthcheckController);
router.use('/', StudentListingController);

export default router;
