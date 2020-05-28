const fetch = require("node-fetch");

const envAPIKey = process.env.REACT_APP_NEWS_API_KEY;
const newsapiURL = process.env.REACT_APP_NEWS_API_URL;

exports.handler = async (event, context) => {
  const country = event.queryStringParameters.country || "us";
  const category = event.queryStringParameters.category || "general";

  console.log("news fetch");
  //const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts";

  // exports.handler = async (event, context) => {
  //   console.log("hello function 2");
  //   let response;
  //   try {
  //     response = await fetch(API_ENDPOINT);
  //     // handle response
  //   } catch (err) {
  //     return {
  //       statusCode: err.statusCode || 500,
  //       body: JSON.stringify({
  //         error: err.message,
  //       }),
  //     };
  //   }

  //   return {
  //     statusCode: 200,
  //     //body: `Hello ${response}!`,
  //      body: JSON.stringify({
  //        data: response
  //      })
  //   };
  // };

  const url = `${newsapiURL}` + `country=${country}&category=${category}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": envAPIKey,
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
