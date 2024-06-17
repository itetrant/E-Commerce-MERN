import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';

import productCategory from '../helpers/productCategory';

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      {productCategory.map((category, index) => {
        if (index < 2) {
          return (
            <HorizontalCardProduct 
              key={category.id}
              category={category.value} 
              heading={`Top's ${category.value}`}
            />
          );
        } else {
          return (
            <VerticalCardProduct 
              key={category.id}
              category={category.value} 
              heading={category.value}
            />
          );
        }
      })}
    </div>
  );
}

export default Home;
