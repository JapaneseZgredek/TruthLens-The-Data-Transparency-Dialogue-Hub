import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}
  },
  server: {
    host: "0.0.0.0",              // żeby Vite słuchał na wszystkich interfejsach
    allowedHosts: [
      ".ngrok-free.dev",          // pozwala na ngrok-free.dev + wszystkie subdomeny
      ".ngrok-free.app"           // (jeśli używasz tego wariantu)
    ]
  }
});
