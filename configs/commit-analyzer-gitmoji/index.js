/* globals require, module */
const {
  "analyzeCommits": semanticReleaseAnalyzeCommits,
} = require("@semantic-release/commit-analyzer");

async function analyzeCommits(pluginConfig, context)
{
  return semanticReleaseAnalyzeCommits(pluginConfig, context);
}

module.exports = {
  "analyzeCommits": analyzeCommits,
};