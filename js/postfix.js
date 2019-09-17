const Postfix = (function () {
    let stack = [];

    function processOperand(char) {
        stack.push(parseFloat(char));
    };

    function processOperator(char) {
        let right = (stack.pop()),
            left = (stack.pop());

        switch (char) {
            case '+':
                stack.push(left + right);
                break;
            case '-':
                stack.push(left - right);
                break;
            case '*':
                stack.push(left * right);
                break;
            case '/':
                stack.push(left / right);
                break;
            case '^':
                stack.push(Math.pow(left,right));
                break;
        }
    };

    function processToken(char) {
        let type = Common.determineToken(char);

        switch (type) {
            case Common.tokenType.operand:
                processOperand(char);
                break;
            case Common.tokenType.operator:
                processOperator(char);
                break;
        }
    };

    function calc(postfix) {
        let tokens;

        stack = [];
        tokens = postfix.split(' ');
        tokens.splice(tokens.length - 1, 1);

        for (let i = 0; i < tokens.length; i++) {
            processToken(tokens[i]);
        }

        return stack.pop();
    };

    return {
        calc: calc
    }
})();
