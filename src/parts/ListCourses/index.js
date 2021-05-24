import React from 'react';
import Link from 'next/link';
import RenderItem from './RenderItem';

export default function index({ data }) {
  const items = data.data;

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">New Classes</h2>
          <h3 className="text-xl text-gray-900">
            Summer <span className="text-teal">Productive</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 text-sm hover:underline">
              View All Courses
            </a>
          </Link>
        </div>
      </div>
      <div className="justify-start flex items-centers -mx-4 mt-6">
        {items?.length > 0 ? (
          items.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
