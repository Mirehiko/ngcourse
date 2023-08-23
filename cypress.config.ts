import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '6mimpp',
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})
