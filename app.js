function searchValue(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === value) {
      return true;
    }
    
    return searchValue(arr.slice(1), value);
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  console.log(searchValue(arr, 3)); // Output: true
  console.log(searchValue(arr, 6)); // Output: false
  