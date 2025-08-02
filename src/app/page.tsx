"use-client";

import { SliderItem } from "@/components/widgets/slider-item";
import { useState } from "react";

export default function Home() {

  const [itemActive, setItemActive] = useState<number>(1);
  const countItem = 5;

  return <div className="relative h-screen">
    <ul>
      <SliderItem 
        itemActive={itemActive} 
        id={1} 
        image={"/imagenes/boda.jpeg"} 
        brand={"Bodas"} 
        name={"flor de azúcar"} 
        desc={"descripción de arreglo de boda"}
      />
    </ul>
  </div>;
}
