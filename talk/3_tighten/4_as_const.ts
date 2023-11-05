const coolDays = ["sat", "sun", "fri", "sun", "sat", "mon"]; //as const;

// arrayOfDays.push("tue");

coolDays.map((day) => {
  switch (day) {
    case "sat":
      console.log("yay");
      break;

    case "sun":
      console.log("ok");
      break;

    case "fri":
      console.log("fri");
      break;

    default:
      throw new Error("Noooooo!");
  }
});

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

// type Settings = {
//   menu: Array<{ id: string; isDefault: boolean; isActive: boolean }>;
// };

const SETTINGS = {
  menu: [
    {
      id: "#home",
      isDefault: true,
      isActive: true,
    },
    {
      id: "#login",
      isDefault: false,
      isActive: true,
    },
    {
      id: "#logout",
      isDefault: false,
      isActive: true,
    },
  ],
}; // satisfies Settings;

const isDefault = SETTINGS.menu[0].isActive;

console.log(isDefault);
