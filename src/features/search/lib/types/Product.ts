import { Tag } from '.';
import { ProductStatus } from ".";

export type Product = {
    is_available: ProductStatus
    is_available_label: string
    link: string
    name: string
    information: string
    tags: Array<Tag>
    image: string
    current_price_per_seed: number
    original_price_per_seed: number
}
