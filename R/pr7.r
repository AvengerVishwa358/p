Aim : Write a Rprogram toimplement default values for arguments

#Define a function with default values for its arguments
my_function<- function (a, b = 5, c = 10) {
result<- a + b + c
return(result)
}
#Call the function with all arguments
result1 <- my_function(1, 2, 3)
print(result1) # Output: 6 (1 + 2 + 3)

#Call the function with one default argument
result2 <- my_function(1, 2)
print(result2) # Output: 13 (1 + 2 + 10)
#Call the function with two default arguments
result3 <- my_function(1)
print(result3) # Output: 16 (1 + 5 + 10)
