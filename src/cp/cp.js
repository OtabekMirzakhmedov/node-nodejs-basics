import {spawn} from 'child_process';
const spawnChildProcess = async (args) => {
    const scriptPath = './files//script.js';
    const childProcess = spawn('node', [scriptPath, ...(args || [])], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    return childProcess;
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
