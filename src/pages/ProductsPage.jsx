import React from 'react'
import { Link } from 'react-router-dom'
const products = [
  {
    id: 1,
    name: 'KINKY CURLY PONYTAIL',
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_1486b729-62fe-4d9e-b731-f6506e08e040.png?v=1666657975',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'TIGHT CURL',
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_0058eb89-55d4-450c-9b92-2a1e7944b40d.png?v=1666551128',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'AMAZON STRAIGHT CLIP INS (SEAMLES)',
    
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_6e09bc15-d166-4954-bd25-d9982bd01c91.png?v=1667318397',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'BOUNCE',
  
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_0848a0b6-49f9-4e1e-8f90-f942bafb0a9f.png?v=1666625037',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 5,
    name: 'WATER WAVE',
  
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_9d56f71d-e1c4-4238-983d-551824a7322c.png?v=1666621095',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
    {
    id: 6,
    name: 'LIGHT BLONDE OMBRE STRAIGHT',
  
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/99D3A8F1-3A1F-444D-B6CF-C0C50B009C2B.png?v=1666632413',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
     {
    id: 7,
    name: 'BALAYAGE HIGHLIGHT WAVY',
  
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_1a9ce394-f6a0-435f-9a89-dd0b9a7c8f50.jpg?v=1671483355',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
     {
    id: 8,
    name: 'LIGHT BROWN DARK BROWN 1B OMBRE WAVY',
  
    imageSrc: 'https://allvirginhair.com/cdn/shop/products/image_c60fd672-5d1e-4558-9228-a7cb33f57808.jpg?v=1671480355',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
export default function ProductsPage() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
          <h2 className='goldColor'>NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group  border-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-center text-sm text-gray-700">{product.name}</h3>
              <button
                className="inline-block rounded-md border border-transparent bg-stone-900 px-8 py-3 ml-10 text-center font-medium text-white hover:bg-indigo-700"
              >
                <Link to="/contact">
                contact me               
                 </Link>
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
