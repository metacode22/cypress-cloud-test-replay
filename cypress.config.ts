import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "__tests__/e2e",
    baseUrl: "http://localhost:3000",
  },
});
