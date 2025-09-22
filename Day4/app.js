document.addEventListener('DOMContentLoaded', () => {
  const loadUsersBtn = document.getElementById('loadUsersBtn');
  const usersContainer = document.getElementById('usersContainer');

  loadUsersBtn.addEventListener('click', () => {
    usersContainer.innerHTML = 'Loading...';

    fetch('https:/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('error fetching users');
        }
        return response.json();
      })
      .then(users => {
        const firstThreeUsers = users.slice(0, 3);
        
        usersContainer.innerHTML = ''; 
        
        firstThreeUsers.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `
            <h3>Name: ${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <hr>
          `;
          usersContainer.appendChild(userDiv);
        });
      })
      .catch(error => {
        usersContainer.innerHTML = '⚠️ Could not load users';
        console.error('Fetch error:', error);
      });
  });
});