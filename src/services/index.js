const messages = require('./messages/messages.service.js');
const mongomessages = require('./mongomessages/mongomessages.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(messages);
  app.configure(mongomessages);
  app.configure(users);
};
