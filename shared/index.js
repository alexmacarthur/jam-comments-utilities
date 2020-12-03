const chalk = require("chalk");

const SERVICE_ENDPOINT = "https://service.jamcomments.com";

module.exports = {
  getServiceEndpoint: () => {
    return process?.env?.JAM_COMMENTS_SERVICE_ENDPOINT || SERVICE_ENDPOINT;
  },

  log: (message) => {
    console.log(`${chalk.magenta("JamComments:")} ${message}`);
  },
};
