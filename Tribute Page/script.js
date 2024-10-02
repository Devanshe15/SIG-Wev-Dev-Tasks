window.onload = function() {
    alert('Welcome to the Tribute Page for Devanshe Sharma!');
};

// Scroll to Top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};