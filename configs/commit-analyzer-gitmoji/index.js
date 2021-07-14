/* globals require, module */
const {
  "analyzeCommits": semanticReleaseAnalyzeCommits,
} = require("@semantic-release/commit-analyzer");

async function analyzeCommits(pluginConfig, context)
{
  return semanticReleaseAnalyzeCommits(
    Object.assign(
      {},
      {
        // Duplicate of parser opts in commitlint-gitmoji.
        "parserOpts": {
          "headerPattern": "^:(\\w+): \\s(.*)$",
          "headerCorrespondence": [ "type", "subject" ],
        },
        "releaseRules": [
          {
            "breaking": true,
            "release": "major",
          },
          {
            "revert": true,
            "release": "patch",
          },
          {
            "type": "adhesive_bandage",
            "release": "patch",
          },
          {
            "type": "alembic",
            "release": false,
          },
          {
            "type": "alien",
            "release": "patch",
          },
          {
            "type": "ambulance",
            "release": "patch",
          },
          {
            "type": "arrow_down",
            "release": false,
          },
          {
            "type": "arrow_up",
            "release": false,
          },
          {
            "type": "art",
            "release": false,
          },
          {
            "type": "beers",
            "release": false,
          },
          {
            "type": "bento",
            "release": "patch",
          },
          {
            "type": "bookmark",
            "release": false,
          },
          {
            "type": "boom",
            "release": "major",
          },
          {
            "type": "bug",
            "release": "patch",
          },
          {
            "type": "building_construction",
            "release": false,
          },
          {
            "type": "bulb",
            "release": false,
          },
          {
            "type": "busts_in_silhouette",
            "release": false,
          },
          {
            "type": "camera_flash",
            "release": false,
          },
          {
            "type": "card_file_box",
            "release": "patch",
          },
          {
            "type": "chart_with_upwards_arrow",
            "release": "patch",
          },
          {
            "type": "children_crossing",
            "release": "patch",
          },
          {
            "type": "clown_face",
            "release": false,
          },
          {
            "type": "coffin",
            "release": false,
          },
          {
            "type": "construction_worker",
            "release": false,
          },
          {
            "type": "construction",
            "release": false,
          },
          {
            "type": "dizzy",
            "release": false,
          },
          {
            "type": "egg",
            "release": false,
          },
          {
            "type": "fire",
            "release": false,
          },
          {
            "type": "globe_with_meridians",
            "release": "patch",
          },
          {
            "type": "goal_net",
            "release": "patch",
          },
          {
            "type": "green_heart",
            "release": false,
          },
          {
            "type": "hammer",
            "release": false,
          },
          {
            "type": "heavy_minus_sign",
            "release": false,
          },
          {
            "type": "heavy_plus_sign",
            "release": false,
          },
          {
            "type": "iphone",
            "release": "patch",
          },
          {
            "type": "label",
            "release": "patch",
          },
          {
            "type": "lipstick",
            "release": false,
          },
          {
            "type": "lock",
            "release": "patch",
          },
          {
            "type": "loud_sound",
            "release": false,
          },
          {
            "type": "mag",
            "release": "patch",
          },
          {
            "type": "memo",
            "release": "patch",
          },
          {
            "type": "monocle_face",
            "release": false,
          },
          {
            "type": "mute",
            "release": "patch",
          },
          {
            "type": "package",
            "release": "patch",
          },
          {
            "type": "page_facing_up",
            "release": false,
          },
          {
            "type": "passport_control",
            "release": "patch",
          },
          {
            "type": "pencil2",
            "release": false,
          },
          {
            "type": "poop",
            "release": false,
          },
          {
            "type": "pushpin",
            "release": false,
          },
          {
            "type": "recycle",
            "release": false,
          },
          {
            "type": "rewind",
            "release": "patch",
          },
          {
            "type": "rocket",
            "release": false,
          },
          {
            "type": "rotating_light",
            "release": false,
          },
          {
            "type": "see_no_evil",
            "release": false,
          },
          {
            "type": "seedling",
            "release": false,
          },
          {
            "type": "sparkles",
            "release": "minor",
          },
          {
            "type": "speech_balloon",
            "release": false,
          },
          {
            "type": "tada",
            "release": "major",
          },
          {
            "type": "test_tube",
            "release": false,
          },
          {
            "type": "triangular_flag_on_post",
            "release": false,
          },
          {
            "type": "truck",
            "release": false,
          },
          {
            "type": "twisted_rightwards_arrows",
            "release": "minor",
          },
          {
            "type": "wastebasket",
            "release": false,
          },
          {
            "type": "wheelchair",
            "release": "patch",
          },
          {
            "type": "white_check_mark",
            "release": false,
          },
          {
            "type": "wrench",
            "release": false,
          },
          {
            "type": "zap",
            "release": "patch",
          }
        ],
      },
      pluginConfig
    ),
    context
  );
}

module.exports = {
  "analyzeCommits": analyzeCommits,
};