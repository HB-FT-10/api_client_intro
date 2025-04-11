const usersContainer = document.querySelector("#users");

window.onload = async () => {
  try {
    const res = await fetch("http://localhost:8005");
    const users = await res.json();

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerText = `${user.name} ${user.firstname}`;
      usersContainer.appendChild(userDiv);
    });
  } catch (err) {
    console.error(err);
  }
};
