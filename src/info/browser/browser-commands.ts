import { Page } from "puppeteer";

export async function closePopup(page:any) {
  await page?.evaluate(() => {
    const button = document.querySelector('button._abl-');
    (button as HTMLElement)?.click();
  });
}

export async function clickTitleFollow(page:Page){
  await page.click('div._ac78');
}