import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl mb-4">All Category</h2>
            {
                categories.map(category => <NavLink
                    className="block text-xl font-semibold pl-4 mb-2"
                    key={category.id}
                    to={`category/${category.id}`}>
                    {category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;