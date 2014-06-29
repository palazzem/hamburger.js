============
Hamburger.js
============

No, it's not a real Hamburger. It's a CSS3 component that you can use inside
your fantastic website!

Have a try with our `demo`_!

.. _demo: http://hamburgerjs.com

Features
--------

* Partial and full left drawer with icons and text
* Full mobile support with a full screen menu
* Works great with font icons like `FontAwesome`_!

.. _FontAwesome: http://fontawesome.io/

Requirements
------------

None! This plugin depends only on CSS3 animations and basic javascript to add some listeners.

Browser support
---------------

At the moment we don't have a complete support table. However, we're using the following browsers:

* Chrome 33+
* Firefox 28+

Getting started (30 sec)
------------------------

Install ``Hamburger.js`` dependency via ``bower``:

.. code-block:: bash

    $ bower install hamburgerjs --save

Add FontAwesome, Hamburger CSS and javascript to your page:

.. code-block:: html

    <head>
      ...
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="bower_components/css/hamburger.css"/>
    </head>

    <body>
      ...
      <script src="bower_components/js/hamburger.js"></script>
    </body>

Add Hamburger component to your page (maybe in your navigation bar):

.. code-block:: html

    <div class="top-navbar">
      <!-- Hamburger button -->
      <a class="hamburger-button"><i class="fa fa-bars"></i></a>

      <!-- Hamburger menu -->
      <nav class="hamburger-nav">
        <div class="hamburger-scroll">
          <ul class="hamburger-list">
            <li><a href="#" class="fa fa-cutlery item"> Eat it!</a></li>
            <li><a href="#" class="fa fa-heart item"> Love it!</a></li>
          </ul>
        </div>
      </nav>
    </div>

You've done!

**Note:** FontAwesome is *NOT* required. This import is just for demo purpose.

Configuration
-------------

Hamburger.js starts with many default styles. Everything is built using SASS pre-processor
so you can simply import ``hamburger.scss`` and override all available variables.
Check ``_variables.scss`` for a list of all possible SASS customization (``!default`` flag).


More details soon.

Roadmap
-------

* Enhanced documentation for SASS and basic CSS styles override
* Add Hamburgerjs to public CDNs
* E2E tests
* Browser support table

License
-------

BSD-2 License. See ``LICENSE`` for more details.
