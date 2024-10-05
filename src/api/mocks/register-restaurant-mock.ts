import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../register-restaurent'

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    } else {
      return new HttpResponse(null, { status: 400 })
    }
  },
)
