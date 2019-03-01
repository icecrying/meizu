var arr = {'a':0, 'b':1};
对象的遍历
for (i in arr) {
    console.log(i);
    console.log(arr[i])
}

console.log(Object.keys(arr));
Object.keys(arr).forEach((key) => {
    console.log(arr[key])
});
