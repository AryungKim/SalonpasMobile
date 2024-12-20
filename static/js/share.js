const socialShare = {
    init() {
        this.attachEventListeners();
    },

    // Get sharing message based on current language
    getMessage() {
        const currentLang = window.i18n.getCurrentLanguage();
        const translations = document.getElementById('share-translations');
        return translations.dataset[`message${currentLang.toUpperCase()}`];
    },

    // Share handlers for different platforms
    shareHandlers: {
        twitter(message) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(message);
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        },

        facebook(message) {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        },

        whatsapp(message) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(`${message}\n${window.location.href}`);
            if (/mobile/i.test(navigator.userAgent)) {
                window.open(`whatsapp://send?text=${text}`);
            } else {
                window.open(`https://web.whatsapp.com/send?text=${text}`);
            }
        }
    },

    attachEventListeners() {
        document.querySelectorAll('[data-share]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = button.dataset.share;
                const message = this.getMessage();
                
                if (this.shareHandlers[platform]) {
                    this.shareHandlers[platform](message);
                }
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    socialShare.init();
});
