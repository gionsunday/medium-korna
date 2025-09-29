export function truncateText(str, length = 140) {
  if (!str) return '';
  return str.length > length ? str.slice(0, length) + '…' : str;
}
