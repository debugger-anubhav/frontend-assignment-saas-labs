import { useState, useEffect } from "react";
import { CrowdFunding } from "../schema/types";

export const useFetchData = () => {
  const [crowdFundingData, setCrowdFundingData] = useState<CrowdFunding[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    )
      .then((res) => res.json())
      .then((res: CrowdFunding[]) => {
        setLoading(false);
        setCrowdFundingData(res);
      });
  }, []);

  return { crowdFundingData, loading };
};
