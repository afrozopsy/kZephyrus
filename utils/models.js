
class HomePageItem {

  // Model fields
  index;
  title;
  link;

  constructor({ index, title, link, }) {
    this.index = index;
    this.title = title;
    this.link = link;
  }

}

module.exports = {
  HomePageItem,
};