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
        result = []

    //make small groups
    //each tup[count]'s maximum and minimum difference 
    //will not bigger than minimum*DifMult also not small then maximun*(1/DifMult)
    for (var count = 0; count < array.length; count++) {
        for (var count2 = 0; count2 < tup.length; count2++) {
            var group = tup[count2], max = group[group.length - 1]
            if (group[0] * DifMult >= array[count] >= max / DifMult) {
                //define:[0]smallest,[<length>]biggest
                //in min*DifMult

                if (array[count] <= group[0]) {
                    group.unshift(array[count])
                    break
                    //smallest
                } else if (array[count] > max) {
                    group.push(array[count])
                    break
                    //biggest
                }
                else {
                    group.splice(1, 0, array[count])
                    break
                    //middle
                }
            } else if (count2 == tup.length - 1) {
                tup.push([array[count]])
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
        group = tup[count]
        max = group[group.length]
        for (var count2 = 0; count2 < group.length; count2++) {
            var item = group[count2],
                place = item / max * group.length
            if (place > count2) {
                place++
            }
            group.splice(count2, 1)
            group.splice(place, 0, item)
        
        }
        result += group
    }return result
}
console.log(perNum(randomarray(100),100))