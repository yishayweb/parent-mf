import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    base: "/",
    server: {
      port: 4000,
      origin: "http://localhost:4000",
    },
    preview: {
      port: 4000,
    },
    // base: mode === "development" ? "/" : "http://localhost:4000/",
    plugins: [
      react(),
      federation({
        name: "host",
        publicPath: "auto",
        remotes: {
          oneRemote: {
            type: "module",
            name: "oneRemote",
            // entry: "http://localhost:4001/remoteEntry.js",
            entry: "https://remote-mf-tau.vercel.app/remoteEntry.js",
            entryGlobalName: "oneRemote",
            shareScope: "default",
          },
        },
        filename: "remoteEntry.js",
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
  };
});
