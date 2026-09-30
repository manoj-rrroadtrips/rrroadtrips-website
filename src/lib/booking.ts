export type TripType = 'one-way' | 'round-trip'

export type BookingRequest = {
  name: string
  phone: string
  pickupLocation: string
  destination: string
  travelDate: string
  vehicle: string
  tripType: TripType
}

export type BookingErrors = Partial<Record<keyof BookingRequest, string>>

export function todayISODate() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

export function validateBooking(values: BookingRequest): BookingErrors {
  const errors: BookingErrors = {}
  const name = values.name.trim()
  const phone = values.phone.replace(/[\s-]/g, '')
  const pickup = values.pickupLocation.trim()
  const destination = values.destination.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Name should be at least 2 characters.'

  const normalizedPhone = phone.startsWith('+91')
    ? phone.slice(3)
    : phone.startsWith('91') && phone.length === 12
      ? phone.slice(2)
      : phone

  if (!phone) errors.phone = 'Please enter your phone number.'
  else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone = 'Enter a valid 10-digit mobile number.'
  }

  if (!pickup) errors.pickupLocation = 'Please enter a pickup location.'
  if (!destination) errors.destination = 'Please enter a destination.'

  if (!values.travelDate) errors.travelDate = 'Please choose a travel date.'
  else if (values.travelDate < todayISODate()) {
    errors.travelDate = 'Travel date cannot be in the past.'
  }

  if (!values.vehicle) errors.vehicle = 'Please select a vehicle.'

  if (values.tripType !== 'one-way' && values.tripType !== 'round-trip') {
    errors.tripType = 'Please choose a trip type.'
  }

  return errors
}

/**
 * Frontend-only submit handler. Replace the body with a POST to your booking API.
 */
export async function submitBookingRequest(request: BookingRequest): Promise<{ ok: true }> {
  const payload: BookingRequest = {
    ...request,
    name: request.name.trim(),
    phone: request.phone.replace(/[\s-]/g, ''),
    pickupLocation: request.pickupLocation.trim(),
    destination: request.destination.trim(),
  }

  await new Promise((resolve) => setTimeout(resolve, 400))
  void payload
  return { ok: true }
}
