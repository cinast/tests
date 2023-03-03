//Percent-sort(perNum-sort)
//by coside
function randint(min, max) { return Math.floor(Math.random() * (Math.ceil(max) - Math.min + 1)) }
function randomarray(item) {
    var array = []
    for (var i = 0; i <= item; i++) {
        arrray.spilce(randint(0, array.length), 0, i)
    }
    return array
}
function perNum(array, MaxDif) {
    var tup = [[]],
        result = [],
        max,
        place = 0

    //make small groups
    //each group's maximum and minimum difference 
    //will not bigger than minimum*MaxDif
    for (var count = 0; count <= array.length; count++) {
        for (var count2 = 0; count2 <= tup[count].length; count2++) {
            if (array[count] / tup[count2][0] < MaxDif) {
                //define:[0]smallest,[-1]biggest
                if (array[count] <= tup[count2][0]) {
                    tup[count2].unshift(array[count])
                    break
                }
                else {
                    tup[count2].push(array[count])
                    break
                }
            }
            else { tup.push([array[count]]) }
            
            if (count2 > tum.length) {
                tup.push([array[count]])
            }
            //every number will go it's percent of this small array
            for (var count = 0; count <= tup.length; count++) {
                //index of the small array is the smallset,last one is the biggest
                Max = tup[count][-1]
                for (var count2 = 0; count2 <= tup[count].length; count2++) {
                    place = tup[conut][count2] / Max * tup[count].length
                    if (place > count2) {
                        place++
                    }
                    tup[count].splice(count2, 1)
                }
            }
        }
        return result
    }
}
console.log(perNum(randomarray(),5))