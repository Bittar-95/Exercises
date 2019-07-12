// Exercise 1
// function sum(n) {

// 	if (n==0) 
// 	{
// 		return 0 ;
// 	}

// 	return n +sum(n-1);
// }



/*
Exercise 2
*/


// function factorial(n) {

// 	if (n==2) {
// 		return 2 ;
// 	}

// 	return n * factorial(n-1);
// }



/*
Exercise 3
*/

// function repeatStr(text,number) {
// 	if (number ===1) 
// 	{
// 		return text;
// 	}
// 	return text + ' ' +  repeatStr(text,number - 1)


// }




/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/
// var sum = 0;

// function fibon(number) {


// 		if (number==0) 
// 		{

// 		}
// }




/*
Exercise 5
*/
// function sum2(number1,number2) {
// 	if (number1 == number2) 
// 	{
// 		return number1;
// 	}

// 	return number1 + sum2(number1+1,number2);
	
// }



/*
Exercise 6
*/
// function repeatStr2(str1,str2) {
// 	if (str2.length === 0) 
// 	{
// 		return '';
// 	}
// 	str2 = str2.substring(0,str2.length - 1);
// 	return str1 + ' ' +repeatStr2(str1,str2);
// 	}


/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

// function multiOf(x,y,z) {
	
// 	if(z===1)
// 	{
// 		return y;
	
		
// 	}
// 	return y * multiOf(x,y,z-1);


	
	


	


// }








/*
Exercise 8
*/

// function muti2(num1,num2) {
// 	if (num1 === num2) 
// 	{
// 		return num1;

// 	}


// 	return num1 * muti2(num1+1 ,num2)


	
// }




/*
Exercise 9
*/


// function numberBetweenUs(x,y) {
// 	if (x===y-1)
// 	{
// 		return '';

// 	}
// 	return (x+1)+','+ numberBetweenUs(x+1,y);

// }





/*
Exercise 10
*/
// function countDown(number) {

// 	if (number ===0) 
// 	{
// 		return 'Done';
// 	}

// 	return number +','+ countDown(number-1)



// }



/*
Exercise 11
*/
// function multiplication2(number1,number2) {
// 	if (number2===1) 
// 	{
// 		return number1;
// 	}



// 	return number1 + multiplication2(number1,number2-1);


// }



/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/


/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/

var a;
function mirror(str) {

	if (str.length ===0)
	 {
	 	return str[0];
	 }
	a+=str[str.length - 1];




return mirror(str.substring(0,str.length - 1));

	
}










