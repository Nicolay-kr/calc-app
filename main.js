document.addEventListener('DOMContentLoaded', () => {
  var keys = document.querySelectorAll("span.key");
  var operators = ['+','-','×','÷',')','('];
  var output = document.querySelector("#app-display");
  var display = document.querySelector(".app-top-bar");
  var display_width = parseInt((getComputedStyle(display).width));
  var output_math = '';

  var pres = function(button){
    button.addEventListener('click', function () {
      var output_width = parseInt((getComputedStyle(output).width));
      if(output.textContent == '0'){
        output.textContent = button.textContent;
        output_math = button.textContent;
      }else if(button.textContent != '=' & display_width - 20 > output_width){
        
        var lastElement = output.textContent.charAt(output.textContent.length-1);
        if(operators.includes(button.textContent)){
          if(operators.includes(lastElement)){
            if(button.textContent == lastElement){
              if(button.textContent == '×'){
                if(output.textContent.charAt(output.textContent.length-2) != '×'){
                  output.textContent += button.textContent;
                }       
              }
            }else{
              if(button.textContent == '(' || lastElement == ')'){
                output.textContent += button.textContent;
              }  
            }
          }else{
            output.textContent += button.textContent;}
        }else{
          output.textContent += button.textContent;}

        lastElement = output.textContent.charAt(output.textContent.length-1);
        if(output.textContent.length != output_math.length ){
          if(lastElement == '×'){
            output_math += '*';
          }
          else if(lastElement == '÷'){
            output_math += '/';
          }
          else{output_math += lastElement}
        }

      }
      if(button.textContent == 'AC'){
        output.textContent = '0';
        output_math = '0';
      }
      if(button.textContent == '='){
        output.textContent = eval(output_math);
      }
    });
  };
  for (var i = 0; i < keys.length; i++){
    pres(keys[i]);
  }
});