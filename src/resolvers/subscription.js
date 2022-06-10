const { withFilter } = require("graphql-subscriptions");
const pubsub = require("../pubsub");

module.exports = {
  Subscription: {
    rtuCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("NEW_RTU"),
        (payload, variables) => {
          return payload.rtuMeasured.id === variables.rtuId;
        }
      ),
    },
    
    rtus: {
      subscribe: () => {
        return pubsub.asyncIterator("NEW_RTUS");
      },
    },
  },
};
