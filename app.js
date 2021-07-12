
// Self-Exectuing Function

(async () => {

  const { scrapHomePageList } =  require('./helpers/scrap_home_page_list');

  // init globals
  global.rootDir = __dirname;

  console.log(` *** Nirvana Started *** `);

  // **** Scrap Mangas List ****
  let success = await scrapHomePageList({
    url: "https://www.example.com/",
    download: false,
  });

  if (success){
    console.log(`app: scrapMangaList: success: ${success}`);
  }

  process.exit(0);

})();