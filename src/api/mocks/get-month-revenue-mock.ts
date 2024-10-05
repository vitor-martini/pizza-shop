import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenue = http.get<never, never, GetMonthRevenueResponse>(
  '/metrics/month-receipt',
  () => {
    return HttpResponse.json({
      receipt: 2000000,
      diffFromLastMonth: 40,
    })
  },
)
