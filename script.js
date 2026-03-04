// Jab DOM completely load ho jaye tab yeh code chale
document.addEventListener('DOMContentLoaded', function() {
    
    // Button ko select karo using its ID
    const myButton = document.getElementById('alertBtn');
    
    // Check karo ki button mila ya nahi
    if (myButton) {
        console.log("button clicked! 🎉");
        
        // Button click event listener add karo
        myButton.addEventListener('click', function() {
            // Alert message show karo
            alert('Hello! button clicked! 👋');
            
            // Console mein bhi message show karo
            console.log('Button clicked at: ' + new Date().toLocaleTimeString());
        });
    } else {
        console.log("error! 😕");
    }
});