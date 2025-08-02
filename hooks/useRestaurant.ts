import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

// getting all Restaurant
export function useRestaurant() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/all`,
    fetcher
  );

  return {
    restaurants: data,
    isLoading,
    isError: error,
  };
}

// getting single Restaurant by id
export function useRestaurantById(id?: string) {
  const shouldFetch = Boolean(id);
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/restaurant/${id}` : null,
    fetcher
  );

  return {
    restaurant: data,
    isLoading,
    isError: error,
  };
}
