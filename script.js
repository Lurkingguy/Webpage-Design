document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const passwordList = document.getElementById('password-list');
    const row = passwordList.insertRow();
    
    row.insertCell(0).textContent = website;
    row.insertCell(1).textContent = username;
    row.insertCell(2).textContent = password;
    
    document.getElementById('password-form').reset();
  });
  