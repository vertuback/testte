const { test, expect } = require('@playwright/test');

class Homepage {
  constructor(page) {
    this.page = page;
    this.txtSearch = page.locator('#APjFqb');
  }
  async open() {
    await this.page.goto('https://www.google.com/');
  }
  async searchForSmth(searchTerm) {
    await this.txtSearch.fill(searchTerm);
    await this.txtSearch.press('Enter');
  }
}
module.exports = { Homepage };
