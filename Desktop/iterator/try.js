function propertiesToArray(obj) {
    const isObject = val =>
      val && typeof val === 'object' && !Array.isArray(val);
  
    const addDelimiter = (a, b) =>
      a ? `${a}.${b}` : b;
  
    const paths = (obj = {}, head = '') => {
      return Object.entries(obj)
        .reduce((product, [key, value]) => 
          {
            let fullPath = addDelimiter(head, key, product.value)
            return isObject(value) ?
              product.concat(paths(value, fullPath))
            : product.concat(fullPath)
          }, []);
    }
  
    return paths(obj);
  }
    
  const foo = {foo: {bar: {baz: "bisma"}, fub: 'goz', bag: {zar: {zaz: null}, raz: 3}}}
  const result = propertiesToArray(foo)
  console.log(result)
  