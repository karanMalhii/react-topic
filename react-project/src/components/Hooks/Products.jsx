import React from 'react'

export default function Products({data}) {
    console.log({data})
  return (
    <div className='product-card' key={Products.id}>
    <div className='product-section'>
    <div>
        <h4 className='product-title'>{Products.title}</h4>
        <p className='product-brand'>{Products.brand}</p>
        <p className='product-price'>{Products.price}</p>
      </div>
      <div>
        <img src="{product.thumbnail}" width="{100}" />
      </div>
    </div>
    <h4>Gallary</h4>
    <div className='product-gallary'>
        {Products.images.map(function(image,index){
            return(
                <img src={image} height={60} key={index}/>
            );
        })}
    </div>
    </div>
  )
}
