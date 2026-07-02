export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{2})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('ar-EG').format(value);
}
