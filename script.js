// Function to navigate between sections
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Handle Sign Up Form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Sign Up Successful!");
    showSection('home');
});

// Handle Login Form submission - Navigate to Prediction page
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login Successful!");
    showSection('prediction'); // Go directly to the Prediction section after login
});

// Handle Prediction Form submission - For uploading image and showing prediction
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const file = document.getElementById('image-upload-prediction').files[0];
    if (file) {
        // Preview the uploaded image
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '300px';
            img.style.marginTop = '20px';
            
            // Clear previous preview
            const previewContainer = document.getElementById('image-preview-container-prediction');
            previewContainer.innerHTML = '';
            previewContainer.appendChild(img);
            
            // Prediction logic goes here
            // For now, it's a dummy result
            const predictionResult = "Prediction: Diabetic Retinopathy Detected";
            document.getElementById('prediction-result').innerText = predictionResult;
        };
        reader.readAsDataURL(file);
    }
});

// Handle Image Preview (for Upload section)
document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '300px';
        img.style.marginTop = '20px';
        const previewContainer = document.getElementById('image-preview-container');
        previewContainer.innerHTML = ''; // Clear any existing previews
        previewContainer.appendChild(img);
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});
