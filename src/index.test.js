import { shallow } from "enzyme";
import { Overlay, Guide, Step } from "./";

describe("package", () => {
  it("exports Guide", () => {
    expect(Guide).toBeTruthy();
  });

  it("exports Step", () => {
    expect(Step).toBeTruthy();
  });

  it("exports Overlay", () => {
    expect(Overlay).toBeTruthy();
  });
});


