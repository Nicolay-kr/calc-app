document.addEventListener('DOMContentLoaded', () => {
  var keys = document.querySelectorAll("span.key");
  var output = document.querySelector(".app-display");
  var output_math = '';

  var pres = function(button){
    button.addEventListener('click', function () {
      if(output.textContent == '0'){
        output.textContent = button.textContent;
        output_math = button.textContent;
      }else if(button.textContent != '='){
        output.textContent += button.textContent;
        if(button.textContent == '×'){
          output_math += '*';
        }
        else if(button.textContent == '÷'){
          output_math += '/';
        }
        else{output_math += button.textContent}
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