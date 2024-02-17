const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

(async () => {
    const response = await axios.get("");
    const htmldata = response.data;
    console.log(htmldata)
    // const $ = cheerio.load(htmldata);
    // $('iframe').each(function(index, element) {
    //     var urls = $(element).attr('src');
    //     console.log(urls)
    // });

})();