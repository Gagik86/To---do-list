const input = document.getElementById('title')
const button = document.getElementById('button1')
const inputPlac1 = document.getElementById('input1')

button.addEventListener('click', function () {
      if (inputPlac1.value === "") {
            alert('error')
      } else {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            const placText = document.createElement('span');
            placText.innerText = inputPlac1.value;
            deleteButton.innerText = 'X';
            deleteButton.className = 'deleteButton';
            inputPlac1.value = "";
            todo.appendChild(li);
            li.appendChild(placText);
            li.appendChild(deleteButton);
            deleteButton.addEventListener('click', function () {
                  todo.removeChild(li);
            })
      };
});
