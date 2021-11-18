const { cpus } = require("os");

module.exports = {
  require: ["test/hooks/hooks.js", "test/globals/globalSetup.js"],
  timeout: 60000,
  parallel: true,
  jobs: cpus().length / 2,
  slow: 10000,
};
