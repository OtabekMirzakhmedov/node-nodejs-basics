import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["./files/script.js", ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });


  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.on("data", (data) => {
    process.stdout.write(`\n Received from child process: ${data.toString()}\n`);
  });

  childProcess.on("close", (code) => {
    if (code === 0) {
      console.log(`Child process exited successfully`);
    } else {
      console.error(`Child process exited with code ${code}`);
    }
    process.exit(code);
  });
};

// Test the functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
