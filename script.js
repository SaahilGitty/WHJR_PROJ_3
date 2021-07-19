function margherita() {
    document.getElementById('marg').innerHTML = "$11.80";
}
function restore_margherita() {
    document.getElementById('marg').innerHTML = "More About Pizza Margherita";
}
function classic() {
    document.getElementById('clas').innerHTML = "$10.00";
}
function restore_classic() {
    document.getElementById('clas').innerHTML = "More about Classic Cheese Pizza";
}
function restore_bbq() {
    document.getElementById('bbq').innerHTML = "Make it home-made!";
}
function bbq() {
    document.getElementById('bbq').innerHTML = "$13.60";
}
function viewItems()
{
    var pizzaArray = ["Cheese Pizza", "Chicken BBQ Pizza", "Pepperoni Pizza", "Hawaiian Pizza"];
    var sidesArray = ["French Fries", "Garlic Bread"];
    var dessertsArray = ["Ice Cream", "Chocolate Cake", "Toffee Cake"];

    var sortedPArray = pizzaArray.sort();
    var sortedSArray = sidesArray.sort();
    var sortedDArray = dessertsArray.sort();

    document.getElementById('pizza1').innerHTML = sortedPArray[0]
    document.getElementById('pizza2').innerHTML = sortedPArray[1]
    document.getElementById('pizza3').innerHTML = sortedPArray[2]
    document.getElementById('pizza4').innerHTML = sortedPArray[3]

    document.getElementById('side1').innerHTML = sortedSArray[0]
    document.getElementById('side2').innerHTML = sortedSArray[1]
    
    document.getElementById('dessert1').innerHTML = sortedDArray[0]
    document.getElementById('dessert2').innerHTML = sortedDArray[1]
    document.getElementById('dessert3').innerHTML = sortedDArray[2]
}

var i = 0
var imageArray = ["https://imgr.search.brave.com/4c3Uyo9urUrXMinmnkwc4uMKloLKKnoCj5rjKWOzjYk/fit/1200/1200/no/1/aHR0cDovL2xtbGQu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEyLzAzLzAxMS5q/cGc", "https://imgr.search.brave.com/T-gm1XL8htjDCOwtpSqEyEhgMrP5yNJdpAjV3jY-2DQ/fit/731/1024/no/1/aHR0cHM6Ly93aGF0/c2ludGhlcGFuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9QZXJpLVBl/cmktQ2hpY2tlbi0x/My5qcGc", "https://imgr.search.brave.com/HSjH4a3QJWRCnbS_DVZgydY1U5aK3aCMeEDUCYxOmQI/fit/1200/1200/no/1/aHR0cHM6Ly9mbGV2/b3RyYWRlLm5sL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEx/L2ZsZXZvdHJhZGVf/ZnJpZXNfZmVhdHVy/ZWQuanBn", "https://riotfest.org/wp-content/uploads/2016/10/Pepperoni_1.jpg", "https://imgr.search.brave.com/0axoYardGZcz0h0lEzip62OxaXlYogR7XSlwm500m74/fit/800/533/no/1/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWxp/Y2lvdXMtY2hlZXNl/LXN0cmluZ3ktc2xp/Y2UtbGlmdGVkLWZ1/bGwtc3VwcmVtZS1w/aXp6YS1iYWtlZC1m/cmVzaC1vdXQtb3Zl/bi1uZXh0LXRvLWlu/Z3JlZGllbnRzLWRl/bGljaW91cy1jaGVl/c2UtMTI5ODY5Njkx/LmpwZw"]
function carousel() {
    i += 1;
    console.log(i);

    document.getElementById("carousel").src = imageArray[i];

    if (i === 5) {
        i = 0
        console.log(i);
        document.getElementById("carousel").src = imageArray[i];
    }
}

function secret() {
    alert('You found the secret alert!')
}