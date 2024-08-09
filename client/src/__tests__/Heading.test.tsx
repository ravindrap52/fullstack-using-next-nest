import { render } from "@testing-library/react";
import { Heading } from "@/components/Heading";
import "@testing-library/jest-dom";

describe("Heading", () => {
  it("should contain h6 tag", () => {
    const { container } = render(<Heading text="test" />);
    expect(container.getElementsByTagName("h6")).toBeTruthy();
  });
  it("should contain b tag", () => {
    const { container } = render(<Heading text="test" />);
    expect(container.getElementsByTagName("b")).toBeTruthy();
  });
  it("should render the passed text", () => {
    const { container } = render(<Heading text="test" />);
    expect(container.textContent).toBe("test");
  });
});
