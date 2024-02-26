
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const NotFound = () => {
  const [randomMeme, setRandomMeme] = useState(null);

  useEffect(() => {
    fetchRandomMeme();
  }, []);

  const fetchRandomMeme = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const selectedMeme = memes[randomIndex];
      setRandomMeme(selectedMeme);
    } catch (error) {
      console.error('Error fetching random meme:', error);
    }
  };

  return (
    <div className="w-11/12 mx-auto text-center">
    <h1 className="text-2xl">Random Meme Page</h1>
      {randomMeme && (
          <div>
          <img src={randomMeme.url} alt="Random Meme" width={400} height={400} className='mx-auto'/>
        </div>
      )}
      <h1>404 - Page Not Found</h1>
      <Link className=" text-xl hover:text-blue-600" href="/">- Go To Home Page</Link>
    </div>
  );
};

export default NotFound;
