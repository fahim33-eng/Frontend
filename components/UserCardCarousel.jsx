import React from 'react';
import Slider from 'react-slick';
import Carousel from 'react-elastic-carousel'
import UserCard from './UserCard';

const UserCardCarousel = () => {
  const users = [
    {
      id : 1,
      userName: "John Doe",
      text: "'Very Nice Website. extending to check something'",
      image: '/surgeon.jpg',
    },
    {
      id : 2,
      userName: "John Smilga",
      text: "'Very Helpful website. Helped Me a lot'",
      image: '/surgeon.jpg',
    },
    {
      id : 3,
      userName: "Peter Hanks",
      text: "'Some Random double line Comment to check'",
      image: '/surgeon.jpg',
    },
    {
      id : 4,
      userName: "Tom Hanks",
      text: "'Some Random double line Comment to check'",
      image: '/surgeon.jpg',
    },
  ];

  return (
    <div className='flex space-x-4'>
      { users.map(user => <UserCard key={user.id} username={user.userName} text={user.text} image={user.image}/>) }
    </div>
  );
};

export default UserCardCarousel;
