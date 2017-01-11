module.exports = {
  'extends': '@eslint/eslint-config-common',
  'rules': {
    'global-require': [0],

    'import/no-dynamic-require': [0],
  
    // Added by Dmitriy Bizyaev on 11.01.2017
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }]
  },
  'env': {
    'node': true
  }
};
