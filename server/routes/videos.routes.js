const { Router } = require("express");
const videoCtrl = require("../controllers/video.controller");
const { checkApiKey } = require('../middlewares/auth.handler');
const { checkRoles } = require('../middlewares/auth.handler')
const passport = require('passport');

const router = Router();

router.get("/api/:idUser/video", passport.authenticate('jwt', {session: false}), checkApiKey, videoCtrl.getAllByUserId);
router.post("/api/video", passport.authenticate('jwt', {session: false}), videoCtrl.create);
router.get("/api/video/:id", passport.authenticate('jwt', {session: false}), videoCtrl.getById);
router.delete("/api/video/:id",passport.authenticate('jwt', {session: false}), videoCtrl.erase);
router.patch("/api/video/:id", passport.authenticate('jwt', {session: false}), videoCtrl.update);

module.exports = router;