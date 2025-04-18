export function formatNumber(value: number, locales = 'es-CO', currency = 'COP') {
    return new Intl.NumberFormat(locales, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(value);
  }
  