;(function(Hamburger) {
  'use strict';

  // Helpers (IE 9+)
  // ---------------

  var Helpers = {
    removeClass: function(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    },
    addClass: function(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    }
  };

  // Initializer
  // -----------

  var _defaults = {
    buttonSelector: '.hamburger-button'
  };

  // Store if menu is full opened or not
  var _state = false;

  var init = function(selector) {
    // If hamburger button is cached, use it otherwise find a new one
    _hamburgerBtn = !!_hamburgerBtn ? _hamburgerBtn : document.querySelector(selector || _defaults.buttonSelector);

    // Add button listeners
    _hamburgerBtn.addEventListener('mouseenter', menuOpen);
    _hamburgerBtn.addEventListener('mouseleave', menuClose);
    _hamburgerBtn.addEventListener('click', menuToggle);
  };

  // Event handlers
  // --------------

  var menuOpen = function() {
    Helpers.addClass(_hamburgerMenu, 'open');
  };

  var menuClose = function() {
    Helpers.removeClass(_hamburgerMenu, 'open');
  };

  var menuFullOpen = function() {
    _state = true;
    Helpers.addClass(_hamburgerMenu, 'full');
  };

  var menuFullClose = function() {
    _state = false;
    Helpers.removeClass(_hamburgerMenu, 'full');
  };

  var menuToggle = function() {
    menuClose();

    if (_state) {
      menuFullClose();
    } else {
      menuFullOpen();
    }
  };

  // Generic listeners
  // -----------------

  var _hamburgerMenu = document.querySelector('.hamburger-nav');
  _hamburgerMenu.addEventListener('mouseenter', menuFullOpen);

  // Cache hamburger button if defaults are used and init if it's available
  var _hamburgerBtn = document.querySelector(_defaults.buttonSelector);
  if(!!_hamburgerBtn) init();

  // Public methods
  // --------------

  Hamburger.init = init;
  Hamburger.open = menuOpen;
  Hamburger.close = menuClose;
  Hamburger.fullOpen = menuFullOpen;
  Hamburger.fullClose = menuFullClose;
  Hamburger.toggle = menuToggle;

})(window.Hamburger = window.Hamburger || {});
