
const axios = require("axios").default;
const cheerio = require("cheerio");

const { HomePageItem } = require("../utils/models");
const {
  homePageItemsList,
  addToHomePageItemsList
} = require("../state/home_page_list");

async function scrapHomePageList({ url, writeToDB = false }) {

  if (url == undefined) {
    console.log(`scrapHomePageList(): 'url' WAS FOUND TO BE UNDEFINED`);
    return;
  }

  let result = await axios.get(
    url,
    {
      headers: {
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json'
      },
    }
  );

  let $ = cheerio.load(result.data);

  let homePageItemsList = $("// Write your 'j-query-selector' here").toArray();

  console.log(`scrapHomePageList(): THIS IS THE: chapterRenderList.length: ${homePageItemsList.length}`);

  for (let i = 0; i < homePageItemsList.length; i++) {

    // console.log(`THIS IS THE INDEX: ${i}`);
    // console.log(`THIS IS THE TITLE: ${$(chapterRenderList[i]).find("h3").text().trim()}`);
    // console.log(`THIS IS THE CHAPTER DETAIL LINK: ${$(chapterRenderList[i]).find("h3 a").attr("href").trim()}`);

    let homePageItem = new HomePageItem({
      index: i,
      title: $(homePageItemsList[i]).find("h3").text().trim(),
      link: $(homePageItemsList[i]).find("h3 a").attr("href").trim()
    });

    await addToHomePageItemsList({
      obj: homePageItem
    });

  }

  if (writeToDB) {
    await _writeToDB();
  }

  return true;

}

async function _writeToDB() {

  // You should call query_service or db_service functions here.

  console.log(`_writeToDB(): called. THIS WONT DO ANYTHING FOR NOW > `);

  return;

}

module.exports = {
  scrapHomePageList
}
