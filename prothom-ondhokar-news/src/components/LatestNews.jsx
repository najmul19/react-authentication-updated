import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { data, Link, useNavigate } from "react-router-dom";

const LatestNews = () => {
    const [allNews,setAllNews] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
          .then((res) => res.json())
          .then((data) => setAllNews(data.data));
      }, []);
      const navigate = useNavigate()
    return (
        <div className="flex gap-2 items-center bg-base-300 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                {allNews.map(news=> <Link className="hover:bg-gray-300 p-2 hover:rounded-full" key={news._id} to={`/news/${news._id}`}>{news.title}</Link> )}
            </Marquee>
        </div>
    );
};

export default LatestNews;