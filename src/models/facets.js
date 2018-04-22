import fs from 'fs';
import cleaner from '../nlp/cleaner';
import tokenizer from '../nlp/tokenizer';
import counter from '../lib/wordCounter';
import j2a from '../lib/jsonToArray';
import Canvas from 'canvas'
import cloud from './../lib/d3Cloud'

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

export function main() {
    let data = require("../assets/89.txt");
    let cleaned = cleaner(data);
    let words = tokenizer(cleaned);
    let counted = counter(words);
    // let array_from_json = j2a(counted);

    // let nwords = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    //     .map(function(d) {
    //         return {text: d, size: 10 + Math.random() * 90};
    //     });
    //
    // cloud().size([960, 500])
    //     .canvas(function() { return new Canvas(1, 1); })
    //     .words(nwords)
    //     .padding(5)
    //     .rotate(function() { return ~~(Math.random() * 2) * 90; })
    //     .font("Impact")
    //     .fontSize(function(d) { return d.size; })
    //     .on("end", end)
    //     .start();
    //
    // function end(nwords) { console.log(JSON.stringify(nwords)); }
    console.log(counted);
    return counted;
    // return nwords;
}

// our example model is just an Array
const facets = main();
export default facets;

