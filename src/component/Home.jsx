import React from 'react'
import { Carousel } from 'antd';

export default function Home() {

  const contentStyle = {
    height: '60vh',
    textAlign: 'center',
    width: '100vw',
    fit: "contain"
  };
  return (
    <Carousel autoplay >
    <div>
      <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
    </div>
    <div>
    <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
    </div>
    <div>
    <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
    </div>
    <div>
    <img style={contentStyle} src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
    </div>
  </Carousel>
  )
}
