const fetch = require('node-fetch');

module.exports = async () => {
  const result = await fetch('https://codegrid-11ty-samples.netlify.com/authors.json').then(res => res.json())
  return result
};
