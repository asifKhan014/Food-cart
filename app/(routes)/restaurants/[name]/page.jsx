"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Intro from "../_components/Intro";

const RestaurantDetail = () => {
  const pathname = usePathname();
  const params = useParams();
  const [url, setUrl] = useState();
  useEffect(() => {
    console.log(pathname.split("/")[2]);
    console.log(params);
  });
  return <div>
    <Intro/>
  </div>;
};

export default RestaurantDetail;
