import React from 'react'

// import '../css-files/area_of_expertise.css';
function Areaofexpertise() {
  return (
    <div>
       <section className="section-four">
        <div className="text-content">
          <h2 className='areaofexpertise_h2'>Would you like to explore Therapy?</h2>
          <p className="p-1">
            Online Therapy is a great way for you to de-stress or get things off
            your chest with no judgement.
          </p>
        </div>
        <div className="text-contentp">
          <p className="p-2">We offer Therapy for everyone -</p>
        </div>
        <div className="card-content">
          <div className="img">
            <img className="card-img1" src="/images/indie.png" alt="indie" />
            <img className="card-img1" src="/images/teen_v2.png" alt="indie" />
            <img className="card-img1" src="/images/Couple.png" alt="indie" />
            <img className="card-img1" src="/images/student_v2.png" alt="indie" />
            <img className="card-img1" src="/images/corporate.png" alt="indie" />
          </div>
          <div className="img-p">
            <p>Individual Therapy</p>
            <p>Teen Therapy</p>
            <p>Couple's Therapy</p>
            <p>Student Therapy</p>
            <p>Corporate Services</p>
          </div>
        </div>
      </section>
      <section className="section-five">
        <h2 className="five-h2">Area of Expertise</h2>
        <div className="expertise-list">
          <div className="expertise-item">
            <p className="expertise-title">Trauma</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Autism</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Abuse</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Anxiety</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">LGBTQIA Concerns</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Loneliness</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Depression</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Grief & Loss</p>
          </div>
          <div className="expertise-item">
            <p className="expertise-title">Phobias</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Areaofexpertise
