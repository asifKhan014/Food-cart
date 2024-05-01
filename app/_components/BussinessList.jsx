import React from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from "./BusinessItem";
import BusinessItemSkeleton from "./BusinessItemSkeleton";

const BussinessList = () => {
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    params && setCategory(params.get("category"));
    params && getBusinessList(params.get("category"));
  }, [params]);

  function getBusinessList(_category) {
    setLoading(true);
    GlobalApi.GetBusiness(_category).then((res) => {
      console.log(res);
      setBusinessList(res?.restaurants);
      setLoading(false);
    });
  }
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h2 className="font-bold text-primary">{businessList?.length} Results</h2>
      <div
        className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-7 mt-3
      "
      >
        {!loading? (businessList.map((restaurants, index) => (
          <BusinessItem key={index} business={restaurants} />
        ))):(
          
            [1,2,3,4,5,6,7,8].map((item,index)=>(
              <BusinessItemSkeleton />
            ))
          
        )
        }
      </div>
    </div>
  );
};

export default BussinessList;
