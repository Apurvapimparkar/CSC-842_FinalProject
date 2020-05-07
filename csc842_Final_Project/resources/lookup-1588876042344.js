(function(window, undefined) {
  var dictionary = {
    "bb7f061c-e3f1-4cb3-9f00-455fc4ea8bf2": "ProfileScreen",
    "0a98c163-f9bd-44cb-b1f9-3c57c447a4eb": "CartScreen",
    "3561f2c1-9559-432d-848c-6872c008f2a7": "MenuScreen",
    "3d85cb52-17c0-460f-9d56-5d30e69a7282": "RewardsScreen-afterAppliedReward",
    "fbdb27ae-75a3-4018-9fe7-e20500fa889e": "CartScreen-1",
    "9b1b133d-d882-4720-9a09-df494e3a6406": "RewardsScreen",
    "2b48ffd6-bbf4-4d88-8568-883be92ac912": "RewardsScreenPay",
    "c90ab0d3-987f-46b7-a05a-e588ccc50129": "CartScreenEmpty",
    "ca1ab4bb-81fb-49fc-9eca-bfc5a67ed393": "paid!",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LandingPage",
    "6e01298b-f54a-48f1-86dd-57598c8d472e": "MenuScreen-b",
    "e3a12856-3789-4fb7-8b38-f16232bf2d6b": "MenuScreen-a",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);