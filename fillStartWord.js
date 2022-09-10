const { template } = require('@babel/core')
function fillStartWord(startWord, word) {
  if(word == null || word == undefined){
    return undefined
  }
  else if(word.includes(startWord)){
    return word;
  }else{
    return startWord.concat(word)
  }
}                       
module.exports = fillStartWord