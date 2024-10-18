document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.querySelector(".fas.fa-user");
    const cartButton = document.querySelector(".fas.fa-shopping-cart");
    const wishlistButton = document.querySelector(".fas.fa-heart");
    
    let isSignedUp = false;

    // Event listener for signup button
    signupButton.addEventListener("click", () => {
        const username = prompt("Please enter your username to sign up:");
        if (username) {
            isSignedUp = true;
            alert("Signup successful! Welcome, " + username + "!");
        } else {
            alert("Signup cancelled.");
        }
    });

    // Event listener for cart button
    cartButton.addEventListener("click", () => {
        if (!isSignedUp) {
            alert("Please sign up first!");
        } else {
            alert("Item added to cart!");
            // Here you can implement the logic for adding the item to the cart
        }
    });

    // Event listener for wishlist button
    wishlistButton.addEventListener("click", () => {
        if (!isSignedUp) {
            alert("Please sign up first!");
        } else {
            alert("Item added to wishlist!");
            // Here you can implement the logic for adding the item to the wishlist
        }
    });
});
