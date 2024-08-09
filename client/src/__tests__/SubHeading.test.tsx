import { render, screen } from "@testing-library/react";
import { SubHeading } from "@/components/SubHeading";
import "@testing-library/jest-dom";

describe("SubHeading", () => {
  it("should contain h4 tag", () => {
    render(<SubHeading text="test" />);
    const [h4] = screen.getAllByTestId('subHeading');
    console.log(h4);
    expect(h4).toBeInTheDocument();
  });
  it("should render the passed text", () => {
    const { container } = render(<SubHeading text="test" />);
    expect(container.textContent).toBe("test");
  });
});
