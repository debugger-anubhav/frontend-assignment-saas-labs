import React, { useState } from "react";

import "./App.css";
import { useFetchData } from "./hooks/useCrowdFundingData";
import CrowdFund from "./components/CrowdFund";
import Paginator from "./components/Paginator";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { crowdFundingData, loading } = useFetchData();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentPageData = crowdFundingData.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <main role="main" className="primary-wrapper">
      {loading ? (
        <p role="status" aria-live="polite">
          Loading...
        </p>
      ) : crowdFundingData.length > 0 ? (
        <div className="container">
          <h2 className="sr-only">Crowdfunding data</h2>
          <table
            data-testidid="fund-data-table"
            className="content-table"
            aria-label="Crowdfunding data"
          >
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Percentage funded</th>
                <th scope="col">Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((data) => (
                <CrowdFund key={data["s.no"]} data={data} />
              ))}
            </tbody>
          </table>

          <Paginator
            currentPage={currentPage}
            totalPages={Math.ceil(crowdFundingData.length / 5)}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p role="status" aria-live="polite">
          No data found
        </p>
      )}
    </main>
  );
}

export default App;
