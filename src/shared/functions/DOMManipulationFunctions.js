// export async function generateRandomString() {
// const { v4 } = await import('uuid');
// return v4();
// }

export function createElementFromString(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

export function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

export function copyToClipboard(inputSelector) {
    const element = document.querySelector(inputSelector);
    copyToClipboardFromInput(element);
}

export function copyToClipboardFromInput(element) {
    element.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
