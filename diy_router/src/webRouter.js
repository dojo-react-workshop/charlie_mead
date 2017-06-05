const { history, location, addEventListener } = window;
const callbackContainer = [];

const runCallbacks = () => {
    callbackContainer.forEach((cb) => {
        cb();
    });
}

addEventListener('popstate', runCallbacks);

const webRouter = {
    navigateTo(path) {
        history.pushState({}, null, path);
        runCallbacks();
    },
    path: () => location.pathname,
    subscribe(callback) {
        callbackContainer.push(callback);
    }
}

export default webRouter;