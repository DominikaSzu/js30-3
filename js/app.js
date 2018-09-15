document.addEventListener('DOMContentLoaded', function(event) {

    const allInputs = document.querySelectorAll('.controls input');
    
    handleValue = (e) => {
        const suffix = e.target.dataset.size || ''; 

        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
    }
    
//    Listen for changes on input element
    
    allInputs.forEach(input => input.addEventListener("change", handleValue));    
    
//    Listens for changes when mouse is used
    
    allInputs.forEach(input => input.addEventListener("mousemove", handleValue));
});