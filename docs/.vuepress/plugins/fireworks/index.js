const path= require('path');
const fireworks = (options={}) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'fireworks.js')
  ]
});
module.exports = fireworks;
