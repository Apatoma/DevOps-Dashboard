const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API is working'
    });
});

module.exports = router;
