const axios = require("axios");

exports.handler = function(event, context, callback) {
  axios
    .get(
      "https://api.pokemontcg.io/v1/cards"
    )
    .then(({ data }) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      });

      return;
    })
    .catch(error => {
      console.log("didn't get shit");
      callback(error, {
        statusCode: 500,
        body: error
      });

      return;
    });
}
