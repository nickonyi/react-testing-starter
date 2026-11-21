import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  it("should render no users when the user array is empty", () => {
    render(<UserList users={[]} />);
  });
});
