function countCharacters() {
    const inputString = document.getElementById('inputString1').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of inputString) {
      if (char.match(/[a-z]/i)) {
        if (vowels.includes(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
    }
  
    document.getElementById('result1').innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
  }
  
  function checkPalindrome() {
    const inputString = document.getElementById('inputString2').value;
    const reversedString = inputString.split('').reverse().join('');
  
    if (inputString === reversedString) {
      document.getElementById('result2').innerHTML = `${inputString} is a palindrome.`;
    } else {
      document.getElementById('result2').innerHTML = `${inputString} is not a palindrome.`;
    }
  }
  
  function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
  
    document.getElementById('result3').innerHTML = `Total amount to be paid (including tip): $${totalAmount.toFixed(2)}`;
  }
  