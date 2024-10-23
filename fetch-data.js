async function fetchUserData (){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')
    dataContainer.textContent = 'Loading user data...';
    try{
        const response = await fetch(apiUrl)
        if (!response.ok){
            throw new Error('failed to fetch data from api')
        }
        const users = await response.json();
        dataContainer.innerHTML = ''
        const userList = document.createElement('ul')
        users.forEach(user => {
            const userItem = document.createElement('li')
            userList.appendChild(userItem);
        });
        dataContainer.appendChild(userList)
    }catch (error){
        dataContainer.innerHTML = ''
        dataContainer.textContent = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded',fetchUserData)