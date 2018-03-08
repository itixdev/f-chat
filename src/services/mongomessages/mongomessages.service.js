// Initializes the `mongomessages` service on path `/mongomessages`
const createService = require('feathers-mongodb');
const hooks = require('./mongomessages.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mongomessages', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mongomessages');

  mongoClient.then(db => {
    service.Model = db.collection('mongomessages');
  });

  service.hooks(hooks);
};
