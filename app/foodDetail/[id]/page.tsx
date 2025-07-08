import { restaurants } from '@/Constant';
import React from 'react'

type FoodProps = {
  params: {
    id: string;
  };
};

const FoodDetail = ({ params }: FoodProps) => {
 const { id } = params;

  const product = restaurants.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="p-6 text-red-500 font-bold">
        Product not found for ID: {id}
      </div>
    );
  }

 console.log("given id ",id)
 console.log("products ",product)

  if (!product) {
    return (
      <div className="p-6 text-red-500 font-bold">
        Product not found for ID: {id}
      </div>
    );
  }
     
  return (
    <div className='mt-52'>
      {product.foods.map((val,i)=>(
        <div key={i} className="">{val.name}</div>
      ))}
    </div>
  )
}

export default FoodDetail