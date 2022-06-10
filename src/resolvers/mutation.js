const pubsub = require("../pubsub");
const repository = require("../repository");

module.exports = {
  Mutation: {
    createSite: (_, { input }) => {
      return repository.site.create(input);
    },

    createRtu: (_, { input }) => {
      return repository.rtu.create(input);
    },

    attachRtu: (_, { input }) => {
      return repository.rtu.attach(input);
    },
  },
};
