
export default function processOpnFrmData(event) {
    // 1. Prevent normal event (form sending) processing
    event.preventDefault();

    // 2. Read and adjust data from the form (here we remove white spaces before and after the strings)
    const nopName = document.getElementById("nameElm").value.trim();
    const nopEmail = document.getElementById("email").value.trim();
    const nopImageURL = document.getElementById("image_url").value.trim();
    const nopCatType = document.querySelector('input[name="cat_type"]:checked').value.trim();
    const nopOpinion = document.getElementById("opnElm").value.trim();
    const nopKeywords = document.getElementById("keywords").value.trim();
    const nopMarketing = document.getElementById("marketing").checked;

    // 3. Verify the data
    if (nopName === "" || nopEmail === "" || nopOpinion === "") {
        window.alert("Please, fill in all required fields (name, email, opinion).");
        return;
    }

    // 4. Add the data to the array opinions and local storage
    const newOpinion = {
        name: nopName,
        email: nopEmail,
        image_url: nopImageURL,
        cat_type: nopCatType,
        comment: nopOpinion,
        keywords: nopKeywords,
        marketing: nopMarketing,
        created: new Date()
    };

    let opinions = [];

    if (localStorage.myTreesComments) {
        opinions = JSON.parse(localStorage.myTreesComments);
    }

    opinions.push(newOpinion);
    localStorage.myTreesComments = JSON.stringify(opinions);

    // 5. Go to the opinions
    window.location.hash = "#opinions";
}
