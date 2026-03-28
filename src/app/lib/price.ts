export function formatChf(amount: number) {
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)} CHF`;
}

export function parseAmountFromPrice(price: string) {
  const normalized = price.replace(/[^\d,.-]/g, "").replace(",", ".");
  return Number.parseFloat(normalized) || 0;
}
