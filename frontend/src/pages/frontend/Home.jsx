import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedBanner from './components/FeaturedBanner';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/blogs')
      .then(res => setBlogs(res.data));

    axios.get('http://localhost:8000/api/categories')
      .then(res => setCategories(res.data));
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory ? blog.category === selectedCategory : true)
  );

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Latest Blogs</h2>
        <ThemeToggle />
      </div>

      <FeaturedBanner blogs={blogs.slice(0, 3)} />

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="row">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="col-md-4">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
