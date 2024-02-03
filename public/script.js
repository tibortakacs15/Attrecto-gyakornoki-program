document.getElementById('fetch-users').onclick = fetchAndRenderUsers;

async function fetchAndRenderUsers() {
  const response = await fetch("/users");
  const users = await response.json();

  let usersHTML = "<h1>Felhasznalok:</h1>";
  for (const user of users) {
    usersHTML += `
    <div class="card mb-2 w-50">
        <div class="card-body">
            <p class="card-text">${user.user_name}</p>
        </div>
    </div>
    `;
  }

  document.getElementById("user-list-component").innerHTML = usersHTML;
}

document.getElementById("create-user").onsubmit = async function (event) {
  event.preventDefault();
  const user_name = event.target.elements.user_name.value;
  const res = await fetch("/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ user_name}),
  });

  if (res.ok) {
    fetchAndRenderUsers();
  } else {
    alert("Server error");
  }
};
