// const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

// async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 8000) {
//   return Promise.race([
//     fetch(url, options),
//     new Promise<Response>((_, reject) =>
//       setTimeout(() => reject(new Error("Request timed out")), timeout)
//     ),
//   ]) as Promise<Response>;
// }

// export async function getRestaurants() {
//   const res = await fetchWithTimeout(`${baseUrl}/all`, { cache: "no-store" });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(`Failed to fetch restaurants: ${res.status} ${res.statusText} - ${errorText}`);
//   }

//   return res.json();
// }

// export async function getRestaurantById(id: string) {
//   const res = await fetchWithTimeout(`${baseUrl}/restaurant/${id}`, { cache: "no-store" });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(`Failed to fetch restaurant ${id}: ${res.status} ${res.statusText} - ${errorText}`);
//   }

//   return res.json();
// }
