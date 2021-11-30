const { Router } = require("express");

const router = Router()

router.get('/', (req, res)=>{
    return res.json({
        msg: 'Welcome to api web-health 0.1'
    })
});

module.exports = router;