const fetch = require("node-fetch");

const envAPIKey = process.env.REACT_APP_NEWS_API_KEY;
const newsapiURL = process.env.REACT_APP_NEWS_API_URL;

exports.handler = async (event, context) => {
  const country = event.queryStringParameters.country || "us";
  const category = event.queryStringParameters.category || "general";

  const url = `${newsapiURL}`+`country=${country}&category=${category}`;
  console.log(url)

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
       // Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": envAPIKey,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      },
      //body: JSON.stringify(subscriber),
    });
    const data = await response.json();

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "success", detail: data }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
