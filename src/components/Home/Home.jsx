import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Explore new courses
                            <span className="hidden sm:block text-4xl">Best content</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                           
                            &nbsp; Purchase now
                        </Link>
                    </div>
                </div>
  
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Explore new courses</h1>
            <section className="p-4">
            <h2 className="text-center text-2xl font-bold my-4">Our Courses</h2>
            <div className="flex flex-wrap justify-center">
              <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-64 transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">From Class 5th to 10th</h3>
                <p>We offer comprehensive courses for students from 5th to 10th grade.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-64 transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">+1 and +2</h3>
                <p>Our specialized classes for +1 and +2 ensure students excel in their exams.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-64 transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">UPSC Govt Jobs</h3>
                <p>We provide training for UPSC and other government job exams.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-64 transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">Aptitude Training</h3>
                <p>Enhance your aptitude skills with our expert training programs.</p>
              </div>
            </div>
          </section>
        </div>
        
    );

 
   
}

export default Home
