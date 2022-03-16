/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel } from 'antd';

export default function Home() {
  const contentStyle = {
    height: '60vh',
    textAlign: 'center',
    width: '100vw',
    fit: 'contain',
  };

  const contentStyle1 = {
    height: '60vh',
    textAlign: 'center',
    width: '90vw',
    fit: 'contain',
  };
  return (
    <><Carousel autoplay>
      <div>
        <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      </div>
      <div>
        <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      </div>
      <div>
        <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      </div>
      <div>
        <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      </div>
    </Carousel>
    <Carousel autoplay>
        <div>
          <img style={contentStyle1} src="https://images.unsplash.com/photo-1577746838851-816a43ca8733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img style={contentStyle1} src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img style={contentStyle1} src="https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <img style={contentStyle1} src="https://media.istockphoto.com/photos/music-player-on-mobile-phone-with-earphones-picture-id1297013252?b=1&k=20&m=1297013252&s=170667a&w=0&h=kIcnt5oOf2pIckUcWtrqzxbVh85yo9s3Q1QLJjSFseY=" />
        </div>
      </Carousel></>
  )
}
