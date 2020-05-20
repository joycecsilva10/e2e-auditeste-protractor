exports.config = {
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        prefs: {
          credentials_enable_service: false
        },
        args: ['disable-popup-blocking', 'disable-infobars']
      }
    },
    specs: [
        'specs/*.specs.js'
    ],
    baseUrl: 'http://187.35.155.198:5722/',
    framework: 'jasmine2',
    jasmineNodeOpts: {
      onComplete: null,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 120000,
      isVerbose: true,
      print() {}
    },
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    onPrepare
  };

function onPrepare() {
    const AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true, //display stacktrace for each failed assertion
      displayErrorMessages: true, //display error messages for each failed assertion
      displayFailed: true, //display each failed spec
      displayDuration: true //display each spec duration
    },
    summary: {
      displayErrorMessages: true, //display stacktrace for each failed assetion
      displayStacktrace: true, //display stacktrace for each failed assertion
      displaySuccessful: true, //display summary of all sucesses after execution
      displayFailed: true, //fisplay sumary of al failures after execution
      displayDuration: true //display execution duration
    },
    colors: {
      enabled: true
    }
  }));
}