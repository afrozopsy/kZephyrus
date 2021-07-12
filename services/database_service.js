
const { queryService } = require('../services/query_service');

const HOME_PAGE_ITEMS_TABLE = "home_page_items";

class DatabaseService {

  // reponse fields
  data;
  error;

  static async saveHomePageItem({
    obj,
  }) {

    // console.log(`DatabaseService:saveMangaInfo(): THIS IS THE obj: ${JSON.stringify(obj)}`);

    // Create query      
    const query =
    `
    INSERT INTO ${HOME_PAGE_ITEMS_TABLE} (
      id,
      title,
      link,
      created_time
    )
    VALUES(
      \'${obj.index}\',
      \'${obj.title}\',
      \'${obj.link}\',
      NOW()
    );
    `;

    let result = await queryService(query);

    // console.log(`DatabaseService.saveHomePageItem(): THIS IS THE result: ${JSON.stringify(result)}`);

    if (result.error) {
      this.error = result.error.sqlMessage;
    } else {
      this.data = result.data;
    }

    return {
      error: this.error,
      data: this.data
    };

  }

}

module.exports = {
  DatabaseService
};
