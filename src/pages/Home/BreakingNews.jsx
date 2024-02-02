import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary mr-2">Latest</button>
            <Marquee>
               <Link className="m-4"> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="m-4"> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="m-4"> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;