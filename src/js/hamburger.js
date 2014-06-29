;(function(Hamburger) {
  'use strict';

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
    },
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

  var init = function(selector) {
    // If hamburger button is cached, use it otherwise find a new one
    _hamburgerBtn = !!_hamburgerBtn ? _hamburgerBtn : document.querySelector(selector || _defaults.buttonSelector);

    // Add button listeners
    _hamburgerBtn.addEventListener('mouseenter', menuOpen);
    _hamburgerBtn.addEventListener('mouseleave', menuClose);
    _hamburgerBtn.addEventListener('click', menuClick);
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
    Helpers.addClass(_hamburgerMenu, 'full');
  };

  var menuFullClose = function() {
    Helpers.removeClass(_hamburgerMenu, 'full');
  };

  var menuClick = function() {
    // Toggle class avoids the use of a widget status reminder
    Helpers.toggleClass(_hamburgerMenu, 'full');
    Helpers.removeClass(_hamburgerMenu, 'open');
  };

  // Generic listeners
  // -----------------

  var _hamburgerMenu = document.querySelector('.hamburger-nav');
  var _hamburgerLinks = document.querySelectorAll('.hamburger-list .item');

  for(var i = 0; i < _hamburgerLinks.length; i++) {
    _hamburgerLinks[i].addEventListener('mouseenter', menuFullOpen);
  };

  // Cache hamburger button if defaults are used
  var _hamburgerBtn = document.querySelector(_defaults.buttonSelector);
  if(!!_hamburgerBtn) {
    init();
  };

  // Public methods
  // --------------

  Hamburger.init = init;
  Hamburger.open = menuOpen;
  Hamburger.close = menuClose;
  Hamburger.fullOpen = menuFullOpen;
  Hamburger.fullClose = menuFullClose;
  Hamburger.toggle = menuClick;

})(window.Hamburger = window.Hamburger || {});
