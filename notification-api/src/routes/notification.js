const express = require('express');
const {
  getAll,
  create,
  GetById,
  updateById,
  deleteById,
  getByInterval,
} = require('../controllers/notification');
const NotFoundError = require('../Erros/NotfoundError');

const router = express.Router();

router.get('/', async (_, res, next) => {
  try {
    const response = await getAll();
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const response = await GetById(req.params);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});

router.get('/by-interval/:notificationInterval', async (req, res, next) => {
  try {
    const { params } = req;
    const { notificationInterval } = params;
    if (!(['2', '10', '30'].includes(notificationInterval))) throw new NotFoundError();
    const response = await getByInterval({ ...params, res });
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const response = await create(req);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const response = await updateById(req);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const response = await deleteById(req.params);
    return res.send(response);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
