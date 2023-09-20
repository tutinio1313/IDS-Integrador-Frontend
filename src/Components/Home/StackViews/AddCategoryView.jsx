import {React, useState, useEffect} from 'react';
import GetCategory from "/src/Logic/Home/GetCategory.js";

export default function AddCategoryView() {

  const [category, setCategory] = useState(undefined);
  useEffect(() => {
    if (category === undefined) {
      LoadCategories();
    }
  }, [category]);
  async function LoadCategories() {
    const categoryResult = await GetCategory();
    setCategory(categoryResult);
  }

  return (
    <div className = "mt-2">
    {category?.map((category) => {
        if (category !== undefined) {
          return (
            <h2
              className = " text-center"
              key={category?.idCategory}
            >
              {category?.name}
            </h2>
          );
        }
      })}
      </div>
  )
}
