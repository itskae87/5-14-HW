let peanut = ['puppy','brown', 'small', 'boy',];
console.log(peanut);
for (let x = 0; x < peanut.length; x++) {
    console.log(x);
    console.log(peanut[x]);
}
peanut.forEach(pea => {
    console.log(pea);
})
var pup = peanut.map(item => {
    return item + ': Cutie';
});
console.log(pup);
var puppies = peanut.filter(item => {
    return item.length > 3;
});
console.log(puppies);