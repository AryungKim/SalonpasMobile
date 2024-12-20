// Journey Tracker Animation Controller
const journeyTracker = {
    init() {
        this.observeJourneySection();
    },

    observeJourneySection() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startJourneyAnimation();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const journeySection = document.querySelector('.journey-tracker');
        if (journeySection) {
            observer.observe(journeySection);
        }
    },

    startJourneyAnimation() {
        const steps = document.querySelectorAll('.journey-step');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('active');
                this.animateProgress(index);
            }, index * 1000);
        });
    },

    animateProgress(stepIndex) {
        if (stepIndex < 3) { // Don't animate after the last step
            const progressLine = document.querySelector(`.progress-line-${stepIndex + 1}`);
            if (progressLine) {
                progressLine.classList.add('animate');
            }
        }
    },

    // Reset animations for demo purposes
    reset() {
        const steps = document.querySelectorAll('.journey-step');
        const lines = document.querySelectorAll('.progress-line');
        
        steps.forEach(step => step.classList.remove('active'));
        lines.forEach(line => line.classList.remove('animate'));
        
        // Restart animation
        setTimeout(() => this.startJourneyAnimation(), 100);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    journeyTracker.init();
});
