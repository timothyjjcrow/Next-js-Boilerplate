import React from 'react';

import { ParallaxBanner } from 'react-scroll-parallax';

const Index = () => {
  // const train = useParallax({
  //   speed: 50,
  //   targetElement: target.current,
  // });
  // const train2 = useParallax({
  //   speed: 150,
  //   targetElement: target.current,
  // });
  // const train3 = useParallax({
  //   speed: 200,
  //   targetElement: target.current,
  // });
  // const train4= useParallax({
  //   speed: 250,
  //   targetElement: target.current,
  // });
  // const train5= useParallax({
  //   speed: 300,
  //   targetElement: target.current,
  // });
  // const train6= useParallax({
  //   speed: 350,
  //   targetElement: target.current,
  // });
  // const cloud = useParallax({
  //   speed: 400,
  //   targetElement: target.current,
  // });
  // const cloud1 = useParallax({
  //   speed: 500,
  //   targetElement: target.current,
  // });
  // const cloud2 = useParallax({
  //   speed: 600,
  //   targetElement: target.current,
  // });
  // const cloud3 = useParallax({
  //   speed: 700,
  //   targetElement: target.current,
  // });

  return (
    <ParallaxBanner
      layers={[
        {
          image: '/123.jpeg',
          amount: 1,
          expanded: true,
          style: { height: '2000px' },
        },
        {
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl text-white ">Hello World!</h1>
            </div>
          ),
          speed: -60,
          style: { marginTop: '1100px', height: '1000px' },
        },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl text-red ">Hello World!</h1>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1]"
      style={{ height: '2000px' }}
    />

    // <div
    //   ref={target}
    //   className="v-screen flex flex-col items-center justify-center"
    //   style={{
    //     backgroundImage: "url('/123.jpeg')",
    //     backgroundSize: "auto 2000px",
    //     backgroundPosition: "center",
    //     width: '100vw',
    //     height: '2000px',
    //   }}
    // >
    //   <div className="fixed top-1 left-40">
    //   <div ref={train.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-6 py-3 rounded-lg shadow-lg">Timothy James Crowley</h1>
    //   </div>
    //   </div>
    //   <div ref={train2.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-20 py-3 rounded-lg shadow-lg">I</h1>
    //   </div>
    //   <div ref={train3.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-20 py-3 rounded-lg shadow-lg">Create</h1>
    //   </div>
    //   <div ref={train4.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-20 py-3 rounded-lg shadow-lg">Modern</h1>
    //   </div>
    //   <div ref={train5.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-20 py-3 rounded-lg shadow-lg">Web</h1>
    //   </div>
    //   <div ref={train6.ref} >
    //     <h1 className="text-4xl text-white bg-black-500 px-20 py-3 rounded-lg shadow-lg">Sites</h1>
    //   </div>

    //   <div ref={cloud.ref} className="flex items-center justify-center flex-grow">
    //     <h1 className="text-4xl text-white bg-black-500 px-6 py-3 rounded-lg shadow-lg">Hello</h1>
    //   </div>
    //   <div ref={cloud1.ref} className="flex items-center justify-center flex-grow">
    //     <h1 className="text-4xl text-white bg-black-500 px-6 py-3 rounded-lg shadow-lg">Hello</h1>
    //   </div>
    //   <div ref={cloud2.ref} className="flex items-center justify-center flex-grow">
    //     <h1 className="text-4xl text-white bg-black-500 px-6 py-3 rounded-lg shadow-lg">Hello</h1>
    //   </div>
    //   <div ref={cloud3.ref} className="flex items-center justify-center flex-grow">
    //     <h1 className="text-4xl text-white bg-black-500 px-6 py-3 rounded-lg shadow-lg">Hello</h1>
    //   </div>
    // </div>
  );
};

export default Index;
