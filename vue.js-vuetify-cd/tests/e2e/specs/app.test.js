// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#inspire", 5000)
      .assert.title("Richard Poulson - Professional Site")
      .assert.elementPresent(".v-navigation-drawer")
      .assert.elementPresent(".v-navigation-drawer__content")
      .assert.elementPresent(".router-link-exact-active")
      .assert.elementPresent(".v-app-bar")
      .assert.elementPresent(".v-toolbar__content")
      .assert.elementPresent(".v-app-bar__nav-icon")
      .assert.elementPresent(".v-toolbar__title")
      .assert.elementPresent(".v-toolbar__content")
      .assert.elementPresent(".v-content")
      .assert.elementPresent(".v-content__wrap")
      .assert.elementPresent(".v-footer")
      .end();
  }
};
