import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition hover:shadow-xl">
      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{blog.summary}</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <span>{blog.category}</span> · <span>{blog.date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
