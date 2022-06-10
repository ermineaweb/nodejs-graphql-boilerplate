const sites = [
  {
    id: "2000",
    name: "Quimper",
    rtus: [{ id: "5000" }],
  },
  {
    id: "2001",
    name: "Rennes",
    rtus: [],
  },
];

module.exports = {
  create: ({ name }) => {
    const site = {
      id: String(sites.length + 2000),
      name,
      rtus: [],
    };
    sites.push(site);
    return site;
  },

  getById(id) {
    return sites.find((s) => s.id === id);
  },

  getAll: () => {
    return sites;
  },

  addRtu(siteId, rtu) {
    const index = sites.findIndex((s) => s.id === siteId);
    if (index < 0) {
      throw Error("site does not exist");
    }
    sites[index].rtus.push(rtu);
  },
};
