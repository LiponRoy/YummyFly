const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getRestaurants() {
  const res = await fetch(`${baseUrl}/all`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getRestaurantById(id: string) {
  const res = await fetch(`${baseUrl}/restaurant/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }

  return res.json();
}
