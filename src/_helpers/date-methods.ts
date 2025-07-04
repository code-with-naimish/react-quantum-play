export function convertYYYYMMDDtoDate(inputDate?: string) {
  if (!inputDate || inputDate?.trim().length === 0) {
    return null
  }
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

