if (localStorage.getItem("userName")) {
    document.getElementById("tatar").textContent = "Kitty " + localStorage.getItem("userName") + " is home";
    document.getElementById("signin").hidden = true;
    document.getElementById("g_id_onload").hidden = true;
    document.getElementById("tadzik").hidden = false;
} else {
    document.getElementById("tatar").textContent = "Sign in to confirm that you go meow. ";
    document.getElementById("signin").hidden = false;
    document.getElementById("g_id_onload").hidden = false;
    document.getElementById("tadzik").hidden = true;
}

function decodeJwtResponse(credential) {
    const [header, payload, signature] = credential.split(".");
    const decodedPayload = JSON.parse(atob(payload));

    return decodedPayload;
}

function handleCredentialResponse(response) {
    const credential = response.credential;
    const decodedPayload = decodeJwtResponse(credential);

    console.log("Decoded Payload:", decodedPayload);

    localStorage.setItem("userName", decodedPayload.given_name);

    document.getElementById("tatar").textContent = "Kitty " + localStorage.getItem("userName") + " is home";
    document.getElementById("signin").hidden = true;
    document.getElementById("g_id_onload").hidden = true;
    document.getElementById("tadzik").hidden = false;

}

function signOut() {
    localStorage.removeItem("userName");
    document.getElementById("tatar").textContent = "Sign in to confirm that you go meow. ";
    document.getElementById("signin").hidden = false;
    document.getElementById("g_id_onload").hidden = false;
    document.getElementById("tadzik").hidden = true;
}
