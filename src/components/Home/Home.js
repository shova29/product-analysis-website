import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../../Assets/Images/header-img.png";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  return (
    <section className="lg:container lg:mx-auto md:container md:mx-auto sm:container sm:mx-auto bg-white">
      <section className="mt-16 flex bg-white grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="sm:ml-12 lg:ml-0">
          <h1 className="text-5xl font-bold">
            A BROAD RANGE OF <br></br>
            <span className="text-teal-500">TRENDY SunGlass</span>
          </h1>
          <p className="lg:max-w-auto sm:max-w-auto  mt-6 sm:text-sm lg:text-lg">
            Perfect look with a suitable pair of glasses. Put on eyewear & put
            on positive view mode. Our sunglasses are designed to protect the
            eyes both from excessive light and from damaging UV light rays.
          </p>
          <button
            type="button"
            class="mt-8 text-teal-700 hover:text-white border border-teal-500 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-400 dark:text-teal-400 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-900"
          >
            Shop Now
          </button>
        </div>
        <div className="">
          <img
            className="lg:w-full sm:w-full lg:h-full sm:h-full"
            src={HeaderImage}
            alt=""
          />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="mt-8 font-bold text-4xl text-center mb-6">
          Customer Reviews(3)
        </h2>
        <div className="mt-8 review-container container mx-auto lg:columns-3  sm:columns-1">
          {reviews.slice(0, 3).map((reviewCard) => (
            <ReviewCard
              key={reviewCard.id}
              reviewCard={reviewCard}
            ></ReviewCard>
          ))}
        </div>
        <div className="text-center mt-8">
          {" "}
          <button
            onClick={() => navigate("/reviews")}
            type="button"
            class="text-center text-xl px-16 py-2 focus:outline-none text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-900"
          >
            See All Reviews
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home;
