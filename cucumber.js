export default {
  default: {
    requireModule: ['esm'],
    require: ['steps/**/*.js', 'runtime/**/*.js'],
    format: ['json:reports/cucumber-report.json'],
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};

