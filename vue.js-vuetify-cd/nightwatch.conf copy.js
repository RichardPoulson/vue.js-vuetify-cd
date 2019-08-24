const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const PKG = require('./package.json'); // so we can get the version of the project
const SCREENSHOT_PATH = "./node_modules/nightwatch/screenshots/" + PKG.version + "/";

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders" : ["tests/e2e/specs"],
  "output_folder" : "tests/e2e/reports",
  "disable_colors": false,
  "test_workers" : false,
  "webdriver" : {
    "start_process": false,
    "host": "localhost",
    "port": 4444
  },

  "test_settings" : {
    "default" : {
      "webdriver": {
        "server_path": "node_modules/geckodriver/bin/geckodriver",
        "cli_args": [
          "--log", "debug"
        ]
      },
      "disable_colors": false,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "request_timeout_options": {
        "timeout": 60000,
        "retry_attempts": 5
      },
      "desiredCapabilities" : {
        "browserName" : "firefox",
        "acceptInsecureCerts" : true
      }
    },

    "chrome" : {
      "webdriver": {
        "port": 9515,
        "default_path_prefix": "",
        "server_path": chromedriver.path,
        "cli_args": [
          "--verbose"
        ]
      },
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
      }
    },
    "unit_tests" : {
      "unit_tests_mode" : true,
      "filter" : "./examples/unittests/*",
      "exclude" : ""
    },

    "mocha" : {
      "webdriver" : {
        "default_path_prefix": "",
        "server_path": chromedriver.path,
        "cli_args": [
          "--verbose"
        ]
      },
      "desiredCapabilities" : {
        "browserName" : "chrome"
      },
      "test_runner" : {
        "type" : "mocha"
      }
    },

    "selenium_server" : {
      "selenium" : {
        "start_process": true,
        "host": "localhost",
        "port": 4444,
        "server_path": "node_modules/selenium-server/bin/selenium",
        "cli_args": {
          "webdriver.gecko.driver": "node_modules/geckodriver/bin/geckodriver",
          "webdriver.chrome.driver": chromedriver.path
        }
      },

      "desiredCapabilities" : {
        "browserName" : "firefox",
        "acceptSslCerts": true
      }
    }
  }
}