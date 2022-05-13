const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/register");
  await driver.findElement(By.id("fname")).sendKeys("test");
  await driver.findElement(By.id("lname")).sendKeys("test");
  await driver.findElement(By.id("username")).sendKeys("test1");
  await driver.findElement(By.id("email")).sendKeys("test2@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  await driver.sleep(delay);
  await driver.findElement(By.id("signup")).click();

  await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
  // await driver.quit();
});

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.id("username")).sendKeys("test1");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  await driver.sleep(delay);  
  await driver.findElement(By.id("signup")).click();

  await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // await driver.quit();
});

Given("Test add profile functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/profile");
  await driver.findElement(By.id("name")).sendKeys("testprofile");
  await driver.findElement(By.id("phone")).sendKeys("12345");
  await driver.findElement(By.id("address")).sendKeys("anamnagar");
  await driver.findElement(By.id("dob")).sendKeys("2/15/2022");
  await driver.findElement(By.id("male")).sendKeys("");
  await driver.findElement(By.id("id")).sendKeys("");
  await driver.sleep(delay);  
  await driver.findElement(By.id("addprofile")).click();

  await driver.wait(until.elementLocated(By.id("profileform")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("profileform"))));
  // await driver.quit();
});

