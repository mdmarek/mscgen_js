module.exports = (function() {

    return {
        astEmpty : {
            "entities" : []
        },
        astSimple : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "=>",
                "from" : "a",
                "to" : "b",
                "label" : "a simple script"
            }]]
        },
        astOptions : {
            "options" : {
                "arcgradient" : "17",
                "wordwraparcs" : "true",
                "hscale" : "1.2",
                "width" : "800"
            },
            "entities" : [{
                "name" : "a"
            }]
        },
        astNoEntities : {
            "entities" : [],
            "arcs" : [[{
                "kind" : "---",
                "label" : "start"
            }], [{
                "kind" : "...",
                "label" : "no entities ...",
            }], [{
                "kind" : "---",
                "label" : "end"
            }]]
        },
        astWorwraparcstrue : {
            "options" : {
                "wordwraparcs" : "true",
            },
            "entities" : []
        },
        astBoxArcs : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }, {
                "name" : "d"
            }],
            "arcs" : [[{
                "kind" : "note",
                "from" : "a",
                "to" : "a",
            }, {
                "kind" : "box",
                "from" : "b",
                "to" : "b",
            }, {
                "kind" : "abox",
                "from" : "c",
                "to" : "c",
            }, {
                "kind" : "rbox",
                "from" : "d",
                "to" : "d",
            }]]
        },
        astMixedAttributes : {
            "entities" : [{
                "name" : "a",
                "label" : "miXed",
                "textbgcolor" : "orange"
            }],
            "arcs" : [[{
                "kind" : "note",
                "from" : "a",
                "to" : "a",
                "linecolor" : "red",
                "textcolor" : "blue",
                "arcskip" : "4"
            }]]
        },
        astColourColor : {
            "entities" : [{
                "name" : "a",
                "textcolor" : "green",
                "textbgcolor" : "cyan",
                "linecolor" : "#ABCDEF"
            }]
        },
        astAllAttributes : {
            "entities" : [{
                "name" : "a",
                "label" : "Label for A",
                "textcolor" : "green",
                "textbgcolor" : "cyan",
                "linecolor" : "#ABCDEF",
                "arclinecolor" : "violet",
                "arctextcolor" : "pink",
                "arctextbgcolor" : "brown",
                "id" : "Just and id",
                "idurl" : "http://localhost/idurl",
                "url" : "http://localhost/url"
            }],
            "arcs" : [[{
                "kind" : "<<=>>",
                "from" : "a",
                "to" : "a",
                "label" : "Label for a <<=>> a",
                "textcolor" : "green",
                "textbgcolor" : "cyan",
                "linecolor" : "#ABCDEF",
                "id" : "Just and id",
                "idurl" : "http://localhost/idurl",
                "url" : "http://localhost/url"
            }]]
        },
        astBroadcastCounting : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }, {
                "name" : "d"
            }],
            "arcs" : [[{
                "kind" : "=>>",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "=>>",
                "from" : "a",
                "to" : "*"
            }], [{
                "kind" : "=>>",
                "from" : "b",
                "to" : "*"
            }]]
        },
        astCountingTest : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }, {
                "name" : "d"
            }, {
                "name" : "e"
            }, {
                "name" : "f",
                "label" : "Rémy"
            }],
            "arcs" : [[{
                "kind" : "=>>",
                "from" : "a",
                "to" : "b"
            }, {
                "kind" : "<<=>>",
                "from" : "c",
                "to" : "d"
            }], [{
                "kind" : "<<=",
                "from" : "b",
                "to" : "a"
            }, {
                "kind" : "--",
                "from" : "c",
                "to" : "d"
            }], [{
                "kind" : "box",
                "from" : "a",
                "to" : "d",
                "label" : "boxes dont count"
            }], [{
                "kind" : "=>>",
                "from" : "e",
                "to" : "e",
                "label" : "self references don't count"
            }], [{
                "kind" : "note",
                "from" : "c",
                "to" : "c",
                "label" : "notes don't count"
            }]]
        },
        astBoxes : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "note",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "box",
                "from" : "a",
                "to" : "a"
            }, {
                "kind" : "rbox",
                "from" : "b",
                "to" : "b"
            }], [{
                "kind" : "abox",
                "from" : "b",
                "to" : "a"
            }]]
        },
        astOneAlt : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "=>",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "alt",
                "from" : "b",
                "to" : "c",
                "arcs" : [[{
                    "kind" : "=>",
                    "from" : "b",
                    "to" : "c"
                }], [{
                    "kind" : ">>",
                    "from" : "c",
                    "to" : "b"
                }]]
            }]]
        },
        astOneAltUnwound : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "=>",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "alt",
                "from" : "b",
                "to" : "c",
                "numberofrows" : 2,
                "depth" : 0
            }], [{
                "kind" : "=>",
                "from" : "b",
                "to" : "c"
            }], [{
                "kind" : ">>",
                "from" : "c",
                "to" : "b"
            }], [{
                "kind" : "|||",
                "from" : "b",
                "to" : "c",
            }]],
            depth : 1
        },
        astAltWithinLoop : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "=>",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "loop",
                "from" : "a",
                "to" : "c",
                "arcs" : [[{
                    "kind" : "alt",
                    "from" : "b",
                    "to" : "c",
                    "arcs" : [[{
                        "kind" : "->",
                        "from" : "b",
                        "to" : "c",
                        "label" : "-> within alt"
                    }], [{
                        "kind" : ">>",
                        "from" : "c",
                        "to" : "b",
                        "label" : ">> within alt"
                    }]],
                    "label" : "label for alt"
                }], [{
                    "kind" : ">>",
                    "from" : "b",
                    "to" : "a",
                    "label" : ">> within loop"
                }]],
                "label" : "label for loop"
            }], [{
                "kind" : "=>>",
                "from" : "a",
                "to" : "a",
                "label" : "happy-the-peppy - outside"
            }], [{
                "kind" : "..."
            }]]
        },
        astAltWithinLoopUnWound : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "=>",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "loop",
                "from" : "a",
                "to" : "c",
                "label" : "label for loop",
                "numberofrows" : 5,
                "depth" : 1
            }], [{
                "kind" : "alt",
                "from" : "b",
                "to" : "c",
                "label" : "label for alt",
                "numberofrows" : 2,
                "depth" : 0
            }], [{
                "kind" : "->",
                "from" : "b",
                "to" : "c",
                "label" : "-> within alt"
            }], [{
                "kind" : ">>",
                "from" : "c",
                "to" : "b",
                "label" : ">> within alt"
            }], [{
                "kind" : "|||",
                "from" : "b",
                "to" : "c",
            }], [{
                "kind" : ">>",
                "from" : "b",
                "to" : "a",
                "label" : ">> within loop"
            }], [{
                "kind" : "|||",
                "from" : "a",
                "to" : "c",
            }], [{
                "kind" : "=>>",
                "from" : "a",
                "to" : "a",
                "label" : "happy-the-peppy - outside"
            }], [{
                "kind" : "..."
            }]],
            depth : 2
        },
        astOptWithComment : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "opt",
                "from" : "b",
                "to" : "c",
                "arcs" : [[{
                    "kind" : "---",
                    "label" : "within opt"
                }]],
                "label" : "label for opt"
            }], [{
                "kind" : "---",
                "label" : "outside opt"
            }]]
        },
        astOptWithCommentUnWound : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }, {
                "name" : "c"
            }],
            "arcs" : [[{
                "kind" : "opt",
                "from" : "b",
                "to" : "c",
                "label" : "label for opt",
                "numberofrows" : 1,
                "depth" : 0
            }], [{
                "kind" : "---",
                "label" : "within opt",
                "from" : "b",
                "to" : "c",
                depth : 0
            }], [{
                "kind" : "|||",
                "from" : "b",
                "to" : "c"
            }], [{
                "kind" : "---",
                "label" : "outside opt"
            }]],
            depth : 1
        },
        astDeclarationWithinArcspan : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "c"
            }, {
                "name" : "d"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "alt",
                "from" : "a",
                "to" : "b",
                "arcs" : [[{
                    "kind" : "->",
                    "from" : "c",
                    "to" : "d"
                }]]
            }]]
        },
        astInlineWithArcColor : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "opt",
                "from" : "a",
                "to" : "b",
                "arcs" : [[{
                    "kind" : "=>",
                    "from" : "a",
                    "to" : "b",
                    "label" : "hasnocolors"
                }]],
                "label" : "hasarccolors",
                "arclinecolor" : "red",
                "arctextcolor" : "green",
                "arctextbgcolor" : "cyan"
            }]]
        },
        astInlineWithArcColorUnWound : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "opt",
                "from" : "a",
                "to" : "b",
                "label" : "hasarccolors",
                "arclinecolor" : "red",
                "arctextcolor" : "green",
                "arctextbgcolor" : "cyan",
                "numberofrows" : 1,
                "depth" : 0
            }], [{
                "kind" : "=>",
                "from" : "a",
                "to" : "b",
                "label" : "hasnocolors",
                "linecolor" : "red",
                "textcolor" : "green",
                "textbgcolor" : "cyan"
            }], [{
                "kind" : "|||",
                "from" : "a",
                "to" : "b"
            }]],
            depth : 1
        },
        astNestedInlinesWithArcColor : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "loop",
                "from" : "a",
                "to" : "b",
                "arcs" : [[{
                    "kind" : "=>",
                    "from" : "a",
                    "to" : "b",
                    "label" : "no colors"
                }], [{
                    "kind" : ">>",
                    "from" : "b",
                    "to" : "a",
                    "label" : "all colors",
                    "linecolor" : "fuchsia",
                    "textcolor" : "lime",
                    "textbgcolor" : "cyan"
                }], [{
                    "kind" : "opt",
                    "from" : "a",
                    "to" : "b",
                    "arcs" : [[{
                        "kind" : "->",
                        "from" : "a",
                        "to" : "b",
                        "label" : "no colors"
                    }], [{
                        "kind" : "=>>",
                        "from" : "b",
                        "to" : "a",
                        "label" : "all colors",
                        "linecolor" : "fuchsia",
                        "textcolor" : "lime",
                        "textbgcolor" : "cyan"
                    }]]
                }]],
                "arclinecolor" : "red",
                "arctextcolor" : "green",
                "arctextbgcolor" : "blue"
            }]]
        },
        astNestedInlinesWithArcColorUnWound : {
            "entities" : [{
                "name" : "a"
            }, {
                "name" : "b"
            }],
            "arcs" : [[{
                "kind" : "loop",
                "from" : "a",
                "to" : "b",
                "arclinecolor" : "red",
                "arctextcolor" : "green",
                "arctextbgcolor" : "blue",
                "numberofrows" : 6,
                "depth" : 1
            }], [{
                "kind" : "=>",
                "from" : "a",
                "to" : "b",
                "label" : "no colors",
                "linecolor" : "red",
                "textcolor" : "green",
                "textbgcolor" : "blue"
            }], [{
                "kind" : ">>",
                "from" : "b",
                "to" : "a",
                "label" : "all colors",
                "linecolor" : "fuchsia",
                "textcolor" : "lime",
                "textbgcolor" : "cyan"
            }], [{
                "kind" : "opt",
                "from" : "a",
                "to" : "b",
                "numberofrows" : 2,
                "depth" : 0
            }], [{
                "kind" : "->",
                "from" : "a",
                "to" : "b",
                "label" : "no colors"
            }], [{
                "kind" : "=>>",
                "from" : "b",
                "to" : "a",
                "label" : "all colors",
                "linecolor" : "fuchsia",
                "textcolor" : "lime",
                "textbgcolor" : "cyan"
            }], [{
                "kind" : "|||",
                "from" : "a",
                "to" : "b"
            }], [{
                "kind" : "|||",
                "from" : "a",
                "to" : "b"
            }]],
            depth : 2
        }
    };
})();

