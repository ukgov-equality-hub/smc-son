(function () {
  'use strict';

  function loadAnalytics() {
    if (!window.ga || !window.ga.loaded) {
      // Load gtm script
      // Script based on snippet at https://developers.google.com/tag-manager/quickstart
      (function (w, d, s, l, i) {
        var j = d.createElement(s);
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i;
        d.head.appendChild(j);

        w[l] = w[l] || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', i);
      })(window, document, 'script', 'dataLayer', 'G-YQ50C92HJX');
    }
  }

  /**
   * Cookie functions
   * ================
   *
   * Used by the cookie banner component and cookies page pattern.
   *
   * Includes function `Cookie()` for getting, setting, and deleting cookies, and
   * functions to manage the users' consent to cookies.
   *
   * Note: there is an inline script in cookie-banner.njk to show the banner
   * as soon as possible, to avoid a high Cumulative Layout Shift (CLS) score.
   * The consent cookie version is defined in cookie-banner.njk
   */

  /* Name of the cookie to save users cookie preferences to. */
  var CONSENT_COOKIE_NAME = 'son_cookies_policy';

  /* Google Analytics tracking IDs for preview and live environments. */
  //var TRACKING_PREVIEW_ID = '';
  //var TRACKING_LIVE_ID = '';

  /* Users can (dis)allow different groups of cookies. */
  var COOKIE_CATEGORIES = {
    analytics: ['_ga', '_gid', '_gat_UA-' + window.TRACKING_PREVIEW_ID, '_gat_UA-' + window.TRACKING_LIVE_ID],
    /* Essential cookies
     *
     * Essential cookies cannot be deselected, but we want our cookie code to
     * only allow adding cookies that are documented in this object, so they need
     * to be added here.
     */
    essential: ['son_cookies_policy']
  };

  /*
   * Default cookie preferences if user has no cookie preferences.
   *
   * Note that this doesn't include a key for essential cookies, essential
   * cookies cannot be disallowed. If the object contains { essential: false }
   * this will be ignored.
   */
  var DEFAULT_COOKIE_CONSENT = {
    analytics: false
  };

  /*
   * Set, get, and delete cookies.
   *
   * Usage:
   *
   *   Setting a cookie:
   *   Cookie('hobnob', 'tasty', { days: 30 })
   *
   *   Reading a cookie:
   *   Cookie('hobnob')
   *
   *   Deleting a cookie:
   *   Cookie('hobnob', null)
   */
  function Cookie(name, value, options) {
    if (typeof value !== 'undefined') {
      if (value === false || value === null) {
        deleteCookie(name);
      } else {
        // Default expiry date of 30 days
        if (typeof options === 'undefined') {
          options = { days: 30 };
        }
        setCookie(name, value, options);
      }
    } else {
      return getCookie(name)
    }
  }

  /** Return the user's cookie preferences.
   *
   * If the consent cookie is malformed, or not present,
   * returns null.
   */
  function getConsentCookie() {
    var consentCookie = getCookie(CONSENT_COOKIE_NAME);
    var consentCookieObj;

    if (consentCookie) {
      try {
        consentCookieObj = JSON.parse(consentCookie);
      } catch (err) {
        return null
      }
    } else {
      return null
    }

    return consentCookieObj
  }

  /** Check the cookie preferences object.
   *
   * If the consent object is not present, malformed, or incorrect version,
   * returns false, otherwise returns true.
   *
   * This is also duplicated in cookie-banner.njk - the two need to be kept in sync
   */
  function isValidConsentCookie(options) {
    return (options && options.version >= window.GDS_CONSENT_COOKIE_VERSION)
  }

  /** Update the user's cookie preferences. */
  function setConsentCookie(options) {
    var cookieConsent = getConsentCookie();

    if (!cookieConsent) {
      cookieConsent = JSON.parse(JSON.stringify(DEFAULT_COOKIE_CONSENT));
    }

    // Merge current cookie preferences and new preferences
    for (var option in options) {
      cookieConsent[option] = options[option];
    }

    // Essential cookies cannot be deselected, ignore this cookie type
    delete cookieConsent.essential;

    cookieConsent.version = window.GDS_CONSENT_COOKIE_VERSION;

    // Set the consent cookie
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(cookieConsent), { days: 365 });

    // Update the other cookies
    resetCookies();
  }

  /** Apply the user's cookie preferences
   *
   * Deletes any cookies the user has not consented to.
   */
  function resetCookies() {
    var options = getConsentCookie();

    // If no preferences or old version use the default
    if (!isValidConsentCookie(options)) {
      options = JSON.parse(JSON.stringify(DEFAULT_COOKIE_CONSENT));
    }

    for (var cookieType in options) {
      if (cookieType === 'version') {
        continue
      }

      // Essential cookies cannot be deselected, ignore this cookie type
      if (cookieType === 'essential') {
        continue
      }

      // Initialise analytics if allowed
      if (cookieType === 'analytics' && options[cookieType]) {
        // Enable GA if allowed
        window['ga-disable-UA-' + window.TRACKING_PREVIEW_ID] = false;
        window['ga-disable-UA-' + window.TRACKING_LIVE_ID] = false;
        loadAnalytics();
      } else {
        // Disable GA if not allowed
        window['ga-disable-UA-' + window.TRACKING_PREVIEW_ID] = true;
        window['ga-disable-UA-' + window.TRACKING_LIVE_ID] = true;
      }

      if (!options[cookieType]) {
        // Fetch the cookies in that category
        var cookiesInCategory = COOKIE_CATEGORIES[cookieType];

        cookiesInCategory.forEach(function (cookie) {
          // Delete cookie
          Cookie(cookie, null);
        });
      }
    }
  }

  function userAllowsCookieCategory(cookieCategory, cookiePreferences) {
    // Essential cookies are always allowed
    if (cookieCategory === 'essential') {
      return true
    }

    // Sometimes cookiePreferences is malformed in some of the tests, so we need to handle these
    try {
      return cookiePreferences[cookieCategory]
    } catch (e) {
      console.error(e);
      return false
    }
  }

  function userAllowsCookie(cookieName) {
    // Always allow setting the consent cookie
    if (cookieName === CONSENT_COOKIE_NAME) {
      return true
    }

    // Get the current cookie preferences
    var cookiePreferences = getConsentCookie();

    // If no preferences or old version use the default
    if (!isValidConsentCookie(cookiePreferences)) {
      cookiePreferences = DEFAULT_COOKIE_CONSENT;
    }

    for (var category in COOKIE_CATEGORIES) {
      var cookiesInCategory = COOKIE_CATEGORIES[category];

      if (cookiesInCategory.indexOf(cookieName) !== '-1') {
        return userAllowsCookieCategory(category, cookiePreferences)
      }
    }

    // Deny the cookie if it is not known to us
    return false
  }

  function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0, len = cookies.length; i < len; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length))
      }
    }
    return null
  }

  function setCookie(name, value, options) {
    if (userAllowsCookie(name)) {
      if (typeof options === 'undefined') {
        options = {};
      }
      var cookieString = name + '=' + value + '; path=/';
      if (options.days) {
        var date = new Date();
        date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
        cookieString = cookieString + '; expires=' + date.toGMTString();
      }
      if (document.location.protocol === 'https:') {
        cookieString = cookieString + '; Secure';
      }
      document.cookie = cookieString;
    }
  }

  function deleteCookie(name) {
    if (Cookie(name)) {
      // Cookies need to be deleted in the same level of specificity in which they were set
      // If a cookie was set with a specified domain, it needs to be specified when deleted
      // If a cookie wasn't set with the domain attribute, it shouldn't be there when deleted
      // You can't tell if a cookie was set with a domain attribute or not, so try both options
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=' + window.location.hostname + ';path=/';
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.' + window.location.hostname + ';path=/';
    }
  }

  /**
   * This seems to fail in IE8, requires more investigation.
   * See: https://github.com/imagitama/nodelist-foreach-polyfill
   */
  function nodeListForEach(nodes, callback) {
    if (window.NodeList.prototype.forEach) {
      return nodes.forEach(callback)
    }
    for (var i = 0; i < nodes.length; i++) {
      callback.call(window, nodes[i], i, nodes);
    }
  }

  var cookieBannerAcceptSelector = '.js-cookie-banner-accept';
  var cookieBannerRejectSelector = '.js-cookie-banner-reject';
  var cookieBannerHideButtonSelector = '.js-cookie-banner-hide';
  var cookieMessageSelector = '.js-cookie-banner-message';
  var cookieConfirmationAcceptSelector = '.js-cookie-banner-confirmation-accept';
  var cookieConfirmationRejectSelector = '.js-cookie-banner-confirmation-reject';

  function CookieBanner($module) {
    this.$module = $module;
  }

  CookieBanner.prototype.init = function () {
    this.$cookieBanner = this.$module;
    this.$acceptButton = this.$module.querySelector(cookieBannerAcceptSelector);
    this.$rejectButton = this.$module.querySelector(cookieBannerRejectSelector);
    this.$cookieMessage = this.$module.querySelector(cookieMessageSelector);
    this.$cookieConfirmationAccept = this.$module.querySelector(cookieConfirmationAcceptSelector);
    this.$cookieConfirmationReject = this.$module.querySelector(cookieConfirmationRejectSelector);
    this.$cookieBannerHideButtons = this.$module.querySelectorAll(cookieBannerHideButtonSelector);

    // Exit if no cookie banner module
    // or if we're on the cookies page to avoid circular journeys
    if (!this.$cookieBanner || this.onCookiesPage()) {
      return
    }

    // Show the cookie banner to users who have not consented or have an
    // outdated consent cookie
    var currentConsentCookie = getConsentCookie();

    if (!currentConsentCookie || !isValidConsentCookie(currentConsentCookie)) {
      // If the consent cookie version is not valid, we need to remove any cookies which have been
      // set previously
      resetCookies();

      this.$cookieBanner.removeAttribute('hidden');
    }

    this.$acceptButton.addEventListener('click', this.acceptCookies.bind(this));
    this.$rejectButton.addEventListener('click', this.rejectCookies.bind(this));

    nodeListForEach(this.$cookieBannerHideButtons, function ($cookieBannerHideButton) {
      $cookieBannerHideButton.addEventListener('click', this.hideBanner.bind(this));
    }.bind(this));
  };

  CookieBanner.prototype.hideBanner = function () {
    this.$cookieBanner.setAttribute('hidden', true);
  };

  CookieBanner.prototype.showBanner = function () {
    this.$cookieBanner.removeAttribute('hidden');
  };

  CookieBanner.prototype.acceptCookies = function () {
    // Do actual cookie consent bit
    setConsentCookie({ analytics: true });

    // Hide banner and show confirmation message
    this.$cookieMessage.setAttribute('hidden', true);
    this.revealConfirmationMessage(this.$cookieConfirmationAccept);
  };

  CookieBanner.prototype.rejectCookies = function () {
    // Do actual cookie consent bit
    setConsentCookie({ analytics: false });

    // Hide banner and show confirmation message
    this.$cookieMessage.setAttribute('hidden', true);
    this.revealConfirmationMessage(this.$cookieConfirmationReject);
  };

  CookieBanner.prototype.revealConfirmationMessage = function (confirmationMessage) {
    confirmationMessage.removeAttribute('hidden');

    // Set tabindex to -1 to make the confirmation banner focusable with JavaScript
    if (!confirmationMessage.getAttribute('tabindex')) {
      confirmationMessage.setAttribute('tabindex', '-1');

      confirmationMessage.addEventListener('blur', function () {
        confirmationMessage.removeAttribute('tabindex');
      });
    }

    confirmationMessage.focus();
  };

  CookieBanner.prototype.onCookiesPage = function () {
    return window.location.pathname === '/cookies'
  };

  function CookiesPage($module) {
    this.$module = $module;
  }

  CookiesPage.prototype.init = function () {
    this.$cookiePage = this.$module;

    if (!this.$cookiePage) {
      return
    }

    this.$cookieForm = this.$cookiePage.querySelector('.js-cookies-page-form');
    this.$cookieFormFieldsets = this.$cookieForm.querySelectorAll('.js-cookies-page-form-fieldset');
    this.$successNotification = this.$cookiePage.querySelector('.js-cookies-page-success');

    nodeListForEach(this.$cookieFormFieldsets, function ($cookieFormFieldset) {
      this.showUserPreference($cookieFormFieldset, getConsentCookie());
      $cookieFormFieldset.removeAttribute('hidden');
    }.bind(this));

    // Show submit button
    this.$cookieForm.querySelector('.js-cookies-form-button').removeAttribute('hidden');

    this.$cookieForm.addEventListener('submit', this.savePreferences.bind(this));
  };

  CookiesPage.prototype.savePreferences = function (event) {
    // Stop default form submission behaviour
    event.preventDefault();

    var preferences = {};

    nodeListForEach(this.$cookieFormFieldsets, function ($cookieFormFieldset) {
      var cookieType = this.getCookieType($cookieFormFieldset);
      var selectedItem = $cookieFormFieldset.querySelector('input[name=' + cookieType + ']:checked').value;

      preferences[cookieType] = selectedItem === 'yes';
    }.bind(this));

    // Save preferences to cookie and show success notification
    setConsentCookie(preferences);
    this.showSuccessNotification();
  };

  CookiesPage.prototype.showUserPreference = function ($cookieFormFieldset, preferences) {
    var cookieType = this.getCookieType($cookieFormFieldset);
    var preference = false;

    if (cookieType && preferences && preferences[cookieType] !== undefined) {
      preference = preferences[cookieType];
    }

    var radioValue = preference ? 'yes' : 'no';
    var radio = $cookieFormFieldset.querySelector('input[name=' + cookieType + '][value=' + radioValue + ']');
    radio.checked = true;
  };

  CookiesPage.prototype.showSuccessNotification = function () {
    this.$successNotification.removeAttribute('hidden');

    // Set tabindex to -1 to make the element focusable with JavaScript.
    // GOV.UK Frontend will remove the tabindex on blur as the component doesn't
    // need to be focusable after the user has read the text.
    if (!this.$successNotification.getAttribute('tabindex')) {
      this.$successNotification.setAttribute('tabindex', '-1');
    }

    this.$successNotification.focus();

    // scroll to the top of the page
    window.scrollTo(0, 0);
  };

  CookiesPage.prototype.getCookieType = function ($cookieFormFieldset) {
    return $cookieFormFieldset.id
  };

  // Initialise cookie banner
  var $cookieBanner = document.querySelector('[data-module="govuk-cookie-banner"]');
  new CookieBanner($cookieBanner).init();

  // Initialise analytics if consent is given
  var userConsent = getConsentCookie();
  if (userConsent && isValidConsentCookie(userConsent) && userConsent.analytics) {
    loadAnalytics();
  }

  // Initialise cookie page
  var $cookiesPage = document.querySelector('[data-module="app-cookies-page"]');
  new CookiesPage($cookiesPage).init();

  // Navigation menu
  var subNavActiveClass = 'is-open';
  // This one has the query dot at the beginning because it's only ever used in querySelector calls
  var subNavJSClass = '.moj-side-navigation__list';
  function Navigation($module) {
    this.$module = $module || document;

    this.$nav = this.$module.querySelector('.mobile-navigation');
    this.$navToggler = this.$module.querySelector('.govuk-js-header-toggle');
    this.$navButtons = this.$module.querySelectorAll('.collapsible__toggle-icon');
    this.$navLinks = this.$module.querySelectorAll('.collapsible__toggle-link');

    // Save the opened/closed state for the nav in memory so that we can accurately maintain state when the screen is changed from small to big and back to small
    this.mobileNavOpen = false;

    // A global const for storing a matchMedia instance which we'll use to detect when a screen size change happens
    // We set this later during the init function and rely on it being null if the feature isn't available to initially apply hidden attributes
    this.mql = null;
  }

  // Checks if the saved window size has changed between now and when it was last recorded (on load and on viewport width changes)
  // Reapplies hidden attributes based on if the viewport has changed from big to small or vice verca
  // Saves the new window size

  Navigation.prototype.setHiddenStates = function () {
    if (this.mql === null || !this.mql.matches) {
      if (!this.mobileNavOpen) {
        this.$nav.setAttribute('hidden', '');
      }

      nodeListForEach(this.$navButtons, function ($navButton, index) {
        if ($navButton.parentNode.classList.contains(subNavActiveClass)) {
          $navButton.parentNode.getElementsByTagName('ul')[0].removeAttribute('hidden');
        } else {
          $navButton.parentNode.getElementsByTagName('ul')[0].setAttribute('hidden', '');
        }
      });

      this.$navToggler.removeAttribute('hidden');
    } else if (this.mql === null || this.mql.matches) {
      this.$nav.removeAttribute('hidden');

      nodeListForEach(this.$navButtons, function ($navButton, index) {
        if (!$navButton.parentNode.classList.contains(subNavActiveClass)) {
          $navButton.parentNode.getElementsByTagName('ul')[0].setAttribute('hidden', '');
        } else {
          $navButton.parentNode.getElementsByTagName('ul')[0].removeAttribute('hidden');
        }
      });

      this.$navToggler.setAttribute('hidden', '');
    }
  };

  Navigation.prototype.setInitialAriaStates = function () {
    this.$navToggler.setAttribute('aria-expanded', 'false');

    nodeListForEach(this.$navButtons, function ($button, index) {
      var $nextSubNav = $button.parentNode.querySelector(subNavJSClass);

      if ($nextSubNav) {
        var subNavTogglerId = 'js-mobile-nav-subnav-toggler-' + index;
        var nextSubNavId = 'js-mobile-nav__subnav-' + index;

        $nextSubNav.setAttribute('id', nextSubNavId);
        $button.setAttribute('id', subNavTogglerId);
        $button.setAttribute('aria-expanded', $nextSubNav.hasAttribute('hidden') ? 'false' : 'true');
        $button.setAttribute('aria-controls', nextSubNavId);
      }
    });
  };

  Navigation.prototype.bindUIEvents = function () {
    var $nav = this.$nav;
    var $navToggler = this.$navToggler;
    var $navButtons = this.$navButtons;
    var $navLinks = this.$navLinks;

    $navToggler.addEventListener('click', function (event) {
      if (this.mobileNavOpen) {
        $nav.setAttribute('hidden', '');
        $navToggler.setAttribute('aria-expanded', 'false');
        this.mobileNavOpen = false;
      } else {
        $nav.removeAttribute('hidden');
        $navToggler.setAttribute('aria-expanded', 'true');
        this.mobileNavOpen = true;
      }
    }.bind(this));

    nodeListForEach($navButtons, function ($button, index) {
      $button.addEventListener('click', function (event) {
        var $nextSubNav = $button.parentNode.querySelector(subNavJSClass);

        if ($nextSubNav) {
          if ($nextSubNav.hasAttribute('hidden')) {
            $nextSubNav.parentNode.classList.add(subNavActiveClass);
            $nextSubNav.removeAttribute('hidden');
            $button.setAttribute('aria-expanded', 'true');
          } else {
            $nextSubNav.parentNode.classList.remove(subNavActiveClass);
            $nextSubNav.setAttribute('hidden', '');
            $button.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    nodeListForEach($navLinks, function ($button, index) {
      $button.addEventListener('click', function (event) {
        var $nextSubNav = $button.parentNode.querySelector(subNavJSClass);

        if ($nextSubNav) {
          if ($nextSubNav.hasAttribute('hidden')) {
            $nextSubNav.parentNode.classList.add(subNavActiveClass);
            $nextSubNav.removeAttribute('hidden');
            $button.setAttribute('aria-expanded', 'true');
          } else {
            $nextSubNav.parentNode.classList.remove(subNavActiveClass);
            $nextSubNav.setAttribute('hidden', '');
            $button.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  };

  Navigation.prototype.init = function () {
    // Since the Mobile navigation is not included in IE8
    // We detect features we need to use only available in IE9+ https://caniuse.com/#feat=addeventlistener
    // http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
    var featuresNeeded = (
      'querySelector' in document &&
      'addEventListener' in window
    );

    if (!featuresNeeded) {
      return
    }

    if (typeof window.matchMedia === 'function') {
      this.mql = window.matchMedia('(min-width: 40.0625em)');

      // IE and Safari < 14 do not support MediaQueryList.addEventListener
      if ('addEventListener' in this.mql) {
        this.mql.addEventListener('change', this.setHiddenStates.bind(this));
      } else {
        this.mql.addListener(this.setHiddenStates.bind(this));
      }
    }

    this.setHiddenStates();
    this.setInitialAriaStates();
    this.bindUIEvents();
  };

  new Navigation().init();
}());
