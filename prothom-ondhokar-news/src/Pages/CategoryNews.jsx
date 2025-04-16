import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="font-semibold mb-3">Prhothom Ondhokar News</h2>
            <p className="text-gray-400 text-sm">{news.length} News found in this category</p>
            <div>
                {
                    news.map(sNews=> <NewsCard key={sNews._id} news={sNews} ></NewsCard> )
                }
            </div>
        </div>
    );
};

export default CategoryNews;