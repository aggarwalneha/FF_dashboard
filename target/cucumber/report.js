$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "line": 1,
  "name": "Launch Project Dashboard",
  "description": "As a User\r\nI need to login to project dashboard application",
  "id": "launch-project-dashboard",
  "keyword": "Feature"
});
formatter.before({
  "duration": 259398372,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Launch Project Dashboard Home Page",
  "description": "",
  "id": "launch-project-dashboard;launch-project-dashboard-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Launch Url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter email for User authentication",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter Password for User authentication",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be on Project Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.launch_url()"
});
formatter.result({
  "duration": 12897650226,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_email()"
});
formatter.result({
  "duration": 945446267,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_password()"
});
formatter.result({
  "duration": 339120954,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_SignIn()"
});
formatter.result({
  "duration": 77596603,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Verify_homepage()"
});
formatter.result({
  "duration": 5683848204,
  "status": "passed"
});
});