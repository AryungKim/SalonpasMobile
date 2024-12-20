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
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        const journeySection = document.querySelector('.journey-tracker');
        if (journeySection) {
            observer.observe(journeySection);
        }
    },

    startJourneyAnimation() {
        const steps = document.querySelectorAll('.journey-step');
        const staggerDelay = 600; // Increased delay between steps

        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('active');
                this.animateProgress(index);

                // Add subtle bounce effect
                step.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    step.style.transform = 'translateY(0)';
                }, 200);
            }, index * staggerDelay);
        });
    },

    animateProgress(stepIndex) {
        if (stepIndex < 3) {
            const progressLine = document.querySelector(`.progress-line-${stepIndex + 1}`);
            if (progressLine) {
                progressLine.classList.add('animate');

                // Add subtle pulse effect to the next step
                const nextStep = document.querySelectorAll('.journey-step')[stepIndex + 1];
                if (nextStep) {
                    setTimeout(() => {
                        nextStep.querySelector('.step-icon').style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            nextStep.querySelector('.step-icon').style.transform = 'scale(1)';
                        }, 300);
                    }, 400);
                }
            }
        }
    },

    // Reset animations for demo purposes
    reset() {
        const steps = document.querySelectorAll('.journey-step');
        const lines = document.querySelectorAll('.progress-line');

        steps.forEach(step => {
            step.classList.remove('active');
            step.style.transform = '';
            const icon = step.querySelector('.step-icon');
            if (icon) icon.style.transform = '';
        });

        lines.forEach(line => line.classList.remove('animate'));

        // Restart animation with a slight delay
        setTimeout(() => this.startJourneyAnimation(), 100);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    journeyTracker.init();
});

// Add resize handler for responsive animations
window.addEventListener('resize', () => {
    const steps = document.querySelectorAll('.journey-step');
    const isVertical = window.innerWidth <= 768;

    steps.forEach(step => {
        if (isVertical) {
            step.style.transform = step.classList.contains('active') ? 'translateY(0)' : 'translateY(20px)';
        } else {
            step.style.transform = step.classList.contains('active') ? 'translateY(0)' : 'translateY(20px)';
        }
    });
});