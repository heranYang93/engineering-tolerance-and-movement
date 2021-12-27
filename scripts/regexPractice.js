const str = 'filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt';
const regex = /(\w+)\.mp3/g;
// const isExisting = regex.test(str);
let match = regex.exec(str);
console.log(match)

while (match){
    const filename = match[1]
    console.log(filename)
    match = regex.exec(str)
}

// if (match){
//     console.log(match)
// }
// else{
//     console.log('no match')
// }

// console.log(isExisting)