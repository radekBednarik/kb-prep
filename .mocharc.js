module.exports = {
  require: ["test/hooks/hooks.js", "test/globals/globalSetup.js"],
  timeout: 60000,
  parallel: true,
  jobs: 1,
};
