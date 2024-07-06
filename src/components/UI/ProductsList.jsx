import React from 'react';
import ProductsCard from './ProductsCard';
const ProductsList = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <ProductsCard key={index}  item={item}/>
                )
            })}

           
        </>
    );
}

export default ProductsList;
