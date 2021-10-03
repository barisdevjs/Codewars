function sum(num) {
    if(num<=0){return 0}
  var ww = []
  for(var i = 1 ; i <= num ; i ++ ){
    ww[i] = []
    for(var j=1 ; j <=i ; j ++){
        if(j==1||i==1){
            ww[i][j] = 1
        }else{
            if(i==j){
                ww[i][j] =  ww[i][j-1]+1
            }else if( (i-j)<j ){
                ww[i][j] = ww[i-j][i-j] + ww[i][j-1]
            }else{
                ww[i][j] = ww[i-j][j]+ ww[i][j-1]
            }
        }
    }
  }
  return ww[num][num]
}

console.log(sum(6))