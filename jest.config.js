module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/.internal/'  // Exclude .internal directory
    ]
  };