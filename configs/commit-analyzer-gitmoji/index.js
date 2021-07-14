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
            "release": false,
          },
          {
            "type": "alembic",
            "release": false,
          },
          {
            "type": "alien",
            "release": false,
          },
          {
            "type": "ambulance",
            "release": false,
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
            "release": false,
          },
          {
            "type": "bookmark",
            "release": false,
          },
          {
            "type": "boom",
            "release": false,
          },
          {
            "type": "bug",
            "release": false,
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
            "release": false,
          },
          {
            "type": "chart_with_upwards_arrow",
            "release": false,
          },
          {
            "type": "children_crossing",
            "release": false,
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
            "release": false,
          },
          {
            "type": "goal_net",
            "release": false,
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
            "release": false,
          },
          {
            "type": "label",
            "release": false,
          },
          {
            "type": "lipstick",
            "release": false,
          },
          {
            "type": "lock",
            "release": false,
          },
          {
            "type": "loud_sound",
            "release": false,
          },
          {
            "type": "mag",
            "release": false,
          },
          {
            "type": "memo",
            "release": false,
          },
          {
            "type": "monocle_face",
            "release": false,
          },
          {
            "type": "mute",
            "release": false,
          },
          {
            "type": "package",
            "release": false,
          },
          {
            "type": "page_facing_up",
            "release": false,
          },
          {
            "type": "passport_control",
            "release": false,
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
            "release": false,
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
            "release": false,
          },
          {
            "type": "speech_balloon",
            "release": false,
          },
          {
            "type": "tada",
            "release": false,
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
            "release": false,
          },
          {
            "type": "wastebasket",
            "release": false,
          },
          {
            "type": "wheelchair",
            "release": false,
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
            "release": false,
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