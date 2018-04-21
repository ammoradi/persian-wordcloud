export default function jsonToArray(json) {
    let array = [];
    Object.keys(json).map( key => {
        array.push(json[key])
    })
    return array;
}