import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(),
  };
});

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /jest/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
