function saveObjectPropertiesToLocalStorage(obj) {
    for (const prop in obj) {
      const key = prop;
      const value = obj[prop];
      localStorage.setItem(key, value);
    }
    
    const newObj = {};
    for (const prop in localStorage) {
      newObj[prop] = localStorage.getItem(prop);
    }
    
    return newObj;
  }
  
  // Example usage
  const obj = { name: 'John', age: 30 };
  const newObj = saveObjectPropertiesToLocalStorage(obj);
  console.log(newObj); // Output: { name: 'John', age: '30' }
  