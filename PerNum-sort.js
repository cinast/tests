//Percent-sort(perNum-sort)
//by coside
function randint(min, max) { return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) }
function randomarray(item) {
    var array = []
    for (var i = 0; i < item; i++) {
        array.splice(randint(0, array.length), 0, i)
    }
    console.log(array);
    return array
}
function perNum(array, MaxDif) {
    var tup = [[]],
        result = [],
        place = 0

    //make small groups
    //each tup[count]'s maximum and minimum difference 
    //will not bigger than minimum*MaxDif
    for (var count = 0; count < array.length; count++) {
        for (var count2 = 0; count2 < tup[count2] || Array.length; count2++) {
            if (array[count] / tup[count2][0] > MaxDif && count2 >= tup[count2] || [][0]) {
                tup.push(array[count])
            } else {
                //define:[0]smallest,[<length>]biggest
                if (array[count] <= tup[count2][0]) {
                    tup[count2].unshift(array[count])
                    break
                }
                else {
                    tup[count2].push(array[count])
                    break
                }
            }
        }
    }
    console.log(tup);
    //every number will go it's percent of this small array
    for (var count = 0; count <= tup.length; count++) {
        //index of the small array is the smallset,last one is the biggest
        var Max = tup[count].slice(-1, -1),
            item = tup[count][count2]
        for (var count2 = 0; count2 <= tup[count].length; count2++) {
            place = item / Max * tup[count].length
            if (place > count2) {
                place++
            }
            tup[count].splice(count2, 1)
            tup[count].splice(place, 0, item)
        }
    }

    for (var count = 0; count <= tup.length; count++) {
        result += tup[count]
    }
    return result

}
console.log(perNum(randomarray(100), 5))