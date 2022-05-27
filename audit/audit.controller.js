const express = require('express');
const router = express.Router();
const auditService = require('./audit.service');

router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    auditService.getAll(req.body)
        .then(audits => res.json(audits))
        .catch(err => next(err));
}