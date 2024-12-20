// Handle language toggle
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('language-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('change', function() {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('lang', this.checked ? 'ar' : 'en');
            window.location.href = currentUrl.toString();
        });
    }

    // Set initial language toggle state
    const urlParams = new URLSearchParams(window.location.search);
    if (langToggle) {
        langToggle.checked = urlParams.get('lang') === 'ar';
    }

    // Update document direction based on language
    document.documentElement.dir = urlParams.get('lang') === 'ar' ? 'rtl' : 'ltr';
});
