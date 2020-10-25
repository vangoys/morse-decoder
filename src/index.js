const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.split('**********');

    let word = array.map(function(decode) {
        let simbols = decode.length / 10;
        let decodeMessage = '';

        for (let i = 0; i < simbols; i++) {
            let word = '';
            for (let a = i * 10; a < i * 10 + 10; a += 2) {
                if (decode[a] + decode[a + 1] === '10') {
                    word += '.';
                } else if (decode[a] + decode[a + 1] === '11') {
                    word += '-';
                }
            }
            decodeMessage += MORSE_TABLE[word];
            word = '';
        }
        return decodeMessage;
    });

    let result = word.join(' ');

    return result;
}

module.exports = {
    decode
};
