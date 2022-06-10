const repository = require("../repository");

module.exports = {
  Site: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    rtus: (parent) => {
      return parent.rtus.map((r) => repository.rtu.getById(r.id));
    },
  },

  Rtu: {
    id: (parent) => parent.id,
    serialNumber: (parent) => parent.serialNumber,
    attachStatus: (parent) => parent.attachStatus,
    model: (parent) => parent.model,
    site: (parent) => repository.site.getById(parent.site.id),
  },

  AttachStatus: {
    ATTACHED: "ATTACHED",
    UNATTACHED: "UNATTACHED",
  },

  Model: {
    RTU2: "RTU-2",
    FG750: "FG-750",
    OTH7000: "OTH-7000",
  },
};
