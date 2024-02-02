import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
    return (
        <div>
            <div className="bg-slate-200 p-4">
                <div className="flex gap-5 items-center ">
                    <div>
                        <img className="rounded-full h-10  w-10" src={singleNews.author.img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold"> {singleNews.author.name}</h3>
                        <h3 className="text-sm">{singleNews.author.published_date}</h3>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="p-4 space-y-4">
                <h1 className="text-xl font-semibold">{singleNews.title}</h1>
                <img src={singleNews.image_url} alt="" />
                {
                    singleNews.details >200 ? <Link to={`/news/${singleNews._id}`}>{singleNews.details.slice(0,200)} <span className="text-blue-600">read more...</span></Link>
                    : <Link to={`/news/${singleNews._id}`}>{singleNews.details} <span className="text-blue-600">read more...</span></Link>
                }
            </div>
        </div>
    );
};

export default NewsCard;