import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({news}) => {
  return (
    <div className="card  bg-base-100 shadow-xl mb-6 p-5" >
      <div className="flex items-center justify-between  ">
        <div className="flex items-center gap-2">
          <div className="w-10 rounded-full">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="rounded-full w-10 h-10"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.pub}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-600" />
      </div>

    <h2 className='text-xl font-semibold mb-2'>{news.title}</h2>


      <figure className=" pt-4">
        <img
          src={news.thumbnail_url}
          alt="News Thumbnail"
          className="rounded-lg w-full h-80 object-cover mb-4"
        />
      </figure>

      <div className="card-body">
        
        <p className="text-sm text-gray-600">
         {news.details.slice(0,150)}...{" "}
         <span><a href="#" className="text-red-500 text-sm font-semibold">Read More</a></span>
        </p>
        
        

        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
