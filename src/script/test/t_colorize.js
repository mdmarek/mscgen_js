var colorize = require("../render/text/colorize");
var fix = require("./astfixtures");
var utl = require("./testutensils");

/*
var template = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "textbgcolor": "red",
      "textcolor": "green",
      "linecolor": "blue",
      "arctextcolor": "fuchsia",
      "arclinecolor": "cyan"
    }
  ]
};
*/

var textColoredEntity = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "textcolor": "green"
    }
  ]
};

var arcTextColoredEntity = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "arctextcolor": "green"
    }
  ]
};

var textColoredEntityWithArc = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "textcolor": "green"
    }
  ],
  "arcs": [
    [
      {
        "kind": "=>",
        "from": "a",
        "to": "a"
      }
    ]
  ]
};

var boxes = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "textcolor": "green"
    }
  ],
  "arcs": [
    [
      {
        "kind": "box",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "abox",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "note",
        "from": "a",
        "to": "a"
      }
    ]
  ]
};

var coloredBoxes = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "textcolor": "green"
    }
  ],
  "arcs": [
    [
      {
        "kind": "box",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "abox",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "note",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "#FFFFCC"
      }
    ]
  ]
};

var boxesWithNonColoredEntity = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a"
    }
  ],
  "arcs": [
    [
      {
        "kind": "box",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "abox",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "a",
        "to": "a"
      }
    ],
    [
      {
        "kind": "note",
        "from": "a",
        "to": "a"
      }
    ]
  ]
};


var coloredBoxesWithNonColoredEntity= {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "linecolor": "#008800",
      "textbgcolor": "#CCFFCC",
      "arclinecolor": "#008800"
    }
  ],
  "arcs": [
    [
      {
        "kind": "box",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "abox",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white"
      }
    ],
    [
      {
        "kind": "note",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "#FFFFCC"
      }
    ]
  ]
};

var alreadyColoredBoxes = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "entities": [
    {
      "name": "a",
      "arclinecolor": "cyan"
    }
  ],
  "arcs": [
    [
      {
        "kind": "box",
        "from": "a",
        "to": "a",
        "linecolor": "red",
        "textbgcolor": "orange",
        "label": "remains orange"
      }
    ],
    [
      {
        "kind": "abox",
        "from": "a",
        "to": "a",
        "linecolor": "orange",
        "textbgcolor": "red",
        "textcolor": "white",
        "label": "remains red"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "a",
        "to": "a",
        "linecolor": "black",
        "textbgcolor": "white",
        "textcolor": "fuchsia",
        "label": "remains black and white"
      }
    ],
    [
      {
        "kind": "note",
        "from": "a",
        "to": "a",
        "linecolor": "blue",
        "textbgcolor": "cyan",
        "textcolor": "black",
        "label": "remains blue"
      }
    ]
  ]
};

var customArcColorCombis = {
    "note" : {
        "linecolor" : "#AA0000",
        "textbgcolor" : "#FFFFCC",
        "textcolor": "#AA0000"
    },
    "rbox" : {
        "linecolor" : "#000000",
        "textbgcolor" : "#333333",
        "textcolor": "#FFFFFF"
    }    
};
var customEntityColorArray = [
    {
        "linecolor" : "#FF0000",
        "textbgcolor" : "red",
        "textcolor": "white"
    }, {
        "linecolor" : "#AAAAAA",
        "textbgcolor" : "white",
    }, {
        "linecolor" : "#0000FF",
        "textbgcolor" : "blue",
        "textcolor": "#111111"
    }
];

var customMscTestInput = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "options": {
    "arcgradient": "10",
    "wordwraparcs": "true"
  },
  "entities": [
    {
      "name": "a"
    },
    {
      "name": "b"
    },
    {
      "name": "c"
    },
    {
      "name": "d"
    },
    {
      "name": "e"
    }
  ],
  "arcs": [
    [
      {
        "kind": "note",
        "from": "b",
        "to": "d",
        "label": "colors should star cycling at d"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "a",
        "to": "b",
        "label": "here's some text that should get colored"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "b",
        "to": "c",
        "label": "here's some more text, expected to have an other color"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "c",
        "to": "*",
        "label": "colors y'all!"
      }
    ],
    [
      {
        "kind": "<<",
        "from": "b",
        "to": "d",
        "label": "colored in d's color"
      }
    ],
    [
      {
        "kind": ">>",
        "from": "e",
        "to": "b",
        "label": "colored in e's color"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "b",
        "to": "b",
        "label": "some reflection"
      }
    ],
    [
      {
        "kind": ">>",
        "from": "b",
        "to": "a",
        "label": "reflected colore things"
      }
    ]
  ]
};
var customMscTestOutput = {
  "meta": {
    "extendedOptions": false,
    "extendedArcTypes": false,
    "extendedFeatures": false
  },
  "options": {
    "arcgradient": "10",
    "wordwraparcs": "true"
  },
  "entities": [
    {
      "name": "a",
      "linecolor": "#FF0000",
      "textbgcolor": "red",
      "textcolor": "white",
      "arctextcolor": "white",
      "arclinecolor": "#FF0000"
    },
    {
      "name": "b",
      "linecolor": "#AAAAAA",
      "textbgcolor": "white",
      "arclinecolor": "#AAAAAA"
    },
    {
      "name": "c",
      "linecolor": "#0000FF",
      "textbgcolor": "blue",
      "textcolor": "#111111",
      "arctextcolor": "#111111",
      "arclinecolor": "#0000FF"
    },
    {
      "name": "d",
      "linecolor": "#FF0000",
      "textbgcolor": "red",
      "textcolor": "white",
      "arctextcolor": "white",
      "arclinecolor": "#FF0000"
    },
    {
      "name": "e",
      "linecolor": "#AAAAAA",
      "textbgcolor": "white",
      "arclinecolor": "#AAAAAA"
    }
  ],
  "arcs": [
    [
      {
        "kind": "note",
        "from": "b",
        "to": "d",
        "label": "colors should star cycling at d",
        "linecolor": "#AA0000",
        "textcolor": "#AA0000",
        "textbgcolor": "#FFFFCC"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "a",
        "to": "b",
        "label": "here's some text that should get colored"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "b",
        "to": "c",
        "label": "here's some more text, expected to have an other color"
      }
    ],
    [
      {
        "kind": "=>>",
        "from": "c",
        "to": "*",
        "label": "colors y'all!"
      }
    ],
    [
      {
        "kind": "<<",
        "from": "b",
        "to": "d",
        "label": "colored in d's color"
      }
    ],
    [
      {
        "kind": ">>",
        "from": "e",
        "to": "b",
        "label": "colored in e's color"
      }
    ],
    [
      {
        "kind": "rbox",
        "from": "b",
        "to": "b",
        "label": "some reflection",
        "linecolor": "#000000",
        "textcolor": "#FFFFFF",
        "textbgcolor": "#333333"
      }
    ],
    [
      {
        "kind": ">>",
        "from": "b",
        "to": "a",
        "label": "reflected colore things"
      }
    ]
  ]
};

describe('colorize', function() {
    describe('#colorize', function() {
        it('should return the input on uncolor(colorize)', function(){
            utl.assertequalJSON(fix.astAltWithinLoop, colorize.uncolor(colorize.colorize(fix.astAltWithinLoop)));
        });
        it('should, leave already textcolored entities alone', function(){
            utl.assertequalJSON(textColoredEntity, colorize.colorize(textColoredEntity));
        });
        it('should, leave already arctextcolored entities alone', function(){
            utl.assertequalJSON(arcTextColoredEntity, colorize.colorize(arcTextColoredEntity));
        });
        it('should, leave regular arcs departing from already textcolored entities alone', function(){
            utl.assertequalJSON(textColoredEntityWithArc, colorize.colorize(textColoredEntityWithArc));
        });
        it('should color box arcs departing from colored entities', function(){
            utl.assertequalJSON(coloredBoxes, colorize.colorize(boxes));
        });
        it('should color box arcs departing from non-colored entities', function(){
            utl.assertequalJSON(coloredBoxesWithNonColoredEntity, colorize.colorize(boxesWithNonColoredEntity));
        });
        it('should not color box arcs already having some color', function(){
            utl.assertequalJSON(alreadyColoredBoxes, colorize.colorize(alreadyColoredBoxes));
        });
        it('should use custom entity color scheme and arc specifics when passed these', function(){
            utl.assertequalJSON(customMscTestOutput, colorize.colorize(customMscTestInput, customEntityColorArray, customArcColorCombis));
        });
    });
});
