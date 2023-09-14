// 1.Сделать запрос на сервер с помощью fetch (async await) url - https://jsonplaceholder.typicode.com/users/1 и обработать ответ.
// 2. Данные о пользователе (name, email, website) должны отображаться в карточке. Карточка также должна иметь две кнопки >  <, при клике на которые мы посылаем запрос на след. пользователя и отображаем его в карточке.
// 3. Данные о пользователе должны быть редактируемыми. На против каждого поля должна быть иконка карандаша, при клике на который пользователь мог редактировать данные пользователя.

const div_container = document.querySelector(".container");

let users = []; // Массив объектов пользователей
let currentId = 0; // Текущий id пользователя

const url = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(url);
    users = await response.json();
    renderUser(currentId);
  } catch (err) {
    alert(err);
  }
}

fetchUsers();

function renderUser(id) {
  div_container.innerHTML = "";

  if (id >= users.length) {
    alert("Это был последний пользователь");
    return;
  }

  const user = users[id];

  const div_card = document.createElement("div");
  const h1_name = document.createElement("h1");
  const h2_username = document.createElement("h2");
  const p_info = document.createElement("p");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const updateButton = document.createElement("button");
  const img = document.createElement("img");

  div_card.className = "card";
  prevButton.className = "prev";
  nextButton.className = "next";
  updateButton.className = "update-btn";

  h1_name.innerHTML = `Name: ${user.name}`;
  h2_username.innerHTML = `Username: ${user.username}`;
  p_info.innerHTML = `Email: ${user.email} Website: ${user.website}`;
  prevButton.innerText = "<";
  nextButton.innerText = ">";
  img.src = "./w256h2561339195709Edit256x256.png";

  updateButton.append(img);
  div_container.append(div_card);
  div_card.append(
    h1_name,
    h2_username,
    p_info,
    prevButton,
    nextButton,
    updateButton
  );

  nextButton.addEventListener("click", () => {
    currentId++;
    renderUser(currentId);
  });

  prevButton.addEventListener("click", () => {
    if (currentId > 0) {
      currentId--;
      renderUser(currentId);
    } else {
      alert("Это был первый пользователь");
    }
  });
}
