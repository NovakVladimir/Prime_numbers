/**
 * 1. All these functions are designed to find a prime number by index
 *  */ 

    /**
     * This function check is number prime or not
     */
    function ifPrime(arr, number, index) {
        for(let j = 1; j <= index; j++) {
          if(number % arr[j] === 0) {
              return;
          }
        }
        return number;
    }
  
  /**
   * This function searches for all prime numbers, starting with the next prime number after the initial 
   * array of prime numbers and ending with the square of the index.
   */
  function findAllPrime(arr, index) {
    for(let i = arr[arr.length - 1] + 2; i < arr[index] ** 2; i += 2) {
      if(ifPrime(arr, i, index) !== undefined) {
        arr.push(i);
      }
    }
    return arr;
  }  

  /**
   * This function searches for a prime number by its ordinal number (index)
   */
  
  function findPrimeNumberByIndex(index) {
      let arr = [2,3];
      for(let k = 1; k < 547; k++) {
        arr = findAllPrime(arr, k);
        if(arr.length > index) {
          return arr[index];
        }
      } 
    }
/**
 * All these functions are intended to check the validity of the index and display the result.
 *  */ 
    function getInput(idInput) {
        let inputValue = document.getElementById(idInput).value;
        return inputValue;
    }

    function checkInput(index) {
        if((index === undefined) || (index === null) || (index === "")) {
            alert(`Будь ласка, введіть порядковий номер простого числа, яке Ви шукаєте`);
            return true;
        }
        if(index != Math.floor(index) || (index < 0)) {
            alert(`Введіть ціле число більше 0`);
            return true;
        }
        if(index > 1000000) {
          alert(`Введіть ціле число менше мільйона`);
          return true;
      }
    }

    function output(number) {
        let container = document.getElementById(`result`);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.insertAdjacentHTML('beforeend', `${number}`);
    }
 
    function findAndShowPrimeNumber(index) {
        if(checkInput(index)) {return;}
        let result = findPrimeNumberByIndex(index);
        output(result);
        return result;
    }