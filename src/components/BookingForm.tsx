import { Send } from 'lucide-react'
import { useId, useState, type FormEvent } from 'react'
import { site, vehicles } from '../data/content'
import {
  createWhatsAppBookingUrl,
  todayISODate,
  validateBooking,
  type BookingErrors,
  type BookingRequest,
} from '../lib/booking'

const emptyForm: BookingRequest = {
  name: '',
  phone: '',
  pickupLocation: '',
  destination: '',
  travelDate: '',
  vehicle: '',
  tripType: 'one-way',
}

const fieldOrder: (keyof BookingRequest)[] = [
  'name',
  'phone',
  'pickupLocation',
  'destination',
  'travelDate',
  'vehicle',
  'tripType',
]

export function BookingForm() {
  const formId = useId()
  const [values, setValues] = useState<BookingRequest>(emptyForm)
  const [errors, setErrors] = useState<BookingErrors>({})
  const [success, setSuccess] = useState(false)
  const minDate = todayISODate()

  function update<K extends keyof BookingRequest>(key: K, value: BookingRequest[K]) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setSuccess(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateBooking(values)
    setErrors(nextErrors)
    const firstInvalid = fieldOrder.find((key) => nextErrors[key])
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus()
      return
    }

    const whatsappHref = site.phoneContacts.primary.whatsappHref
    const whatsappUrl = createWhatsAppBookingUrl(values, whatsappHref)
    const whatsappWindow = window.open(whatsappUrl, '_blank')
    if (whatsappWindow) {
      whatsappWindow.opener = null
    } else {
      window.location.assign(whatsappUrl)
    }
    setValues(emptyForm)
    setSuccess(true)
  }

  return (
    <>
      <form className="grid gap-4" onSubmit={onSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id={`${formId}-name`}
            label="Your Name"
            required
            error={errors.name}
            value={values.name}
            autoComplete="name"
            onChange={(value) => update('name', value)}
          />
          <Field
            id={`${formId}-phone`}
            label="Phone Number"
            required
            error={errors.phone}
            value={values.phone}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            onChange={(value) => update('phone', value)}
          />
          <Field
            id={`${formId}-pickupLocation`}
            label="Pickup Location"
            required
            error={errors.pickupLocation}
            value={values.pickupLocation}
            autoComplete="off"
            onChange={(value) => update('pickupLocation', value)}
          />
          <Field
            id={`${formId}-destination`}
            label="Destination"
            required
            error={errors.destination}
            value={values.destination}
            autoComplete="off"
            onChange={(value) => update('destination', value)}
          />
          <Field
            id={`${formId}-travelDate`}
            label="Travel Date"
            required
            error={errors.travelDate}
            value={values.travelDate}
            type="date"
            min={minDate}
            onChange={(value) => update('travelDate', value)}
          />
          <div>
            <label htmlFor={`${formId}-vehicle`} className="mb-1.5 block text-xs font-semibold text-ink">
              Vehicle Required <span className="text-red-600">*</span>
            </label>
            <select
              id={`${formId}-vehicle`}
              name="vehicle"
              required
              value={values.vehicle}
              aria-invalid={Boolean(errors.vehicle)}
              aria-describedby={errors.vehicle ? `${formId}-vehicle-error` : undefined}
              onChange={(event) => update('vehicle', event.target.value)}
              className={inputClass(Boolean(errors.vehicle))}
            >
              <option value="">Select a vehicle</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicle.name}
                </option>
              ))}
            </select>
            {errors.vehicle ? <ErrorText id={`${formId}-vehicle-error`}>{errors.vehicle}</ErrorText> : null}
          </div>
        </div>

        <fieldset className="mt-1">
          <legend className="sr-only">Trip type</legend>
          <div className="flex flex-wrap gap-5">
            <Radio
              name="tripType"
              value="one-way"
              label="One Way"
              checked={values.tripType === 'one-way'}
              onChange={() => update('tripType', 'one-way')}
            />
            <Radio
              name="tripType"
              value="round-trip"
              label="Round Trip"
              checked={values.tripType === 'round-trip'}
              onChange={() => update('tripType', 'round-trip')}
            />
          </div>
          {errors.tripType ? <ErrorText>{errors.tripType}</ErrorText> : null}
        </fieldset>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-navy px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit
          </button>
        </div>
      </form>

      {success ? (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[70] w-[min(92vw,28rem)] -translate-x-1/2 rounded-xl bg-navy px-5 py-4 text-white shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-6">
              WhatsApp opened with your booking details. Review them and tap Send to submit your request.
            </p>
            <button
              type="button"
              className="shrink-0 rounded-md px-2 py-1 text-xs font-semibold text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

function inputClass(invalid: boolean) {
  return `w-full rounded-md border bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15 ${
    invalid ? 'border-red-500' : 'border-slate-200'
  }`
}

type FieldProps = {
  id: string
  label: string
  value: string
  error?: string
  required?: boolean
  type?: string
  min?: string
  inputMode?: 'tel' | 'text'
  autoComplete?: string
  onChange: (value: string) => void
}

function Field({ id, label, value, error, required, type = 'text', min, inputMode, autoComplete, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-ink">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(Boolean(error))}
      />
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  )
}

function Radio({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string
  value: string
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-ink">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-navy"
      />
      {label}
    </label>
  )
}

function ErrorText({ id, children }: { id?: string; children: string }) {
  return (
    <p id={id} className="mt-1 text-xs font-medium text-red-600" role="alert">
      {children}
    </p>
  )
}
