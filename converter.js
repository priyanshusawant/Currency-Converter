const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var FromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
FromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);



// function getresults
function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${resultFrom}`)
        .then(currenc => {
            return currenc.json();
        }).then(displayResults);
}

// display results after conversion
function displayResults(currency) {
    let toRate = currency.rates[resultTo];

    finalValue.innerHTML =
        (toRate * searchValue).toFixed(2);
        // document.write( (toRate * searchValue).toFixed(2));
    finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};

