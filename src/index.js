
exports.min = function min (arr) {

  if(arr == undefined || arr.length == 0){
    return 0;
  }
  else{
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i]<min){
        min = arr[i];
      }
    }
    return min;
  }

}

exports.max = function max (arr) {

  if(arr == undefined || arr.length == 0){
    return 0;
  }
  else{
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
        max = arr[i];
      }
    }
    return max;
  }

}

exports.avg = function avg (arr) {

  if(arr == undefined || arr.length == 0){
    return 0;
  }
  else{
  let sum = arr[0];
      for(let i=1; i<arr.length; i++){
        sum = sum + arr[i];
      }
  
      let avgNum = sum/arr.length;
      return avgNum;
  }
    return 0;
  }
