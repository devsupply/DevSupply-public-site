function bubbleNavigation(path) {
    const urlPath = `${window.location.origin}${path}`;
    if( window.self !== window.top ) {
    window.parent.postMessage(urlPath, window.location.origin);
    } else {
    window.location.href = urlPath;
    }
}