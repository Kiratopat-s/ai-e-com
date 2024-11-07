import { StockItem } from '@/interface/stock'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: StockItem[] | { message: string }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { category_string } = req.query
    const stockData: StockItem[] = require('../../../../mock/stock.json')
    const stockItem = stockData.filter((stockItem) => stockItem.category === category_string) || {
        message: `Stock item with category ${category_string} not found`
    }
    res.status(200).json({ data: stockItem })
}