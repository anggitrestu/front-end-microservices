import React from 'react';
import Link from 'next/link';
import RenderItem from './RenderItem';
import IconBusiness from 'public/images/icon-business-development.svg';
import IconContentWritter from 'public/images/icon-content-writter.svg';
import IconGameDevelopment from 'public/images/icon-game-development.svg';
import IconProductAdvertisement from 'public/images/icon-product-advertisement.svg';
import IconCustomer from 'public/images/icon-customer.svg';
import IconTravelGuidance from 'public/images/icon-travel-guidance.svg';
export default function index() {
  const data = [
    {
      imageName: <IconBusiness />,
      name: 'Business Development',
      total: 12493,
    },
    {
      imageName: <IconContentWritter />,
      name: 'Content Writter',
      total: 665,
    },
    {
      imageName: <IconGameDevelopment />,
      name: 'Game Development',
      total: 818,
    },
    {
      imageName: <IconProductAdvertisement />,
      name: 'Product Advertisement',
      total: 998,
    },
    {
      imageName: <IconCustomer />,
      name: 'Customer Relationship',
      total: 769,
    },
    {
      imageName: <IconTravelGuidance />,
      name: 'Travel Guidance',
      total: 456,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Categories</h2>
          <h3 className="text-xl text-gray-900">
            Explore & <span className="text-teal">Learn</span>
          </h3>
        </div>
      </div>
      <div className="justify-start flex items-centers -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
