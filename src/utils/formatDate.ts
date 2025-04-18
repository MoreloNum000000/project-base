export function formatDate(date: string | Date, locale = 'es-CO') {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  }
  