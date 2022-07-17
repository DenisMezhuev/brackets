module.exports = function check(str, bracketsConfig) {
  
 
  let string = str;
  for(let i = string.length; i >= 0; i--){
       bracketsConfig.forEach(elem =>{
            let bracket = elem.join('');
           if(string.includes(bracket)){
           string = string.replace(bracket, '');
           }
           
       });
      
    
  }
       return string === '';

}
