'use client';

import { useState } from 'react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          src="/bg-video.mp4"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <section className="text-center py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-4">
          Yeah We Good is for turning{' '}
          <span
            className="underline cursor-pointer"
            onMouseEnter={() => setShowVideo(true)}
            onMouseLeave={() => setShowVideo(false)}
          >
            chaos
          </span>{' '}
          into good products.
        </h1>
        <p className="text-lg mb-6">
           Hands-on product leadership services from <a href="https://codymusser.com">Cody Musser</a> for building and scaling products and businesses.
        </p>
      </section>
    </>
  );
}
