## Protractor test project

Protractor selenium JavaScript

## Tests running instruction

To run the test you need to have got installed NodeJS v6.9.4 or higher, protractor and webdriver-manager.<br />
To install protractor run command: <br />
<b>npm install -g protractor</b><br />
To update webdriver-manager run command:<br />
<b>webdriver-manager update</b><br />
Next step is to run webdriver-manager:<br /> 
<b>webdriver-manager start</b><br />

To run all tests please go to project directory and run command:<br />
<b>protractor tests\e2e\runners\crud_runner.js</b><br />
To run tests by one test file please go to project directory and run command:<br />
<b>protractor tests\e2e\runners\crud_runner.js --suite createTest</b><br />
<b>protractor tests\e2e\runners\crud_runner.js --suite readTest</b><br />
<b>protractor tests\e2e\runners\crud_runner.js --suite updateTest</b><br />
<b>protractor tests\e2e\runners\crud_runner.js --suite deleteTest</b><br />

After test's finish will generate report, you can see it by opening htmlReport.html in testReports directory

## Contributors

Damian Kwaśny,
Bartłomiej Szewczyk,
Filip Szpila
