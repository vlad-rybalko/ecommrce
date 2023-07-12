export function currentUrl() {
    var url = window.location.href,
        index = url.indexOf('#');
    if (index > 0) url = url.substring(0, index);
    return url;
}

export function isCurrentUrl(urlOrPath) {
    const el = document.createElement('a');
    el.href = urlOrPath;
    const url = new URL(el.href);

    return window.location.pathname === url.pathname;
}
