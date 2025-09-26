export interface Material {
    id: string;
    name: string;
    quantity: number;
    unitCost?: number;
}

export interface Formula {
    id: string;
    name: string;
    creator: string;
    category: string;
    notes: string;
    createdAt: string;
    materials: Material[];
}