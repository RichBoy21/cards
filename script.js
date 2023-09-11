// 1.Сделать запрос на сервер с помощью fetch (async await) url - https://jsonplaceholder.typicode.com/users/1 и обработать ответ.
// 2. Данные о пользователе (name, email, website) должны отображаться в карточке. Карточка также должна иметь две кнопки >  <, при клике на которые мы посылаем запрос на след. пользователя и отображаем его в карточке.
// 3. Данные о пользователе должны быть редактируемыми. На против каждого поля должна быть иконка карандаша, при клике на который пользователь мог редактировать данные пользователя.

const div_container = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/users/1";

async function getDataUsers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data: ", data);
    renderUser(data);
  } catch (err) {
    alert(err);
  }
}

getDataUsers();

function renderUser(data) {
  div_container.innerHTML = "";

  const div_card = document.createElement("div");
  const h2_name = document.createElement("h2");
  const h2_username = document.createElement("h2");
  const p_info = document.createElement("p");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");

  div_card.className = "card";
  prevButton.className = "prev";
  nextButton.className = "next";

  h2_name.innerHTML = `Name: ${data.name}`;
  h2_username.innerHTML = `Username: ${data.username}`;
  p_info.innerHTML = `Email: ${data.email} Website: ${data.website}`;

  div_container.append(div_card);
  div_card.append(h2_name, h2_username, p_info, prevButton, nextButton);
}
