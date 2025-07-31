import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "@/components/Modal";

describe("Modal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    header: "Test Header",
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does not render when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Test Header")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("renders correctly when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Test Header")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking outside the modal content", () => {
    render(<Modal {...defaultProps} />);
    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("does not call onClose when clicking inside the modal content", () => {
    render(<Modal {...defaultProps} />);
    const modalBox = screen.getByTestId("modal-box");
    fireEvent.click(modalBox);
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it("calls onClose when clicking the close button", () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
