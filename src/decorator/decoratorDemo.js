function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}



class Math {
  @log
  add(a, b) {
    return a + b;
  }
}


const math = new Math();

// passed parameters should get logged now
math.add(2, 4);