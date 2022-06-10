const siteRepo = require("./site");

const rtus = [
  {
    id: "5000",
    name: "Quimper",
    serialNumber: "abc",
    attachStatus: "ATTACHED",
    model: "RTU-2",
    site: { id: "2000" },
  },
  {
    id: "5001",
    name: "logical rtu",
    serialNumber: "def",
    attachStatus: "UNATTACHED",
    model: "FG-750",
    site: {},
  },
];

module.exports = {
  create: ({ siteId, name }) => {
    const rtu = {
      id: String(rtus.length + 5000),
      name,
      serialNumber: "abc" + String(rtus.length),
      attachStatus: "UNATTACHED",
      model: "",
      site: { id: siteId },
    };
    siteRepo.addRtu(siteId, rtu);
    rtus.push(rtu);
    return rtu;
  },

  getById(id) {
    return rtus.find((r) => r.id === id);
  },

  getAll: () => {
    return rtus;
  },

  attach: ({ rtuId }) => {
    const index = rtus.findIndex((r) => r.id === rtuId);
    if (index < 0) {
      throw Error("rtu does not exist");
    }
    rtus[index].attachStatus = "ATTACHED";
    return rtus[index];
  },
};
