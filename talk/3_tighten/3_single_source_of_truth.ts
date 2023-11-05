const SETTINGS = {
  LOCAL: { host: "localhost", timeout: 50 },
  STAGING: { host: "stg.com", timeout: 30 },
  PROD: { host: "prod.com", timeout: 5 },
};

// type Env = keyof typeof SETTINGS;

function getUrl(env) {
  // check strict flag
  const host = SETTINGS[env].host;

  return host;
}

// broken at runtime 💣
getUrl("PRODUCTION");

// SETTINGS["TEST"] = { host: "stg.com", timeout: "30" };
// SETTINGS.TEST = { host: "stg.com", timeout: "30" };

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

Object.entries(SETTINGS).forEach(([env, value]) => {
  // assertEnv(env);

  const newEnv = env;

  getUrl(newEnv);
});

// function assertEnv(env: any): asserts env is Env {
//   if (SETTINGS[env]) {
//     return env;
//   } else {
//     throw new Error(`settings doesnt have: ${env}`);
//   }
// }
