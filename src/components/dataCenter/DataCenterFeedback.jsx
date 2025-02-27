'use client';

import React, { useState } from 'react';
const feedbackData = [
  {
    id: 1,
    brandImg: '/img/feedback-brand-1.png',
    quoteImg: '/img/shape/feedback-quate.png',
    feedback: 'Exceptional Cloud Services Experience',
    description:
      "Since 2021, my company has been utilizing CloudMinister's cloud-based services, and I must say, the experience has been nothing short of exceptional. Whether it’s hosting, handling queries, or providing support, CloudMinister has consistently delivered top-notch service. Their team's dedication to customer satisfaction and their quick response times have made a significant difference in our operations. I highly recommend CloudMinister to anyone seeking reliable and efficient cloud services.",
    userImg: '/img/user.png',
    userName: 'Nishant Sukhwal',
    userPosition: 'Business Owner',
  },
  {
    id: 2,
    brandImg: '/img/feedback-brand-2.png',
    quoteImg: '/img/shape/feedback-quate.png',
    feedback: 'Simplified IT Server Management',
    description:
      'I am a non-IT person, and the terms used for managing servers are really strange, but the team at CloudMinister really understands what I want. They ensure that the IT server infrastructure managed by them can be handled very easily without the need for an internal IT team. We started with just one site and now have multiple business ties and two servers. Their willingness to go beyond the scope to solve issues is what sets them apart. I shifted my servers from E2E Network and HostGator to them, and I am happy.',
    userImg: '/img/user.png',
    userName: 'Mandeep Singh',
    userPosition: 'Business Owner',
  },
  {
    id: 3,
    brandImg: '/img/feedback-brand-3.png',
    quoteImg: '/img/shape/feedback-quate.png',
    feedback: 'Seamless Project Execution',
    description: 'Great service. The team at CloudMinister was absolutely prompt in understanding the requirement, taking up the project, and completing it seamlessly. Thank you!',
    userImg: '/img/user.png',
    userName: 'Himanshu Takkar',
    userPosition: 'Entrepreneur',
  },
  {
    id: 4,
    brandImg: '/img/feedback-brand-4.png',
    quoteImg: '/img/shape/feedback-quate.png',
    feedback: 'Highly Recommended Services',
    description:
      'It was a great experience working with them. The services offered by them are one of the best anyone could ask for. I would advise working with them in one go as you’ll never regret it.',
    userImg: '/img/user.png',
    userName: 'Rahul Soni',
    userPosition: 'IT Consultant',
  },
  {
    id: 5,
    brandImg: '/img/feedback-brand-5.png',
    quoteImg: '/img/shape/feedback-quate.png',
    feedback: 'Best Hosting Experience',
    description:
      "I switched to CloudMinister after having a terrible experience with another hosting provider, and it was the best decision I could have made. Their migration process was smooth and painless, and since then, I haven't had any downtime or performance issues. Their control panel is also user-friendly and easy to navigate. I highly recommend CloudMinister to anyone looking for reliable web hosting.",
    userImg: '/img/user.png',
    userName: 'Peehu Garg',
    userPosition: 'Business Owner',
  },
];

const DataCenterFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };
  return (
    <section className="video-area-one pt-60 pb-60 position-relative z-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine" className="text-white">
              Hear from Our Happy Clients – Success Stories & Reviews
            </h2>
          </div>
        </div>
        <div className="mt-8 position-relative" data-sal="fade" data-sal-duration="1500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
          <div className="relative bg-white p-6 shadow rounded-3" >
            <p className="text-lg font-semibold text-gray-800">{feedbackData[currentIndex].feedback}</p>
            <p className="text-gray-600 mt-3">{feedbackData[currentIndex].description}</p>
            <div className="flex items-center justify-center mt-5">
              <img src={feedbackData[currentIndex].userImg} alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <p className="font-semibold text-gray-900">{feedbackData[currentIndex].userName}</p>
                <p className="text-sm text-gray-500">{feedbackData[currentIndex].userPosition}</p>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="feedback-navs d-flex align-items-center justify-content-between position-relative w-100 z-2  d-md-flex">
            <span className="feedback-button-prev w-10 h-10 rounded-circle bg-orange d-flex align-items-center justify-content-center text-white" onClick={prevSlide}>
              <i className="las la-arrow-left"></i>
            </span>
            <span className="feedback-button-next w-10 h-10 rounded-circle bg-orange d-flex align-items-center justify-content-center text-white" onClick={nextSlide}>
              <i className="las la-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordsLimit = 20;

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const descriptionSnippet = description.split(' ').slice(0, wordsLimit).join(' ');

  return (
    <p className="mt-3">
      {isExpanded ? description : `${descriptionSnippet}... `}
      {description.split(' ').length > wordsLimit && (
        <span onClick={toggleExpanded} style={{ color: '#085390', cursor: 'pointer' }} className="read">
          {isExpanded ? 'Show Less' : 'Read More'}
        </span>
      )}
    </p>
  );
};

export default DataCenterFeedback;
