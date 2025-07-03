export async function fetchRestaurants() {
  // Simulate fetching from an API
  return fetch('/api/restaurants')
    .then((res) => res.json())
    .catch(() => []);
}

export async function fetchCategories() {
  return fetch('/api/categories')
    .then((res) => res.json())
    .catch(() => []);
}
