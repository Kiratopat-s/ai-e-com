import { StockItem } from '@/interface/stock'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: StockItem[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const stockData: StockItem[] = require('../../mock/stock.json')
    res.status(200).json({ data: stockData })
}