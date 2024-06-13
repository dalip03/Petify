import React from "react";
import about from "../../assets/Images/about.png";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            {/* <img src={about} alt="image" /> */}
            <img src="https://images.unsplash.com/photo-1482059387495-939d52279925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />

          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Petify
            </h2>
            <p className="mt-6 text-gray-600">
              Introducing the PETIFY Transparent Pet Carrier Backpack in a
              vibrant red color! Now you can explore the world with your furry
              companion in ultimate style. This airline approved backpack is
              perfect for hassle-free travel, allowing you and your pet to jet
              set together. With its ventilated design, your pet will remain
              cool and comfortable throughout the journey.{" "}
            </p>
            <p className="mt-4 text-gray-600">
              Whether you’re going for a short hike or a long trip, this
              lightweight backpack will be your pet’s cozy, portable haven. Say
              goodbye to pet carrier woes and embark on unforgettable adventures
              with PETIFY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
