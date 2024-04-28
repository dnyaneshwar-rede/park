import React from "react";

const Features = () => {
  return (
    <section id="feature" className="px-10 py-20">
      <div className="title-text">
        <p>Features</p>
        <h1>Why Choose Us</h1>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[60%] flex flex-col justify-start gap-12">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-3xl text-[#eca3f5]">Reliable parking</h1>
            <p className="text-lg leading-tight w-[90%]">
              EAT, SLEEP, PARK, REPEAT! It&apos;s as easy as that at parkopedia.
              At Parkopedia, we pride ourselves on being the most reliable
              vehicle parking WebApp at no compromise of quality.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-3xl text-[#eca3f5]">Pre Booking Online</h1>
            <p className="text-lg leading-tight w-[90%]">
              Being on-time and making your parking hassle-free is our priority!
              Book your parking slots and zones in advance with our pre-online
              booking system to ease your way in getting your parking spots
              without any sweat.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-3xl text-[#eca3f5]">Affordable Cost</h1>
            <p className="text-lg leading-tight w-[90%]">
              Every single one of us deserves access to quality and standard
              parking. To get it at an affordable & cheap cost is an added
              bonus. We, at Parkopedia, are really happy and efficient to
              provide you the services of both.
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <img src="/assets/images/pic-1.jpg" className="w-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default Features;
