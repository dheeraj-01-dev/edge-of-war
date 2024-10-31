let registration = null;
function register_service_worker() {
    if ('serviceWorker' in navigator) {
        window.navigator.serviceWorker.register('./sw.js', 
          { scope: './' })
            .then(res => {
                registration = res;
                console.log("SW successfully registered.");
            })
            .catch(err => {
                console.log("Could not register service worker.");
            });
    }
}