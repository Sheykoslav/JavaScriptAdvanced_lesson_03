const Calculator = (function () {
  let display = $('#display'),
      stringIsRead = false,
      string = '';

  function inputNumber(id) {
    stringIsRead = false;
    let number = $(id).html();

    if(display.val() === ''){
      display.val(number);
      string += number;
    }
    else{
      display.val(function (i,expression) {
        return expression + number;
      });
      string += number;
    }
  }

  function inputOperation(id){
    if(stringIsRead === true){
      return 0;
    }
    else{
      stringIsRead = true;
      let symbol = $(id).html();

      display.val(function (i,expression) {
        return expression + symbol;
      });
      string = '';
    }
  }

  function inputPoint (id) {
    if(stringIsRead === true){
      return 0;
    }
    else {
      if(string.indexOf('.') === -1){
        stringIsRead = true;
        let symbol = $(id).html();

        display.val(function (i,expression) {
          return expression + symbol;
        });
        string += symbol;
      }
    }
  }

  function operate(){
    $('#one').click(function () {
      inputNumber('#one');
    });
    $('#two').click(function () {
      inputNumber('#two');
    });
    $('#three').click(function () {
      inputNumber('#three');
    });
    $('#four').click(function () {
      inputNumber('#four');
    });
    $('#five').click(function () {
      inputNumber('#five');
    });
    $('#six').click(function () {
      inputNumber('#six');
    });
    $('#seven').click(function () {
      inputNumber('#seven');
    });
    $('#eight').click(function () {
      inputNumber('#eight');
    });
    $('#nine').click(function () {
      inputNumber('#nine');
    });
    $('#zero').click(function () {
      inputNumber('#zero');
    });
    $('#plus').click(function () {
      inputOperation('#plus');
    });
    $('#minus').click(function () {
      inputOperation('#minus');
    });
    $('#multiply').click(function () {
      inputOperation('#multiply');
    });
    $('#division').click(function () {
      inputOperation('#division');
    });
    $('#degree').click(function () {
      inputOperation('#degree');
    });
    $('#point').click(function () {
      inputPoint('#point');
    });
    $('#leftBracket').click(function () {
      inputNumber('#leftBracket');
    });
    $('#rightBracket').click(function () {
      inputNumber('#rightBracket');
    });
    $('#result').click(function () {
      let infix = $('#display').val();
      let postfix = Infix.toPostfix(infix);
      $('#display').val(Postfix.calc(postfix));
    });
    $('#cell').click(function () {
      $('#display').val('');
      stringIsRead = false;
      string = '';
    });
  }

  return{
    operate:operate
  }

})();

Calculator.operate();
