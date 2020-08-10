/**
 * Waits for the story to be visibile in the browser
 */
function waitForStory() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
}

module.exports = {
    waitForStory: waitForStory
};
