;(function() {
  'use strict';

  // Get all elements
  var _hamburgerBtn = document.querySelector('.hamburger-button');
  var _hamburgerMenu = document.querySelector('.hamburger-nav');

  // Helpers (IE 9+)
  // ---------------

  var Helpers = {
    toggleClass: function(el, className) {
      if (el.classList) {
        el.classList.toggle(className);
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
          classes.splice(existingIndex, 1);
        } else {
          classes.push(className);
        }

        el.className = classes.join(' ');
      }
    }
  };

  // Event handlers
  // --------------

  var _menuOpen = function() {
    Helpers.toggleClass(_hamburgerMenu, 'open');
  };

  var _menuClose = function() {
    Helpers.toggleClass(_hamburgerMenu, 'open');
  };

  _hamburgerBtn.addEventListener('mouseenter', _menuOpen);
  _hamburgerBtn.addEventListener('mouseleave', _menuClose);
})();
