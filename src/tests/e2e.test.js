import puppeteer from "puppeteer";

let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  // creates a new page in the opened browser
  page = await browser.newPage();
});

describe("Repos", () => {
  it("Should fetch repo correctly", async () => {
    await page.goto("http://localhost:3000");

    await page.waitForSelector(".repos");
    await page.click(".search>div>input[name=username]");
    await page.type(".search>div>input[name=username]", "the-bionic");
    await page.click(".search>button");
    await page.waitForSelector(".loader");
    await page.waitForSelector(".accordion-section");

    const accordion = await page.$(".accordion-section");

    expect(accordion).not.toBeNull();
  });

  it("Should show error with incorrect username", async () => {
    await page.goto("http://localhost:3000");

    await page.waitForSelector(".repos");
    await page.click(".search>div>input[name=username]");
    await page.type(
      ".search>div>input[name=username]",
      "invalid-username-non-existent"
    );
    await page.click(".search>button");
    await page.waitForSelector(".loader");
    await page.waitForSelector(".error");

    const error = await page.$(".error");

    expect(error).not.toBeNull();
  });
});

afterEach(() => {
  browser.close();
});
