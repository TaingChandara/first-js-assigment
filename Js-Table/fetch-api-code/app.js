const listGroup = document.querySelector(".list-group");
// Gel all buttons
const getPost = document.querySelector(".get-post");
const addPost = document.querySelector(".add-post");
const editPost = document.querySelector(".edit-post");
const deletePost = document.querySelector(".delete-post");

const url = "https://jsonplaceholder.typicode.com/posts/";
let output = "";

const getResponse = (response) => response.json();
const processJSON = (json) => {
  if (!!Object.keys(json).length) {
    output = `
       <li class="list-group-item">${json.userId}</li>
      <li class="list-group-item">${json.id}</li>
      <li class="list-group-item">${json.title}</li>
      <li class="list-group-item">${json.body}</li>

  `;
  }
  listGroup.innerHTML = output;
};
const writeServer = (action, data) => ({
  method: action,
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

// GET
getPost.addEventListener("click", () => {
  fetch(`${url}/50`).then(getResponse).then(processJSON);
});

// POST
addPost.addEventListener("click", () => {
  const newPost = {
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  fetch(url, writeServer("POST", newPost)).then(getResponse).then(processJSON);
});

// PUT
editPost.addEventListener("click", () => {
  const updatePost = {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  };
  fetch(`${url}/2`, writeServer("PUT", updatePost))
    .then(getResponse)
    .then(processJSON);
});

// DELETE
deletePost.addEventListener("click", () => {
  fetch(`${url}/1`, { method: "DELETE" }).then(getResponse).then(processJSON);
});
