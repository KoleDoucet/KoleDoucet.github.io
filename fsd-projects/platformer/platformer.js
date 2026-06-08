$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 300, 200, 20, "purple");
createPlatform(700, 600, 200, 20, "blue");
createPlatform(400, 800, 200, 20, "green");
createPlatform(200, 100, 200, 20, "yellow");
createPlatform(500, 500, 200, 20, "orange");
createPlatform(500, 500, 200, 20, "orange");
createPlatform(600, 700, 200, 20, "purple");
createPlatform(700, 400, 200, 20, "blue");
createPlatform(600, 200, 200, 20, "green");
createPlatform(1000, 300, 200, 20, "green");
    createBadPlatform(500, 400, 100, 20, "red")
// TODO 3 - Create Collectables

createCollectable("max", 300, 250);
createCollectable("steve", 700, 550);
createCollectable("diamond", 800, 50);
   
    // TODO 4 - Create Cannons

createCannon("top", 200, 800);
createCannon("right", 150, 800);
createCannon("top", 600, 800);
createCannon("right", 800, 800);
    createCannon("top", 200, 800, 20, 10, 100, 1400, 2)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
