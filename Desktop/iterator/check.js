const person = {
    address: {
       city: 'srinagar',
       street: {
          street_no: 31,
          lane: "humzah"
       }
    },
    state: {
       stateName: 'jammu and Kashmir',
    
    },
    nearby:"skims hospital"
 }
 const recursiveSearch = (obj, searchKey, results = []) => {
    const r = results;
    

    Object.keys(obj).forEach(key => {
       const value = obj[key];
       if(key === searchKey && typeof value !== 'object'){
          r.push(key,value);
       }else if(typeof value === 'object'){
          recursiveSearch(value, searchKey, r);
       }
    });
    return r;
 };
//  console.log(recursiveSearch(person, 'fullName'));
 console.log(person)
//  console.log(recursiveSearch(people, 'age'));
 