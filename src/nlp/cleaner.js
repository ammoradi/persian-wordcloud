import { normalize } from 'persian-text';

const supp = [' و ', ' ات ', ' اتی ', ' ی ', ' که ', ' از ', ' با ', ' را ', ' در ', ' به ', ' بر ', ' برای ', ' این ', ' اند ', ' است ', ' کرد ', 'ها '];

export function cleanMulSpace(text) {
    return text.replace(/\s\s+/g, ' ');
}

export function corrector(text) {
    return text.replace(new RegExp('امیرالم منین', 'g'), 'امیرالمومنین');
}

export function removeSupps(text) {
    let text_copy = text;
    supp.map( s => {
        text_copy = text_copy.replace(new RegExp(s, 'g'), ' ');
    });
    return text_copy;
}

export default function cleaner(text) {
    let primary = normalize(text);  //  cleaned by persian-text module
    let suppCleaned = removeSupps(primary);
    let corrected = corrector(suppCleaned);
    let spaceCleaned = cleanMulSpace(corrected);
    return spaceCleaned;
}
