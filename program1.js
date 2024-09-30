// program1.js
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            // If character is an opening bracket, push to stack
            stack.push(char);
        } else {
            // If character is a closing bracket, check if it matches the top of the stack
            const topElement = stack.pop();
            if (map[topElement] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = { isValid };
