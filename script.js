let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}


function selectPackage(packageName) {
    let packages = document.getElementsByClassName("package");
    for (let i = 0; i < packages.length; i++) {
        packages[i].classList.remove("selected");
    }
    const selectedPackage = document.querySelector(`[onclick="selectPackage('${packageName}')"]`);
    if (selectedPackage) {
        selectedPackage.classList.add("selected");
    }

    // Change the background image of the "Our Package" section
    let packageSection = document.getElementById('packages');
    console.log(`Changing background for: ${packageName}`); // Add debugging information
    switch(packageName) {
        case 'Raja Ampat':
            packageSection.style.backgroundImage = "url('assets/img/raja_ampat.jpg')";
            break;
        case 'Banda Neira':
            packageSection.style.backgroundImage = "url('assets/img/banda_neira.jpg')";
            break;
        case 'Bromo':
            packageSection.style.backgroundImage = "url('assets/img/bromo.png')";
            break;
        case 'Bali':
            packageSection.style.backgroundImage = "url('assets/img/bali.png')";
            break;
        default:
            packageSection.style.backgroundImage = "none";
    }
    console.log(`Background image set to: ${packageSection.style.backgroundImage}`); // Add debugging information
}

// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Mark the current anchor as active
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form validation
    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const interest = document.getElementById("interest").value;

        if (name === "" || email === "" || interest === "") {
            alert("All fields must be filled out");
            return false;
        }
        return true;
    }

    // Function to handle package selection
    function selectPackage(packageName) {
        let packages = document.getElementsByClassName("package");
        for (let i = 0; i < packages.length; i++) {
            packages[i].classList.remove("selected");
        }
        const selectedPackage = document.querySelector(`[onclick="selectPackage('${packageName}')"]`);
        if (selectedPackage) {
            selectedPackage.classList.add("selected");
        }

        // Change the background image of the "Our Package" section
        let packageSection = document.getElementById('packages');
        switch(packageName) {
            case 'Raja Ampat':
                packageSection.style.backgroundImage = "url('assets/img/raja_ampat.jpg')";
                break;
            case 'Banda Neira':
                packageSection.style.backgroundImage = "url('assets/img/banda_neira.jpg')";
                break;
            case 'Bromo':
                packageSection.style.backgroundImage = "url('assets/img/bromo.png')";
                break;
            case 'Bali':
                packageSection.style.backgroundImage = "url('assets/img/bali.png')";
                break;
            default:
                packageSection.style.backgroundImage = "none";
        }
    }

    // Function to handle scroll and update active nav link
    function handleScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Setup Intersection Observer
    const options = {
        threshold: 0.5 // Adjust this value as needed
    };

    const observer = new IntersectionObserver(handleScroll, options);

    // Observe each section
    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Mark the current anchor as active
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Export functions to global scope for HTML onclick attributes
    window.selectPackage = selectPackage;
    window.validateForm = validateForm;
});

