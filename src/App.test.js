//Write a test that mock fetches data from the GitHub API
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";

//Resets everything to initial state before running test
beforeEach(() => {
  fetch.resetMocks();
});

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
  fetch.mockResponseOnce(JSON.stringify({ name: "Omar Moreta" }));
  render(<App />);
  const gitHubName = await waitFor(() =>
    screen.getByRole("heading", { level: 2 })
  );
  expect(gitHubName).toHaveTextContent("Omar Moreta");
});

test("receives GitHub profile URL from GH API", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({ html_url: "https://github.com/omarmoreta" })
  );
  render(<App />);
  const gitHubLink = await waitFor(() => screen.getByRole("link"));
  expect(gitHubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com/omarmoreta")
  );
});

test("receives GitHub profile Image URL from GH API", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      avatar_url: "https://avatars.githubusercontent.com/u/88066217?v=4",
    })
  );
  render(<App />);
  const gitHubURL = await waitFor(() => screen.getByRole("img"));
  expect(gitHubURL).toHaveAttribute("src", expect.stringContaining("avatars"));
});
