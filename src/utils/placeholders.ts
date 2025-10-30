export const placeholders = ['/placeholder.jpg', '/placeholder2.jpg', '/placeholder3.jpg']

let _counter = 0

export function nextPlaceholder() {
  const p = placeholders[_counter % placeholders.length]
  _counter += 1
  return p
}

export function placeholderFor(index: number) {
  return placeholders[index % placeholders.length]
}
