const shell = require("shelljs");

const PACKAGE_LOCK_FILE = "package-lock.json";
const PNPM_LOCK_FILE = "pnpm-lock.yaml";
const NPM_COMMAND = "npm";
const YARN_COMMAND = "yarn";
const PNPM_COMMAND = "pnpm";

const getDependencyManager = function() {
  if (shell.test("-f", PACKAGE_LOCK_FILE)) {
    return NPM_COMMAND;
  }

  if (shell.test("-f", PNPM_LOCK_FILE)) {
    return PNPM_COMMAND;
  }

  return YARN_COMMAND;
};

module.exports = getDependencyManager();
