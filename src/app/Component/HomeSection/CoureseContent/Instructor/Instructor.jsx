import React from 'react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Instructor = () => {
    return (
        <div className='p-12'>
            <h1 className='text-4xl font-bold'>Meet Your Instructor</h1>

<div className='grid md:grid-cols-2 px-12'>
<div>

<div className="avatar mt-6">
  <div className="w-[200px] mt-6 rounded-full ring ing-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/289LgPc/IMG-20221219-174537-removebg-preview-1-1.png" />
  </div>
</div>

</div>
<div className='w-[450px]'> 

<p className='text-3xl font-bold'> Gaurav Sen</p>
<p className='text-lg'>Ex Software Engineer @ Uber, Directi</p>
<p className='mt-6 text-xl'>Meet Gaurav, founder, and CEO of InterviewReady.
     He has a background in distributed systems and software engineering at Uber, DirectI, and Morgan Stanley. He is an expert at designing scalable systems, and has over 500k+ followers on his YouTube channel. Gaurav has spoken about distributed systems at various institutions like 
    University of Houston-Texas, IIT Gandhinagar, and BITS Hyderabad.</p>
    <p className='flex gap-4 mt-4'> <AiFillLinkedin className='text-4xl rounded-full'></AiFillLinkedin> <AiFillYoutube className='text-4xl rounded-full'></AiFillYoutube> <AiFillTwitterCircle className='text-4xl rounded-full'></AiFillTwitterCircle> </p>
</div>


</div>


        </div>
    );
};

export default Instructor;