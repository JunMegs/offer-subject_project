export function toggleFilter (selectedFilters, sub) {
  const idx = selectedFilters.indexOf(sub);
  if (idx === -1) {
    selectedFilters.push(sub);
  } else {
    selectedFilters.splice(idx, 1);
  }
}
