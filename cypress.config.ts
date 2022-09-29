import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'projects/cypressjest-showcase/e2e/integrations/**/*.cy.ts',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
