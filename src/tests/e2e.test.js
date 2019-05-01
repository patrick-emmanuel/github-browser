import puppeteer from "puppeteer";

let browser;
let page;

const timeout = 30000
const url = "http://localhost:3000";
beforeEach(async () => {
  browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  // creates a new page in the opened browser
  page = await browser.newPage();
}, timeout);

describe("Repos", () => {
  it("Should fetch repo correctly when username is typed", async () => {
    await page.goto(url);

    await page.waitForSelector(".repos");
    await page.click(".search>div>input[name=username]");
    await page.type(".search>div>input[name=username]", "the-bionic");
    await page.waitForSelector(".loader");
    await page.waitForSelector(".accordion-wrapper");

    const accordion = await page.$(".accordion-section");

    expect(accordion).not.toBeNull();
  }, timeout);
});

afterEach(() => {
  browser.close();
});
