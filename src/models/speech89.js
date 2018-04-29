import fs from 'fs';
import cleaner from '../microservice/nlp/cleaner';
import tokenizer from '../microservice/nlp/tokenizer';
import counter from '../lib/wordCounter';

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

export function main() {
    let data = require("../assets/89.txt");
    let cleaned = cleaner(data);
    let words = tokenizer(cleaned);
    let counted = counter(words);
    return counted;
}

const speech89 = main();
export default speech89;

