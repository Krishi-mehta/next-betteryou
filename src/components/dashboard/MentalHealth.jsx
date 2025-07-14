import React from 'react';
import { useRouter } from 'next/navigation';
import './/styles/mentalHealth.css';

const MentalHealth = () => {
  const router = useRouter(); 
  return (
    <div>
      <section className="section-thr"> {/* Corrected className */}
        <div className="section-container">
        <div className="text-content">
          <h2 className="h2-one">Just Breathe</h2>
          <h2 className="span-one">And Relax..</h2>
          <p className='mentalsection-p'>
          "In the midst of life’s chaos, finding inner peace is essential. At BetterYou, we believe that mental well-being starts with small, intentional moments of calm. Whether it’s through mindful breathing, soothing sounds, or simple daily affirmations, taking time to relax can improve clarity, reduce stress, and bring balance to your life. Explore our guided practices, resources, and tips to cultivate a peaceful mind and a healthier you. Remember, calmness is not the absence of challenges but the ability to navigate them with a steady heart and a clear mind."
          </p>
          {/* <p>Get a Therapist who gets you. All Online.</p> */}
          {/* <div className="btn-content">
            <button className="btn-2" onClick={() => router.push("/carespace")}>Take the first step to Therapy</button>
          </div> */}
        </div>
        <div className="main-content2">
          <img src="/images/section-img.png" alt="universe" />
        </div>
        </div>
      </section>
      <section className="sect-three">
        <div className="three-sec">
          <h2 className="thr-three">This Video Will Explain</h2>
          <h1 className="thr-three1">Importance of Mental Health.</h1>
          <div className="video-div">
            <video controls>
              <source src="/images/BetterYou.mp4"  type="video/mp4" /> 
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealth;
