exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/create_test.js',
        '../tests/read_test.js',
        '../tests/update_test.js',
        '../tests/delete_test.js'],
    suites: {
        createTest: ['../tests/create_test.js'],
        readTest: ['../tests/read_test.js'],
        updateTest: ['../tests/update_test.js'],
        deleteTest: ['../tests/delete_test.js']
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        },
        // shardTestFiles: true,
        // maxInstances: 1
    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true
    },
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './testReports'
            })
        );
    }
};