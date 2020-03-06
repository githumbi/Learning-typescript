function fun(a: string, b: string, ...c: number[]) {
  console.log(a);
  console.log(b);
  console.log(c);
}

fun("gdd", "boy", 35, 53, 3553, 533);

//using arrow funvtion variant
const totals = (a: string, b: string, ...c: number[]) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
