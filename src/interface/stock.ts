export interface StockItem {
    id: string;
    name: string;
    description: string;
    price: number;
    stockRemaining: number;
    countItemsSold: number;
    category: string;
    supplierName: string;
    purchaseCost: number;
    sku: string;
    lastRestockDate: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}