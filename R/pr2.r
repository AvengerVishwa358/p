Aim : Implement R program to explore datatypes in R.

code :

print("This is the integer data")
a <- 10
class(a) # this shows the datatype of the variable

print("Numberic Datatype");
b <- 25.225
class(b)

print("Character")
c <- "Welcome!";
class(c)

print("Complex")
d <- 5 + 3i
class(d)

print("Raw")
e <- as.raw(82)
class(e)
