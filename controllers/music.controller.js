// const logger = require('@utils/logger');
const MusicService = require('../services/music.service');

const service = new MusicService();

const getAll = async (req, res) => {
  try {
    const result = await service.getAll();
    res.status(200).send({ data: result });
  } catch (error) {
    return error.statusCode
      ? res
          .status(error.statusCode)
          .send({ status: false, message: error.message })
      : res.status(500).send({ status: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const result = await service.getById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    return error.statusCode
      ? res
          .status(error.statusCode)
          .send({ status: false, message: error.message })
      : res.status(500).send({ status: false, message: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await service.delete(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    return error.statusCode
      ? res
          .status(error.statusCode)
          .send({ status: false, message: error.message })
      : res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { getAll, getById, deleteById };
