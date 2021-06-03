function cycle(n) {
    if (n%2 == 0 || n%5 == 0) {
       return -1
     } else {
       let res = 10 % n, c = 1;
       while (res != 1) 
       {
           res = res * 10 % n; 
           c++;
       }
       return c;
       }
   }