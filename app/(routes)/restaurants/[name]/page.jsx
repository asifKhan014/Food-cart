"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurantDetail = () => {
  const pathname = usePathname();
  const params = useParams();
  const [url, setUrl] = useState();
  useEffect(() => {
    console.log(pathname.split("/")[2]);
    console.log(params);
  });
  return <div></div>;
};

export default RestaurantDetail;
