// can only be "left" or "right"
const direction: string = "top";

// only 1,4,8 are cool
const numberOfSteps = 9;

function moveSteps(direction, numberOfSteps) {
  if (direction === "left") {
    if (numberOfSteps === 5) {
      console.log("move left");
    }
  } else if (direction === "right") {
    console.log("move right");
  } else {
    throw new Error("🔥 crash in a very, very bad way");
  }
}

moveSteps(10, "top");
