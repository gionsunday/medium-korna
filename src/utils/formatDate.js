export function formatDate(input) {
  const d = new Date(input);
  if (isNaN(d)) return input;
  const now = new Date();
  const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return '1d ago';
  return `${diffDays}d ago`;
}
