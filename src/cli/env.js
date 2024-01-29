import process from "process";

const parseEnv = () => {
  const prefix = "RSS_";
  let result = "";
  for (let i = 2; i < process.argv.length; ++i) {
    const argument = process.argv[i];
    if (argument.startsWith(prefix)) {
      result += `${argument}; `;
    }
  }
  console.log(result.trim());
};

parseEnv();
