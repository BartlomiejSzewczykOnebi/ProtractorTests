## Protractor test project

Protractor selenium JavaScript

## Tests running instruction

To run the test you need to have got installed NodeJS v6.9.4 or higher, protractor and webdriver-manager.<br />
To install protractor run command: npm install -g protractor<br />
To update webdriver-manager run command: webdriver-manager update<br />
Next step is to run webdriver-manager: webdriver-manager start<br />

To run all tests please go to project directory and run command:<br />
protractor tests\e2e\runners\crud_runner.js<br />
To run tests by one test file please go to project directory and run command:<br />
protractor tests\e2e\runners\crud_runner.js --suite createTest<br />
protractor tests\e2e\runners\crud_runner.js --suite readTest<br />
protractor tests\e2e\runners\crud_runner.js --suite updateTest<br />
protractor tests\e2e\runners\crud_runner.js --suite deleteTest<br />

After test's finish will generate report, you can see it by opening htmlReport.html in testReports directory

## Contributors

Damian Kwaśny,
Bartłomiej Szewczyk,
Filip Szpila
