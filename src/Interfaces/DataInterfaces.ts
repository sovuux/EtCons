export interface Product {
    code: string;
    name: string;
    image: string;
    price: number;
    category: string;
    rating: number;
    status: string;
    [key: string]: string | number;
}

export interface Columns {
    field: string,
    header: string
}
