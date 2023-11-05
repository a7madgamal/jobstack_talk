let neverEver: never;

const iNeverReturn = () => {
  throw new Error("boom");
};

function neitherDoI(): never {
  // eslint-disable-next-line no-constant-condition -- ok here for demo :P
  while (true) {
    console.log("snooze just 5 more minutes...");
  }
}

const never = iNeverReturn();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let day: "sat" | "sun" | "mon" | "tue";

switch (day) {
  case "sat":
    console.log("yay");
    break;

  case "sun":
    console.log("ok");
    break;

  case "mon":
    console.log("mon");
    break;

  default:
    day satisfies never;
    throw new Error("just in case");
}
