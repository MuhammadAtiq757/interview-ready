import React from 'react';

import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import {  PiWarningCircleFill } from "react-icons/pi";
import {  IoIosPeople } from "react-icons/io";
import { IoNewspaperOutline, IoPeopleSharp } from "react-icons/io5";
import { BsFillCameraVideoFill, BsMeta, BsSave } from "react-icons/bs";

const HeroSection = () => {
    return (
        <>
            <div>
                <div>
                    <iframe className='mx-auto w-11/12 p-6' height="500" src="https://www.youtube.com/embed/VE8BkImUciY?si=KzH3mo_0G7bWY-KP&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='px-12'>
                    <h1 className='pl-14 px-6 text-4xl font-extrabold mt-2'>System Design Simplified</h1>

                    <div className="px-16 mt-4 text-xl font-semibold flex flex-col md:flex-row md:justify-between md:grid md:grid-cols-3">
                        <p className='flex items-center justify-items-center'> <AiFillStar className='text-yellow-500'></AiFillStar> 4.38 (6833)</p>
                        <p className='flex items-center justify-items-center'> <IoIosPeople></IoIosPeople> 15940+ Students</p>
                        <p className='flex items-center justify-items-center'> <PiWarningCircleFill></PiWarningCircleFill> Last updated on 10/2023</p>
                    </div>
                    <p className='mt-6 px-12 font-serif text-lg'>An A-Z video course on system design patterns and best practices. This course ranges from basic concepts like routing, load balancing and caching to advanced concepts like concurrency,
                        separation of concerns, and design tradeoffs.</p>
                    <p className='px-12 text-lg mt-6 font-sans'>Buy for 50% OFF</p>
                    <p className='px-12 flex mt-2 text-3xl font-extrabold'>$105.00
                        <p className='pl-2 text-blue-600'><p><small><del>$210.00</del></small></p>
                        </p>
                    </p>

                    <div className='mt-6'>
                    <button className="h-12 rounded-full text-white bg-blue-600 w-full px-8">Buy Now</button>
                    <button className="h-12 mt-4 rounded-full text-white bg-blue-600 btn-outline w-full px-8">Try for Free</button>

                    </div>


                    <div>
                        <h1 className='text-lg font-bold mb-2 mt-8'>This course includes:</h1>
                       <div className='font-semibold'>
                       <p className='flex items-center justify-items-center'> <BsFillCameraVideoFill className='text-blue-400 mr-2'></BsFillCameraVideoFill> 238+ Video Lessons</p>
                        <p className='mt-2 flex items-center justify-items-center'> <IoNewspaperOutline className='text-blue-400 mr-2'></IoNewspaperOutline> 44+ Quizzes</p>
                        <p className='mt-2 flex items-center justify-items-center'> <BsSave className='text-blue-400 mr-2'></BsSave> 64+ Downloadable Resources</p>
                        <p className='mt-2 flex items-center justify-items-center'> <IoPeopleSharp className='text-blue-400 mr-2'></IoPeopleSharp> Live Classes</p>
                        <p className='mt-2 flex items-center justify-items-center'><FaRegNewspaper className='text-blue-400 mr-2'></FaRegNewspaper> Interview Questions</p>
                        <p className='mt-2 flex items-center justify-items-center'><AiFillClockCircle className='text-blue-400 mr-2'></AiFillClockCircle> Continuous Updates</p>
                        <p className='mt-2 flex items-center justify-items-center'> <BsMeta className='text-blue-400 mr-2'></BsMeta> Lifetime Access</p>
                       </div>
                    </div>


                    <div className='mt-6 text-center'>
                    <h2>Not sure if this course is for you?</h2>
                    <button className="h-12 mt-4 font-semibold rounded-full  bg-yellow-300 btn-outline w-full px-8">Book a free Consultation</button>

                    </div>

<div className='border rounded-xl  border-blue-500  mt-12'>
<h1 className='p-4 text-4xl font-bold'>What you’ll learn?</h1>

<div className='grid md:grid-cols-2 p-6 gap-6'>


<div className='pt-4'>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone> Learn system design fundamentals: eventual consistency, routing, caching, etc.</p>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone>Convert requirements into high-level system designs.</p>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone>onvert engineering requirements into low-level coding and design.</p>
</div>


<div className='pt-4'>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone>Design large-scale distributed systems with microservices.</p>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone>Identify and address design tradeoffs and single points of failure.</p>
<p className='text-lg font-medium flex items-center justify-items-center'><MdDone className='text-blue-400 mr-2 w-[50px] h-12'></MdDone>Account for concurrency, request ordering, and async processing.</p>

</div>


</div>
</div>


                </div>


            </div>


        </>
    );
};

export default HeroSection;