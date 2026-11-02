// Contact config. Fill these in, then rebuild.
//
// Email and phone are stored as pieces and only joined in the browser after a click,
// so neither ever appears as plain text or in a mailto:/sms: href in the served HTML.

// CONTACT_EMAIL: [name, domain]
export const CONTACT_EMAIL: [string, string] = ['robfiasco', 'gmail.com'];

// CONTACT_PHONE: US number as [area code, prefix, line], e.g. ['716', '555', '0123'].
// Leave empty strings to hide the "Text me" button.
export const CONTACT_PHONE: [string, string, string] = ['281', '785', '7760'];

// BOOKING_URL: Google Calendar appointment schedule link (adds a Google Meet link automatically).
// While empty, booking buttons fall back to the contact section.
export const BOOKING_URL = '';

export const BOOKING_LABEL = 'Book a free 30-min chat';
export const BOOKING_NOTE = 'Meet on Google Meet, or grab a coffee in Jamestown.';

export const bookingHref = BOOKING_URL || '#contact';
export const bookingIsExternal = BOOKING_URL.startsWith('http');

export const hasPhone = CONTACT_PHONE.every((part) => part.length > 0);

export function assembleEmail() {
  return CONTACT_EMAIL.join('@');
}

export function assemblePhone() {
  const [area, prefix, line] = CONTACT_PHONE;
  return { display: `(${area}) ${prefix}-${line}`, href: `+1${area}${prefix}${line}` };
}
