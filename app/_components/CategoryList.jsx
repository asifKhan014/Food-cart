"use client";
import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const CategoryList = () => {
  const listRef = useRef(null);
  const [categoryList, setCategoriesList] = useState([]);
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(()=>{
    setSelectedCategory(params.get('category'));
  },[params])

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.GetCategory()
      .then((res) => {
        console.log(res.categories);
        setCategoriesList(res.categories);
      })
      .catch((error) => {
        console.error("Error fetching category list:", error);
      });
  };

  const ScrollRightHandler=()=>{
    if (listRef.current){
      listRef.current.scrollBy({
        left:200,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className="relative mt-10 ">
      <div  className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={'?category='+category.slug}
              key={index}
              className={`flex flex-col gap-2 p-3 items-center border rounded-xl min-w-28
            hover:border-primary hover:bg-orange-50 cursor-pointer group
            ${selectedCategory == category.slug&&'border-primary text-primary bg-orange-50'}
            `}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                height={40}
                width={40}
                className="group-hover:scale-125 transition-all duration-200"
              />
              <h2 className="text-sm font-medium group-hover:text-primary ">{category.name}</h2>
            </Link>
          ))}
      </div>
      <ArrowRightCircle className="absolute -right-10 top-9 w-8 h-8 bg-gray-500 rounded-full text-white cursor-pointer" onClick={()=> ScrollRightHandler()}/>
    </div>
  );
};

export default CategoryList;
