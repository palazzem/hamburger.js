;(function(window) {
  'use strict';

  // Get all elements
  var _hamburgerBtn = document.querySelector('.hamburger-button');
  var _hamburgerMenu = document.querySelector('.hamburger-nav');
  var _hamburgerLinks = document.querySelectorAll('.hamburger-list .item');

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

  // Event handlers
  // --------------

  var _menuOpen = function() {
    Helpers.addClass(_hamburgerMenu, 'open');
  };

  var _menuClose = function() {
    Helpers.removeClass(_hamburgerMenu, 'open');
  };

  var _menuFullOpen = function() {
    Helpers.addClass(_hamburgerMenu, 'full');
  };

  var _menuFullClose = function() {
    Helpers.removeClass(_hamburgerMenu, 'full');
  };

  var _menuClick = function() {
    // Toggle class avoids the use of a widget status reminder
    Helpers.toggleClass(_hamburgerMenu, 'full');
    Helpers.removeClass(_hamburgerMenu, 'open');
  }

  // Listeners
  // ---------

  _hamburgerBtn.addEventListener('mouseenter', _menuOpen);
  _hamburgerBtn.addEventListener('mouseleave', _menuClose);
  _hamburgerBtn.addEventListener('click', _menuClick);

  // Enable menu listeners
  for(var i = 0; i < _hamburgerLinks.length; i++) {
    _hamburgerLinks[i].addEventListener('mouseenter', _menuFullOpen);
  }

  // Global namespace
  // ----------------

  window.HamburgerMenu = {
    open: _menuOpen,
    close: _menuClose,
    fullOpen: _menuFullOpen,
    fullClose: _menuFullClose
  };

})(window);
