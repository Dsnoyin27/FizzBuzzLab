function aritGeo(arr) { 

  var arithFlag = true, geoFlag = true;
  var diff = arr[1] - arr[0];
  
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i-1]) !== diff) {
      arithFlag = false;
    }
  }
  if (arithFlag) {
    return "Arithmetic";
  }
  else { 
    diff = arr[1] / arr[0];
    for ( i = 2; i < arr.length; i++) {
      if ((arr[i] / arr[i-1]) !== diff) { 
        geoFlag = false;
      }
    }
    if (geoFlag) {
      return "Geometric";
    }
    else {
      return "-1";
    }
  }
  
}
aritGeo([ 2, 6, 18, 54])