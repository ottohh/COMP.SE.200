module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'src/.internal/'  // Exclude .internal directory
    ]
  };