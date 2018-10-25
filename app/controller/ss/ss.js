module.exports = app => {
  return class SSController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('ss/ss.js', {
        title:'-test--',
        keywords:'react, server side render, ant design',
        message: { text: 'react ant design server side render demo!'}});
    }
  };
};   