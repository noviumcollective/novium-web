import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-angular-gradient-lg'>
      <div className='text-center text-white'>
        <h1 className='lg:text-6xl font-bold sm:text-4xl'>
          Great Ideas Start with a
        </h1>
        <h1 className='lg:text-6xl font-bold sm:text-4xl'>
          Simple Conversation
        </h1>
        <button className='relative mt-6 px-10 py-3 bg-transparent text-white border border-white font-semibold rounded-lg shadow-sm shadow-white overflow-hidden group items-center'>
          <span className='absolute inset-0 bg-invisible blur-md  opacity-30'></span>
          <span className='relative z-10 flex items-center gap-6'>
            Let's Talk
            <Mail />
          </span>
        </button>
      </div>
    </div>
  );
}
