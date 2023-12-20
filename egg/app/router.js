'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //
  router.get('/getUSer', controller.user.getUSer)
  router.post('/addUser', controller.user.addUser)
  router.post('/delUser', controller.user.delUser)
  //
  router.get('/fidKuku', controller.kuku.fidKuku)
  //
  router.get('/getKu', controller.ku.getKu)
  router.post('/delKu', controller.ku.delKu)
  router.post('/upKu', controller.ku.upKu)
  //
  router.get('/getKku', controller.kku.getKku)
  //
  router.get('/getKkku', controller.kkku.getKkku)
  //
  router.get('/getKkkku', controller.kkkku.getKkkku)
  //
  router.get('/getDing', controller.ding.getDing)
  router.get('/fidDing', controller.ding.fidDing)
  router.post('/addDing', controller.ding.addDing)
  router.get('/fidDingid', controller.dingid.fidDingid)
  router.post('/addDingid', controller.dingid.addDingid)
  //
  router.get('/fidRood', controller.root.fidRood)
  router.post('/addRoot', controller.root.addRoot)

};
