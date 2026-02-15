import { spawn } from "child_process";
import path from "path";

const port = Number(process.env.PORT ?? 5000);

console.log(`Starting Vite development server on port ${port}...`);

/**
 * Use the local project Vite binary (not npx) for maximum reliability.
 * On Windows, the executable is vite.cmd.
 */
const viteCmd =
  process.platform === "win32"
    ? path.join(process.cwd(), "node_modules", ".bin", "vite.cmd")
    : path.join(process.cwd(), "node_modules", ".bin", "vite");

const args = ["--host", "0.0.0.0", "--port", String(port)];

const viteProcess = spawn(viteCmd, args, {
  cwd: process.cwd(),
  stdio: "inherit",
  shell: process.platform === "win32", // required for .cmd execution on Windows
});

viteProcess.on("error", (error) => {
  console.error("Failed to start Vite:", error);
  process.exit(1);
});

viteProcess.on("exit", (code) => {
  console.log(`Vite process exited with code ${code ?? 0}`);
  process.exit(code ?? 0);
});

// Handle process termination gracefully
const shutdown = (signal: NodeJS.Signals) => {
  console.log(`Shutting down (${signal})...`);
  try {
    viteProcess.kill(signal);
  } catch {
    // ignore
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
