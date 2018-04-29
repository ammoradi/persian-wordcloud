/***
 * @param array1
 * @param array2
 * @return res = array of common items of array1 and array2
 */

export default function commonFinder(array1, array2) {
    let res = []
    for( let i=0; i < array1.length; i++) {
        let common = false;
        let word1 = array1[i]
        for( let j=0; j < array2.length; j++ ) {
            if (array2[j].text === word1.text ) {
                common = true
                res.push(array2[j])
            }
        }
        if ( common ) {
            res.push(word1)
        }
    }
    return res
}