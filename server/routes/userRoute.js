const { Router } = require('express');
const userRouter = Router();
const { userController } = require('../controller');
const { checkToken } = require('../controller/utils/checktoken');

userRouter.post('/signup', userController.signup);

userRouter.post('/signin', userController.signin);

userRouter.post('/signout', userController.signout);

userRouter.delete('/', checkToken, userController.deleteAccount);

userRouter.get('/:nickname', userController.info.get);

userRouter.patch('/', checkToken, userController.info.patch);

userRouter.post('/subscribe/:nickname', checkToken, userController.subscribe);

userRouter.post('/unsubscribe/:nickname', checkToken, userController.unsubscribe);

userRouter.post('/nickname', userController.nicknameValidation);

userRouter.post('/email', userController.emailValidation);

module.exports = userRouter;
