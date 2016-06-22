// Check if a new cache is available on page load.
window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        console.log("New Version, updating...");
        window.location.reload();
    } else {
        // Manifest didn't changed. Nothing new to serve.
    }
}, false);
function updateApp() {
    window.applicationCache.update();
}
// check for new page version
setInterval(updateApp,10*60*1000); // 10 min
