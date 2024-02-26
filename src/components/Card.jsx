import React from 'react';
import Image from 'next/image';
const Card = ({ heading, description, thumbnail }) => {
    console.log(thumbnail)
  return (
    <div className="border-2 bg-indigo-300 w-11/12 my-2 m-auto text-center">
      <h2>Heading - {heading}</h2>
      <p>Description- {description}</p>
      <Image className="m-auto" src={thumbnail} alt={"nother"} width={500}
      height={500}/>
    </div>
  );
};

export default Card;
