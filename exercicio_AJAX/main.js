document.addEventListener("DOMContentLoaded", function () {
    const githubLink = document.getElementById("github-link");

    githubLink.addEventListener("click", function (event) {
        event.preventDefault(); 

        fetch("https://api.github.com/users/helenformighieri")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro na requisição da API");
                }
                return response.json();
            })
            .then(data => {
                document.querySelector(".profile-avatar").src = data.avatar_url;
                document.querySelector(".profile-name").textContent = data.name;
                document.querySelector(".profile-username").textContent = "@" + data.login;
                document.querySelector(".numbers-item:nth-child(1)").textContent = data.public_repos;
                document.querySelector(".numbers-item:nth-child(2)").textContent = data.followers;
                document.querySelector(".numbers-item:nth-child(3)").textContent = data.following;
            })
            .catch(error => {
                console.error("Erro: " + error.message);
            });
    });
});
