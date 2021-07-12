
const { HomePageItem } = require("../utils/models");

let homePageItemsList = [];

async function addToHomePageItemsList({ obj }) {

  console.log(`addToHomePageItemsList(): ADDING A NEW HomePageItem`);
  console.log(`addToHomePageItemsList(): THIS IS THE: obj: ${JSON.stringify(obj)}`);

  let homePageItem = new HomePageItem({
    ...obj
  });

  homePageItemsList.push(homePageItem);

  return;
}

async function getHomePageItem({ index }) {

  for (let i = 0; i < homePageItemsList.length; i++) {
    let userObjToTest = homePageItemsList[i];
    if (userObjToTest.index == index) {
      return userObjToTest;
    }
  }

  console.log("getHomePageItem(): NULL RETURN *** CAN BE FATAL ***");
  
  return null;
}

module.exports = {
  homePageItemsList,
  addToHomePageItemsList,
  getHomePageItem
}
