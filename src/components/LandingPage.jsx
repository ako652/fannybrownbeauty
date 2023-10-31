import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-white mt-10">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg goldColor">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl golden-base golden1">
              Extensions-Wigs-Haircare
            </h1>
            <p className="mt-4 text-xl text-gray-500 golden-base golden1">
              The ultimate destination for your hair needs. We're positive you will love the quality of our products and the way they make you feel. Thank you for trusting us!
            </p>
          </div>
          <div>
            <div className="mt-10">
          
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/image_77b68338-8402-4964-8946-2d6c7e59cfd7_250x.png?v=1669943546"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/image_1739f798-bf9a-44c2-863e-3b95031e0d11_250x.jpg?v=1641587719"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/pixelcut_24_1200x.png?v=1660841387"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/files/2850DC0D-73E7-4509-9178-DFF97051E071_1000x.progressive.png.jpg?v=1679502028"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/image_0848a0b6-49f9-4e1e-8f90-f942bafb0a9f_250x.png?v=1666625037"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/image_7fe035c3-b4d5-4221-8009-5300ff5f71f0_250x.png?v=1666550189"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://allvirginhair.com/cdn/shop/products/Attachment_1587488786_250x.jpg?v=1667335194"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="inline-block rounded-md border border-transparent bg-stone-900 px-8 py-3 ml-10 text-center font-medium text-white hover:bg-indigo-700"
              >
                <Link to="/products">
                Shop Collection
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
