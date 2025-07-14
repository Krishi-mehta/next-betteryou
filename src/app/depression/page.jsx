import React from "react";
import "../anxiety/dashboardComponents.css"

const Depression = () => {
  const articles = [
    {
      imgSrc: "/images/dep-1.png",
      date: "December 3, 2024",
      title: "No matter how much you try to answer the aforementioned questions, they might leave you feeling unsettled and uneasy about yourself, in general, or your future. When no answers are forthcoming, you might also find yourself feeling more than just dread.",
      para: "As you’re struggling with answering these questions and addressing the pain and distress, you might even begin to experience fear or apprehension. Although at some point, you might grapple with your reality, you might also come to discover self-acceptance and self-awareness.",
    },
    {
      imgSrc: "/images/dep-2.png",
      date: "November 29, 2024",
      title: "A lot of people on the internet asked, “Is depression a disability?” In order to understand this concept, let’s take a deep look at what a psychotherapist has to say in this matter. A chronic or severe depression can affect an individual’s life differently.",
      para: "In some people, depressive episodes might not let an individual work properly, walk properly, or get out of bed. Depressive symptoms impact individuals differently and disability patterns can also be different for people.",
    },
    {
      imgSrc: "/images/dep-3.png",
      date: "November 21, 2024",
      title: "Depression is a serious and multifaceted mental health condition that impacts millions of people in the world. While we might be aware of the emotional symptoms and signs of depression, such as constant sadness and hopelessness, we might not fully understand the cognitive symptoms of the condition. One such cognitive symptom of depression is brain fog.",
      para: "Brain fog is a state of mental confusion and lack of clarity that can be prevalent in people living with depression. Brain fog, despite being a common symptom of depression, is lesser known and even more misunderstood.",
    },
    {
      imgSrc: "/images/dep-4.png",
      date: "November 6, 2024",
      title: "Depression is a hard pill to swallow especially when you lack support, but developing a positive mindset can catalyze your recovery phase. Many people struggling with depression really don’t know what troubles them or what makes them feel sad, some symptoms of depression are invisible, and so are the scars left behind.",
      para: "Depression treatment process is slow and subtle, it generally takes time for you to feel yourself again. The progress of depression recovery is slow which can make you question, “How do I know if I am getting better?” However, the fact is that the chances of relapse are higher in conditions like depression.",
    },
    {
      imgSrc: "/images/dep-5.png",
      date: "September 30, 2024",
      title: "Panic attacks and anxiety attacks are pretty common terms when we talk about mental health care, but did you know that just like panic and anxiety, depression can also be sudden and intense? Well, you might have experienced depression relapse, but can it be considered a depression attack? Experts believe otherwise.",
      para: "Brain fog is a state of mental confusion and lack of clarity that can be prevalent in people living with depression. Brain fog, despite being a common symptom of depression, is lesser known and even more misunderstood.",
    },
    {
      imgSrc: "/images/dep-6.png",
      date: "September 28, 2024",
      title: "Depression is a hard pill to swallow especially when you lack support, but developing a positive mindset can catalyze your recovery phase. Many people struggling with depression really don’t know what troubles them or what makes them feel sad, some symptoms of depression are invisible, and so are the scars left behind.",
      para: "This blog is a comprehensive guide to understanding the signs of depression recovery and how to prevent relapse.",
    },
    // {
    //   imgSrc: dep7,
    //   date: "September 19, 2024",
    //   title: "What Are Depression Attacks And How to M...",
    // },
    // {
    //   imgSrc: dep8,
    //   date: "September 15, 2024",
    //   title: "Feeling Post-Workout Depression? Know Th...",
    // },
    // {
    //   imgSrc: dep9,
    //   date: "July 24, 2024",
    //   title: "Are You Excessively Napping These Days? ...",
    // },
  ];

  return (
    <div>
      <h1 className="A1">Search Results For: "Depression"</h1>
      <div className="grid-container">
        {articles.map((article,index) => (
          <div className="grid-item" key={index}>
            <img src={article.imgSrc} alt="Article" />
            <p className="anxiety">{article.date}</p>
            <p className="anx-title">{article.title}</p>
            <p className="anx-btn">{article.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depression;
