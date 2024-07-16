function modify(arr, c) {
  arr.push(100);
  c();
}
var arr = [1, 2, 3, 4, 5]; 
modify(arr, () => {
  console.log("modifyed", arr);
});
