const { Homepage } = require('./Homepage.js');
class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.homepage = new Homepage(page);
    // this.constants = new Constants(page);
  }
  getBpage() {
    return this.bpage;
  }
  getHelpers() {
    return this.Helpers;
  }
}
module.exports = { PageObjectManager };
