import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import RestaurantCard from "@/components/Card";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("RestaurantCard", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  const restaurantMock = {
    id: "123",
    imageUrl: "/some-image.jpg",
    discountPercent: 20,
    deliveryTime: "30 mins",
    restaurantName: "Testaurant",
    location: "Dhaka",
    cuisine: "Bangladeshi",
    deliveryFee: 50,
    distance: 2.5,
    rating: 4.8,
  };

  it("renders restaurant card with data", () => {
    render(<RestaurantCard restaurant={restaurantMock} />);

    expect(screen.getByTestId("restaurant-card")).toBeInTheDocument();
    expect(screen.getByText(/Testaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/Up to 20% off/i)).toBeInTheDocument();
    expect(screen.getByText(/30 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/Bangladeshi/i)).toBeInTheDocument();
    expect(screen.getByText(/50 tk/i)).toBeInTheDocument();
    expect(screen.getByText(/4.8/i)).toBeInTheDocument();
  });

  it("navigates to food detail on click", () => {
    render(<RestaurantCard restaurant={restaurantMock} />);
    fireEvent.click(screen.getByTestId("restaurant-card"));
    expect(mockPush).toHaveBeenCalledWith("/foodDetail/123");
  });
});
