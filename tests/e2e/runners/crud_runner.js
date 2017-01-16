exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/update_test.js'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        'args': ['--start-maximized']
    }
}
};