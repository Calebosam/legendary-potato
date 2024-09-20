import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), sentryVitePlugin({
//     org: "amalitech-ggmbh",
//     project: "glowing-robot"
//   })],

//   build: {
//     sourcemap: true
//   }
// })

const plugins = [react()];

const NODE_ENV = "development";
// Check if the environment is one of the specified values to include Sentry plugin
const allowedEnvironments = ["production", "staging", "testing"];
if (allowedEnvironments.indexOf(NODE_ENV || "") !== -1) {
  plugins.push(
    sentryVitePlugin({
      org: "amalitech-ggmbh",
      project: "glowing-robot",
    })
  );
}
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(env.VITE_APP_BASE_PATH);
  return {
    plugins,

    build: {
      sourcemap: true,
    },
    base: env.VITE_APP_BASE_PATH ?? "/", // This is to set the base path of the app
  };
});
