const Infix = (function () {
    let postfix,
        stack;

    function precedence(operator) {
        switch (operator) {
            case '^':
                return 4;
            case '*':
            case '/':
                return 3;
            case '+':
            case '-':
                return 2;
            case '(':
                return 1;
        }
    };

    function processOperand(char) {
        postfix += char + ' ';
    };

    function processOperator(char) {
        while (stack.length > 0 &&
            (precedence(stack[stack.length - 1]) >= precedence(char))) {
            postfix += stack.pop() + ' ';
        }
        stack.push(char);
    };

    function processLeftPar(char) {
        stack.push(char);
    };

    function processRightPar(char) {
        let j = stack.length - 1,
            ce;
        while (true) {
            ce = stack.pop();
            if (ce == '(') break;

            postfix += ce + ' ';
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
            case Common.tokenType.leftPar:
                processLeftPar(char);
                break;
            case Common.tokenType.rightPar:
                processRightPar(char);
                break;
        }
    };

    function start(infix) {
        let tokens = Common.tokenize(infix);
        for (let i = 0; i < tokens.length; i++) {
            processToken(tokens[i]);
        }
        return postfix;
    };

    function toPostfix(infix) {
        postfix = '';
        stack = [];
        stack.push('(');
        return start(infix + ')');
    };

    return {
        toPostfix: toPostfix
    }

})();
