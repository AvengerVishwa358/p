Aim : Write a Rprogram toimplement various control structures

st1 <- 1;
while(st<=20){
  print(st)
  st <- st+1
  if (st == 11){
    break
    }
}

w <- 1;
for(w in 1:30){
  if(w%%5 == 0){
    print(w)
    }
  else{
    next
    }
}
n <- 2
me <- switch(n,
             '1' = "Summer",
             '2' = "Winter",
             '3' = "Monsoon"
             )
print(me)
