const { sqlQueryAsync } = require('../utils/db_connection.js');

async function queryService(query) {

  let data;
  let error;

  try {

    // console.log(`queryService: THIS IS THE query: ${query}`);

    let res = await sqlQueryAsync(query);

    // console.log(`queryService: THIS IS THE res: ${res}`);
    data = res;
  }
  catch (e) {

    // console.log(`queryService: THIS IS THE e: ${e}`);

    error = e;
  }

  // console.log(`queryService: THIS IS THE res: ${data}`);
  // console.log(`queryService: THIS IS THE error: ${error}`);

  return { data, error };
}

module.exports = {
  queryService
};