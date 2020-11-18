const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myFirstTest2", async () => {
  const page = await context.newPage();
  await page.goto("http://todomvc.com/examples/react/", { waitUntil: "domcontentloaded" });
  await page.click(".new-todo");
  await page.fill(".new-todo", "eat pizza");
  await page.press(".new-todo", "Enter");
  await page.click(".toggle");
  await page.click(".destroy");
});