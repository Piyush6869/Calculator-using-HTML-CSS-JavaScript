const buttons = document.querySelectorAll('.button');
const input = document.querySelector('input')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                input.value = eval(input.value);
                break;
            case 'C':
                input.value = "";
                break;
            case '()':
                let str = input.value
                if (
                    str.length !== 0 &&
                    Number(str.charAt(str.length - 1)) !== NaN &&
                    (str.split('(').length - str.split(')').length) > 0
                ) {
                    input.value += ')'
                }
                else {
                    input.value += '('
                }
                break
            default:
                input.value += e.target.innerHTML;
        }
    });
});