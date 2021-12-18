function bouncingBall(h,  bounce,  window) {
    let count=0;
    if(h>0 && bounce>0 && bounce<1 && window<h){
      count=1;
    }else{
      return -1;
    }
    
    h=h*bounce;
    while(h>window){
      count+=2;
      h=h*bounce; 
    }
    return count;
  }
  console.log(bouncingBall(30, 0.66, 1.5)); // 3