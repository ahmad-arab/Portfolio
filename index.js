document.addEventListener('DOMContentLoaded', function() {
    let progressBars = Array.from(document.getElementsByClassName('progress-bar'));
    let percentageValues = Array.from(document.getElementsByClassName('percentage-value'));

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {

        progressBars = progressBars.filter(element => {
            if (isElementInViewport(element)) {
                var targetPercentage = element.getAttribute('data-percentage');
                element.style.width = `${targetPercentage}%`;
                return false;
            }
            return true;
        });

        percentageValues = percentageValues.filter(element => {
            if (isElementInViewport(element)) {
                var targetPercentage = element.getAttribute('data-percentage');
                element.innerText = `${targetPercentage}%`;
                return false;
            }
            return true;
        });
    }

    window.addEventListener('scroll', onScroll);

    // Initial check in case elements are already in view
    onScroll();
});