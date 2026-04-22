Aim : Implement the concept of Conditional statement using examples

# if statement
x <- 10
if (x > 5) {
  print("x is greater than 5")
}

# if...else Statement
x <- 3
if (x > 5) {
  print("x is greater than 5")
} else {
  print("x is less than or equal to 5")
}

# If else () Function
x <- 8
result<- ifelse(x > 5, "Greater", "Smaller")
print(result)

# Nested if...else
x <- 15
if (x < 10) {
  print("Less than 10")
} else if (x <= 20) {
  print("Between 10 and 20")
} else {
  print("Greater than 20")
}

# For Loop:
for (i in 1:5) {
  print(i)
}

# while loop

x <- 1
while (x <= 5) {
print(x)
x<-x+1
}

# repeat loop
x<-1
repeat{
  print(x)
  x<-x+1
  if(x>5){
    break
  }
}
