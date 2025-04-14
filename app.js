const usersContainer = document.querySelector("#users");
const userForm = document.querySelector("#newUserForm");

window.onload = async () => {
  try {
    const res = await fetch("http://localhost:8005/users");
    const users = await res.json();

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerText = `${user.username} / ${user.email}`;
      usersContainer.appendChild(userDiv);
    });
  } catch (err) {
    console.error(err);
  }
};

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(userForm);
  const username = data.get("username");
  const email = data.get("email");

  const res = await fetch("http://localhost:8005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
    }),
  });

  if (res.status === 201) {
    console.log("Success !");
    const userDiv = document.createElement("div");
    userDiv.innerText = `${username} / ${email}`;
    usersContainer.appendChild(userDiv);
  }
});
