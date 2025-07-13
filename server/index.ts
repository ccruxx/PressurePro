import { spawn } from "child_process";

const port = process.env.PORT || 5000;

console.log(`Starting Vite development server on port ${port}...`);

// Start Vite directly using the existing vite.config.ts
const viteProcess = spawn("npx", ["vite", "--host", "0.0.0.0", "--port", String(port)], {
  cwd: process.cwd(),
  stdio: "inherit",
});

viteProcess.on("error", (error) => {
  console.error("Failed to start Vite:", error);
  process.exit(1);
});

viteProcess.on("exit", (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle process termination gracefully
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  viteProcess.kill("SIGINT");
});

process.on("SIGTERM", () => {
  console.log("Shutting down server...");
  viteProcess.kill("SIGTERM");
});