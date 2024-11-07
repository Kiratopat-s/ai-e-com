import { StockItem } from '@/interface/stock'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: StockItem[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const stockData: StockItem[] = require('../../../mock/stock.json')
    const activeStockData = stockData.filter((stockItem) => stockItem.isActive)
    res.status(200).json({ data: activeStockData })
}