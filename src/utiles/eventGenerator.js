export default (path) => {
    window.history.pushState({}, '', path)
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}