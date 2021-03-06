import fs from 'fs';
import cleaner from '../microservice/nlp/cleaner';
import tokenizer from '../microservice/nlp/tokenizer';
import counter from '../lib/wordCounter';
import comm from '../lib/commonFinder'

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

export function main() {
    let data1 = require("../assets/89.txt");
    let data2 = require("../assets/97.txt");
    let cleaned1 = cleaner(data1);
    let cleaned2 = cleaner(data2);
    let words1 = tokenizer(cleaned1);
    let words2 = tokenizer(cleaned2);
    let counted1 = counter(words1);
    let counted2 = counter(words2);
    let commons =  comm(counted1, counted2)
    return commons;
}

const common = main();
export default common;

