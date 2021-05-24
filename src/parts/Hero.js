import React, { useState } from 'react';

const Hero = () => {
  const [state, setState] = useState(() => '');
  console.log(state);
  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    );
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-5xl text-white mb-5 font-semibold">
            <span className="text-teal">The New </span>
            Way to <br /> Achieve Good <span className="text-teal">Skills</span>
          </h1>
          <p className="text-white text-lg mb-8 font-light">
            We provide tons of pathskill that you <br />
            can choose and focus on
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              onChange={(event) => setState(event.target.value)}
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              placeholder="Your Email Address"
            />
            <button className="bg-orange transition-all duration-200 shadow-inner text-white px-6 py-3 focus:outline-none hover:bg-orange-400 ">
              Daftar Now
            </button>
          </form>
        </div>
        <div className="w-1/2 flex justify-end pt-24 pr-16 ">
          <div className="relative" style={{ width: 369, height: 440 }}>
            <div
              className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
              style={{ height: 374, width: 324 }}
            ></div>
            <div className="absolute w-full h-full -mb-8 -ml-8">
              <img src="/images/img-hero-1.jpg" alt="hero 1" />
            </div>
            <div
              className="absolute z-10 bg-white py-3 px-4 mt-24 -ml-10"
              style={{ transform: 'translateX(-50%)', width: 290 }}
            >
              <p className="text-gray-900 mb-2 font-light">
                Metode belajar yang santai seperti nonton drakor di Netflix{' '}
                <br />
                <span className="text-gray-600">Alyssa, App Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
