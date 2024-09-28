
### 4. **JavaScript (script.js)**:
For this simple website, JavaScript could be used to handle form validation or any interactive elements. However, to keep things basic, the following is an example for form validation (optional):

```js
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill out all required fields');
        e.preventDefault();  // Prevent form submission
    }
});
