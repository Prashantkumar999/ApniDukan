import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);

    }
    catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
      <div className='flex flex-wrap justify-center bg-white md:max-w-[80%] mx-auto md:justify-evenly gap-10 md:pt-28 md:pb-10 pt-20 pb-4'>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <Product key={post.id} post={post} />
        ))
      ) : (
        <div>No data found</div> 
      )}
    </div>
  );
};

export default Home;
