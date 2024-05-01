'use client'
import { Button } from "@/components/ui/button";
import CategoryList from "./_components/CategoryList";
import BussinessList from "./_components/BussinessList";


export default function Home() {

  
  return (
    <div>
      <CategoryList/>
      <BussinessList/>
    </div>
  );
}
