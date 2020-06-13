var planet = planetaryjs.planet();
// You can remove this statement if `world-110m.json`
// is in the same path as the HTML page:
planet.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file: 'world-110m.json' }
  }));

planet.loadPlugin(planetaryjs.plugins.pings());


  planetaryjs.plugins.pings({
    color: 'yellow', ttl: 5000, angle: 10
  });


// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('globe');
planet.draw(canvas);



planet.onDraw(function() {
    var rotation = planet.projection.rotate();
    rotation[0] += 1;
    if (rotation[0] >= 180) rotation[0] -= 360;
    planet.projection.rotate(rotation);
  });

  var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
  setInterval(function() {
    var lat = 43.651070;
    var lng =  -79.347015;
    var color = 'red';
    var angle = Math.random() * 10;
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: angle });
  }, 250);