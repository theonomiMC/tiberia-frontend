import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";
import Posts from "../../components/Posts/Posts";
import Loader from "../../components/Loader";
import Footer from '../../components/footer/Footer'
const LazyDashboard = lazy(() => import("../../components/dashboard/Dashboard"));

const Home = () => {
  const { SERVER } = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  let { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`${SERVER}/api/posts${search}`);
      setPosts(data);
    };
    fetchPosts();
  }, [search, SERVER]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <LazyDashboard posts={posts} />
        <Posts posts={posts} search={search} />
        <Footer />
      </Suspense>

    </>
  )
}

export default Home
