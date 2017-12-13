const enums={
  sex:{
    "M":"男性",
    "F":"女性"
  }
}


export  default  function(enumType,val){
  console.log("begin to format...")
  if(enums.hasOwnProperty(enumType)){
    var obj = enums[enumType]
    if(obj.hasOwnProperty(val)){
      return obj[val]
    }else{
      return val
    }
  }else{
    return val
  }

}
