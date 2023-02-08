//1.浮点精确度的问题
console.log(0.02 + 0.03);
console.log(0.05);
console.log(0.02 + 0.03 == 0.05); //ture 已修复该问题： 浮点计算时精度如整数，不要直接判断两个浮点数是否相等

// 2.前置递增
var num1 = 10;
++num1; //num1=num1+1
console.log(num1); //11  ++num1先自加后返回值,此时num1=11
console.log(++num1 + 10); //22  此时num1=12,++num1=12,++num1+10=12+10=22
//3.后置递增
var num2 = 10;
num2++; //num2=num2+1 前置自增和后置自增单独使用效果一样
console.log(num2); // 11   
//num1++先返回值后自加,此时num2++=10 num2=11
var age = 10;
console.log(10 + age++); //20 先返回值age++=10，然后age自加1，age=11
console.log(age);
//练习
var a = 10;
++a; //11 a=11
var b = ++a + 2; //a=12,++a=12
console.log(b); //14