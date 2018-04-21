/***
 * sort object by value
 * @param obj
 */

export default function sort(obj) {
    let sortable = [];
    for (let item in obj) {
        sortable.push([item, obj[item]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    return sortable;
}