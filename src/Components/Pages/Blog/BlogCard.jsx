import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, description, image, date,id }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Card Image */}
      <img  src={image} alt="alt" className="h-48 w-full object-cover" />

      {/* Card Content */}
      <div className="p-4">
      <Link to={`/blog/${id}`}>
        <h2 className="hover:underline text-white text-2xl font-bold mb-2">{title}</h2>
      </Link>
        <p className="text-gray-400 text-base mb-4">{description}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
