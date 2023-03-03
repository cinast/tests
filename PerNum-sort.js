//Percent-sort(perNum-sort)
//by coside
function randint(min, max) { return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) }
function randomarray(item) {
    var array = []
    for (var i = 0; i < item; i++) {
        array.splice(randint(0, array.length), 0, i)
    }
    console.log(array, 'length:' + array.length);
    return array
}
function perNum(array, DifMult) {
    var tup = [[]],
        result = [],
        place = 0

    //make small groups
    //each tup[count]'s maximum and minimum difference 
    //will not bigger than minimum*DifMult
    for (var count = 0; count < array.length; count++) {
        for (var count2 = 0; count2 < tup.length; count2++) {
            if (array[count] / tup[count2][0] < DifMult) {
                //define:[0]smallest,[<length>]biggest
                //in min*DifMult
                if (array[count] <= tup[count2][0]) {
                    tup[count2].unshift(array[count])
                    break
                    //smallest
                } else if (array[count] > tup[count].slice(-1, -1)[0]) {
                    tup[count2].push(array[count])
                    break
                    //biggest
                }
                else {
                    tup[count2].splice(1, 0, array[count])
                    break
                    //middle
                }
            } else if (count2 == tup.length - 1) {
                tup.push(new Array()[0] = array[count])
                break
                //out of multiple,add new small group
            }
        }
    }
    tup.splice(0, 1)
    console.log(tup);
    //every number will go it's percent of this small array
    for (var count = 0; count < tup.length; count++) {
        //index of the small array is the smallset,last one is the biggest
        max = tup[count].slice(-1 - 1)[0]
        for (var count2 = 0; count2 <= tup[count].length; count2++) {
            var item = tup[count][count2]
            place = item / max * tup[count].length
            if (place > count2) {
                place++
            }
            tup[count].splice(count2, 1)
            tup[count].splice(place, 0, item)
        }
    }

    for (var count = 0; count < tup.length; count++) {
        result += tup[count]
    }
    return result

}
console.log(perNum(randomarray(100), 200))