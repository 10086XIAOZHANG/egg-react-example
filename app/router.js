
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/ss', app.controller.ss.ss.index);
};