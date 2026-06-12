export default function handleForm() {
    const params = new URLSearchParams(window.location.search);

    const section = document.querySelector("main");

    if(params == "") {
        // Display the data
        section.innerHTML = `
            <h1>How did you get here?!</h1>
            <section>
                <h2>No subscription was made!</h2>
                <p>We don't know have you found this page but, just to let you know, there is nothing here for now!</p>
                <a href="index.html">Click me to return!</a>
            </section>
        `;
    } else {
        // Get the value of the params
        const fname = params.get("fname");
        const lname = params.get("lname");
        const email = params.get("email");
        const membership = params.get("membership");
        // Display the data
        section.innerHTML = `
            <h1>You're one of us!</h1>
            <section>
                <h2>Subscription information</h2>
                <p id="name">Name: ${fname} ${lname}</p>
                <p id="email">E-mail: ${email}</p>
                <p id="subscription">Membership: ${membership}</p>
                <a href="index.html">Click me to return!</a>
            </section>
        `;
    }
    
}