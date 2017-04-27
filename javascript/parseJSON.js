/**
 * 提供对注释json的Parse
 */

module.exports = function parseJSON(jsonString) {
  return JSON.parse(removeComment(jsonString));
};

function removeComment(src, options) {
  var reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g;
  return src.replace(reg, function(word) { 
    return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? "" : word; 
  });
};