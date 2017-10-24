// Just including it in setupTests.js didn't fix it for me, but creating a new file with the polyfill and importing that at the top of setupTests.js does it
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};