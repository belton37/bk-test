const config = {
    verbose: true,
    reporters: [
        'default',
        'buildkite-test-collector/jest/reporter'
      ],
      testLocationInResults: true
  };
  
module.exports = config;