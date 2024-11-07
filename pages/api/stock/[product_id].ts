import { StockItem } from '@/interface/stock'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: StockItem | { message: string }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { product_id } = req.query
    const stockData: StockItem[] = require('../../../mock/stock.json')
    const stockItem = stockData.find((stockItem: StockItem) => stockItem.id === product_id) || {
        message: `Stock item with id ${product_id} not found`
    }
    res.status(200).json({ data: stockItem })
}