---

# About the HTML file

I made a HTML code in which all the scripts are linked and each button is assigned to reun the js script for each question. {I wanted to test run these code to check if it works as intended.} by putting the whole code in the function and calling it through it through the button.

# 1.

It takes the string input in the variable l,r,k and by typecasting cinvert them to the integer and store them.
assign 0 to the variable total
I made a function prime_check which taken in the input and check if it is a prime number or not , by checking through the for loop till the square root of that number and return s 1 if it peime else it returns -1.
Another function is num_sum which returns the sum of the digits of the number using while loop, it finds the last digit using remainder or modulus then periodically adds it to the prev sum then removes the last digit by dividing it by 10.
Another function is contain_zero which checks if the number digits has zero present or not. It checks this by using the while loop finds the last digit and checks if it is zero. If it is zero it returns 1 else returns -1.
Then using the for loop from the lower limit to the upper limit , it checks if the number x (inside lower and the upper limit) is divisible by k, then using nested loop checks if the number is a prime number, if it is check if the number contains zero, if it count such number and print it using alert.

Time Complexity - O(n^2)

# 2.

Take integr input using typecasting into the variable n and ssv .
Using for loop 3 times check if the number is even , if it is divide the n by 2 and add ssv to it, else multiply n by 3 and subtract ssv from it.
Check if n now is between 100 and 999 find that number middle number and check if it is equal to the ssv, if it is print yes else no.

Time Complexity - O(n)

# 3.

Take inputs n and k.
Make function palindrome to check if the parameter is a palindrome.
in the for loop from i=0, to i=100000, s=n+i, we check if s is a palindrome , if it is checkk if it is divisible by k, if it is print that i.

Time Complexity - O(n^2)

# 4.

take the 4 necessary inputs, calculate the fare , check the coditions of the fare.
If minutelate >1 5 add 20 to the fare.
If the distance is > 10 , increase 10 % of the fare.
if seed is odd, subtract seed.
else add the seed to the fare.
then round u the fare to the nearest of 5.
it is done by checking the last digit , if it is 1 0r 2 subtract 1 or 2 respectively.
if it is 3 or 4 add 3 or 4 respectively .
print the fare.

Time Complexity - O(1) in constant time

# 5.

take input n and seed.
sum=0, m=1
while sum<n
check if m%seed +2 ===0 {three equals checks absolute equalto} if it is increase m by 1, else add m to the sum and also increase the m by 1.
print m-1 {m-1 since m is the last condition check value which fails and stops the loop , our answer is m-1} and sum.

Time Complexity - O(n)

# 6.

take input a,b,c
compute score ,
if it is less than 0 replace it with 0
if a+b+c>50 subtract 10 from score
if score>=60 print pass, else fail.

Time Complexity - O(n)
