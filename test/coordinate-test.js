var tape = require("tape"),
    gridding = require("../");

tape("coordinate layout should return full dimension when alone", function(test) {

  var nodes = [{"id": "A", "coordX": 0, "coordY": 0}];

  var grid = gridding.gridding().mode("coordinate").size([10, 20])
    .valueX("coordX")
    .valueY("coordY")

  test.deepEqual(grid(nodes)[0]["x"], 0);
  test.deepEqual(grid(nodes)[0]["y"], 0);
  test.deepEqual(grid(nodes)[0]["width"], 10);
  test.deepEqual(grid(nodes)[0]["height"], 20);

  test.end();
});

tape("coordinate layout set in pixel", function(test) {

  var nodes = [{"id": "A", "coordX": "10px", "coordY": "20px", "w": "3px", "h": "19px"}];

  var grid = gridding.gridding().mode("coordinate").size([10, 20])
    .valueX("coordX")
    .valueY("coordY")
    .valueWidth("w")
    .valueHeight("h")

  test.deepEqual(grid(nodes)[0]["x"], 10);
  test.deepEqual(grid(nodes)[0]["y"], 20);
  test.deepEqual(grid(nodes)[0]["width"], 3);
  test.deepEqual(grid(nodes)[0]["height"], 19);

  test.end();
});

