import React from 'react';
import './blogs.css';

const Miska_Singh = () => {
  return (
    <div className='blog'>
      <div className='container-fluid'>
        <div className='row blog-row align-items-center'>
        <div className='col-md-4 text-center'>
  <img
    src='placement-postulates/dp/Miska-Singh.jpg'
    className='blog-dp-Miska' 
    alt='Miska Singh'
  />
</div>

<div className='col-md-8' style={{ marginLeft: '-100px', textAlign: 'left' }}>
    <div className='blog-head'>
        <h2 style={{ marginBottom: '0' }}>Miska Singh</h2>
        <small>Decision Science Analyst at Accenture AI</small>
    </div>
</div>

        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div>
              <h3 className='section-title' id='about-me'>
                ABOUT ME
              </h3>
              <p className='section-paragraph'>
                Hello everyone! This is Miska Singh, currently working as a Decision Science Analyst at Accenture AI. As a member of the Y22 batch, I specialized in Transportation Engineering. The following write-up reflects on one of the best two years of my life, though it wasn’t always a smooth ride!
              </p>

              {/* First Image */}
              <img
                className='blog-image-right'
                src='placement-postulates/blogs/Miska-Singh/image1.jpg'
                alt='First Image'
              />

              <h3 className='section-title' id='beginning'>
                THE BEGINNING
              </h3>
              <p className='section-paragraph'>
                Life at IIT Kanpur is filled with ups and downs for almost everyone, and mine was no exception. However, it was a fun roller coaster. The first year was all about coursework, assessments, assignments, and deadlines. The P.K. Kelkar Library was the heart of it all—whether it was the late-night study sessions before consecutive end-sems or the project and assignment submissions at 11:59 PM. Not to forget, this journey wouldn’t have been the same without the amazing friends I made at IITK, who were a part of both the highs and lows of this journey. I am forever grateful to MY PEOPLE.
              </p>

              {/* Second Image */}
              <img
                className='blog-image-left'
                src='placement-postulates/blogs/Miska-Singh/image2.jpg'
                alt='Second Image'
              />

              <h3 className='section-title' id='placement-semester'>
                THE PLACEMENT SEMESTER
              </h3>
              <p className='section-paragraph'>
                This semester began with resume preparations and deciding which fields to target during the placement season. In this competitive environment, it’s beneficial to keep your hands full by learning multiple skills and incorporating them into your resume. I was open to roles in data science, product management, consultancy, as well as core civil engineering. Ensure that your resume highlights projects or courses that justify each of these skills.
              </p>
              <p className='section-paragraph'>
                Resume submission is a daunting task, but that’s just the beginning. The real challenge lies in preparing for various roles and skills. Practice aptitude questions, create presentations, solve different kinds of case studies and product strategy problems, brush up on your machine learning basics, and explore new depths of knowledge in this domain. You need to be prepared for almost anything during your interviews. Time will fly, so stay consistent in your efforts. There will be overwhelming days, but you need to push through, cry if you must, but get back to work once you’re done. Your great friends will come to the rescue, supporting and motivating you to strive for more. Remember to be a good friend to them as well—they need you too. Be prepared for multiple such lows before the big day.
              </p>

              <h3 className='section-title' id='d-day'>
                THE D-DAY
              </h3>
              <p className='section-paragraph'>
                Fast forward to December 1, 2023—I had just finished one round of tears after a terrible breakdown due to no shortlisting on Day 1. It was around 7 p.m., when I received a text from a friend saying that I was shortlisted for Accenture AI, with the interview scheduled for Day 2.1. This meant I had less than 5 hours before the interview started. I was definitely happy but stressed, as I wasn’t prepared for this. I had mentally prepared myself “ki jo haga day 3 ke baad hoga” after all its civil engineering, guys! I gathered myself and started revising my resume. Even after months of hard work, early mornings, and late nights, I found myself revising my resume. But as they say, you play with the cards you’re dealt.
              </p>

              <p className='section-paragraph'>
                The interview went well—I was able to answer every question the interviewer asked. He started with questions about my projects, moved on to queries about black-box and white-box models, ensembling techniques, decision trees, CNN, and some SQL basics. He also asked about my thesis, and he was pleased to hear that I was exploring transportation engineering by incorporating machine learning. After the interview, I felt relieved and hopeful for the results. Luck was on my side that day, and I received the offer the next morning. It was a joyous feeling to hit the bullseye on my first attempt.
              </p>

              <h3 className='section-title' id='conclusion'>
                THE CONCLUSION
              </h3>
              <p className='section-paragraph'>
                Getting placed depends on many factors, including a bit of luck, but primarily on your hard work. Keep struggling and working until you hit your goal. Be prepared for sleepless nights and tough days that make you vulnerable. Make good friends with whom you can freely express yourself. Enhance your skill set to cater to various roles, as in this competitive environment, you might just get one shot. Aim to hit the goal in that ONE opportunity!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miska_Singh;

