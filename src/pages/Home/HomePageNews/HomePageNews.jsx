
import { useEffect } from 'react';
import { useState } from 'react';
import NewsCard from './NewsCard';
import { useLoaderData } from 'react-router-dom';

const HomePageNews = () => {
   const news = useLoaderData();
    return (
        <div className='border'>
            <h2 className='text-2xl font-semibold'>News Home</h2>
            {
                news.map(singleNews => <NewsCard singleNews={singleNews}  key={singleNews.id}></NewsCard>)
            }
        </div>
    );
};

export default HomePageNews;