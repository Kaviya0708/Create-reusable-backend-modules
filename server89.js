async function loadUsers() {

    const output =
        document.getElementById("output");

    output.innerHTML = "Loading...";

    try {

        const response = await fetch(
            "http://localhost:3000/users"
        );

        const data = await response.json();

        if (data.success) {

            let html =
                "<h3>Users List</h3>";

            data.data.forEach(user => {

                html += `
                    <p>
                        ID: ${user.id}
                        <br>
                        Name: ${user.name}
                    </p>
                    <hr>
                `;
            });

            output.innerHTML = html;

        } else {

            output.innerHTML =
                "Failed to load users.";
        }

    } catch (error) {

        console.error(error);

        output.innerHTML =
            "Error connecting to backend.";
    }
}

// Load users automatically when page opens
window.onload = loadUsers;