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

  return loading ? (
    <p>Loading...</p>
  ) : crowdFundingData.length > 0 ? (
    <div className="container">
      <table className="content-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
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
    <p>No data found</p>
  );
}

export default App;
