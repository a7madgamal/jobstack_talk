// @typescript-eslint/no-explicit-any
const imBad: any = true;

// @typescript-eslint/ban-types
const imBadToo: unknown = true;

const imConfusing: {} = true;

const alsoTooVague: Function = (param1: string, param2: number) => {
  console.log(param1, param2);
};

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

const imAlsoBad = imBad as string;

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

// @ts-ignore
const imTheWorst: number = imAlsoBad.booom();

// @ts-expect-error
const imVeryBad: number = imAlsoBad.crash();
