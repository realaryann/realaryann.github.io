// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Automatically update the copyright year in the footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

});