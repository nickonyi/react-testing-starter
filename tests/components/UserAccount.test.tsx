import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Nick" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render the edit button if user is admin", () => {
    const user: User = { id: 1, name: "Nick", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
});
