// Client-side internationalization support
const i18n = {
    // Initialize i18n functionality
    init() {
        this.attachEventListeners();
        this.updatePageDirection();
    },

    // Get current language from URL parameters
    getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang') || 'en';
    },

    // Update HTML direction attribute based on language
    updatePageDirection() {
        const currentLang = this.getCurrentLanguage();
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;

        // Update Bootstrap classes for RTL support
        if (currentLang === 'ar') {
            this.applyRTLClasses();
        } else {
            this.removeTRLClasses();
        }
    },

    // Apply RTL-specific Bootstrap classes
    applyRTLClasses() {
        document.querySelectorAll('.me-auto').forEach(el => {
            el.classList.remove('me-auto');
            el.classList.add('ms-auto');
        });
        
        document.querySelectorAll('.text-start').forEach(el => {
            el.classList.remove('text-start');
            el.classList.add('text-end');
        });
    },

    // Remove RTL-specific Bootstrap classes
    removeTRLClasses() {
        document.querySelectorAll('.ms-auto').forEach(el => {
            el.classList.remove('ms-auto');
            el.classList.add('me-auto');
        });
        
        document.querySelectorAll('.text-end').forEach(el => {
            el.classList.remove('text-end');
            el.classList.add('text-start');
        });
    },

    // Attach event listeners for language switching
    attachEventListeners() {
        const langToggle = document.getElementById('language-toggle');
        if (langToggle) {
            langToggle.addEventListener('change', (e) => {
                const newLang = e.target.checked ? 'ar' : 'en';
                this.switchLanguage(newLang);
            });

            // Set initial toggle state
            langToggle.checked = this.getCurrentLanguage() === 'ar';
        }
    },

    // Switch language and reload page
    switchLanguage(newLang) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', newLang);
        window.location.href = currentUrl.toString();
    },

    // Format numbers according to locale
    formatNumber(number) {
        const locale = this.getCurrentLanguage() === 'ar' ? 'ar-SA' : 'en-US';
        return new Intl.NumberFormat(locale).format(number);
    },

    // Format dates according to locale
    formatDate(date) {
        const locale = this.getCurrentLanguage() === 'ar' ? 'ar-SA' : 'en-US';
        return new Intl.DateTimeFormat(locale).format(date);
    }
};

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Export for use in other scripts
window.i18n = i18n;
