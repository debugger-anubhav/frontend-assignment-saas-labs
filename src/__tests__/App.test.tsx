import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import React from "react";

const mockUseFetchData = jest.fn();

jest.mock("../hooks/useCrowdFundingData", () => ({
  __esModule: true,
  useFetchData: () => mockUseFetchData(),
}));

describe("App", () => {
  it("renders correctly when no data is found", async () => {
    mockUseFetchData.mockResolvedValue({
      loading: false,
      crowdFundingData: [],
    });
    render(<App />);

    await waitFor(() => screen.getByText("No data found"));

    expect(screen.getByText("No data found")).toBeInTheDocument();
  });

  it("renders correctly when fund data is available", () => {
    mockUseFetchData.mockResolvedValue({
      loading: false,
      crowdFundingData: [
        {
          "s.no": 1,
          "amt.pledged": 100,
          blurb: "blurb-url",
          by: "author",
          country: "India",
          currency: "INR",
          "end.time": "end-time",
          location: "mumbai",
          "percentage.funded": 20,
          "num.backers": 10,
          state: "MH",
          title: "title",
          type: "type",
          url: "url-of-the-link",
        },
      ],
    });

    expect(screen.getByTestId("fund-data-table")).toBeInTheDocument();
  });
});
