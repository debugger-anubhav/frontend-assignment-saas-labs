import React from "react";
import { CrowdFunding } from "../schema/types";

const CrowdFund = ({ data }: { data: CrowdFunding }) => {
  const {
    "s.no": sNo,
    "amt.pledged": amountPledged,
    "percentage.funded": percentageFunded,
  } = data;
  return (
    <tr>
      <td>{sNo}</td>
      <td>{percentageFunded}</td>
      <td>{amountPledged}</td>
    </tr>
  );
};

export default CrowdFund;
