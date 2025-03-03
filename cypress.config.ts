import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(config.baseUrl);
    },
    baseUrl: "http://localhost:5173/",
  },
});
