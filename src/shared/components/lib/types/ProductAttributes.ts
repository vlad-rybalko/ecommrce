export type ProductAttributes = {
    [key: string]: string | null;
};

function getNonNullAttribute(attributes: ProductAttributes, primaryAttribute: string): string {
    if (attributes[primaryAttribute]) {
        return primaryAttribute;
    }
    for (const attribute in attributes) {
        if (attributes[attribute]) {
            return attribute;
        }
    }
    throw new Error('No attributes given');
}

export function getFullString(
    attributes: ProductAttributes,
    primaryAttribute: string,
    translations: { [key: string]: string },
) {
    const attribute = getNonNullAttribute(attributes, primaryAttribute);
    return `${translations[attribute]} ${attributes[attribute]}%`;
}

export function getShortString(
    attributes: ProductAttributes,
    primaryAttribute: string,
    translations: { [key: string]: string },
) {
    const attribute = getNonNullAttribute(attributes, primaryAttribute);
    return `${translations[attribute]}-${attributes[attribute]}`;
}
