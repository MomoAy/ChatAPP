import express from 'express';

import { authUser } from '../Controllers/userControllers.js';

const router = express.Router();

router.post('/login', authUser);

export default router;