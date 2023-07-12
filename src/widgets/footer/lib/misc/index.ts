export function forumLinkFormatted(forum_link: string) {
    try {
        return new URL(forum_link).hostname;
    } catch {
        return forum_link;
    }
}