var shown = false;

function showhideEmail() {
    if (shown) {
        // SECURE: Use textContent for simple text
        document.getElementById('email').textContent = "Show my email";
        shown = false;
    } else {
        // SECURE: Create elements safely instead of innerHTML
        var emailElement = document.getElementById('email');
        emailElement.innerHTML = ''; // Clear content
        
        var link = document.createElement('a');
        link.href = 'mailto:lavanyag1@udayton.edu';
        link.textContent = 'lavanyag1@udayton.edu'; // SECURE: Use textContent
        
        emailElement.appendChild(link);
        shown = true;
    }
}