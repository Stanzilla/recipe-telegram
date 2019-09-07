const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    let badgeCount = 0;
    const elementLoaded = document.querySelector('.header-master')
    const searchElement = document.querySelector('#header-search-inputbox');
    const badgeText = document.querySelector('.dialog-badge-text');
    if (badgeText) {
      badgeCount = document.querySelector('.dialog-badge-text').textContent;
    }
    if (elementLoaded) {
      const elements = document.querySelectorAll('.dialog-badge:not(.jss169)');
      if (elements) {
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].innerHTML !== 0) {
            count += 1;
          }
        }
      }
    }

    Franz.setBadge(badgeCount);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
