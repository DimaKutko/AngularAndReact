function createStatistics() {
    let counter = 0;
    const listner = () => counter++;

    document.addEventListener('click', listner);

    return {
        getClicks() {
            return counter;
        },
        removeClicks() {
            return counter = 0;
        }
    }
}

window.statistics = createStatistics();