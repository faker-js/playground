import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com',
    supportFile: false,
    video: false,
  },
});
