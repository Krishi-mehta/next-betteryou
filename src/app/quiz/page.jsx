import React from "react";
import Link from "next/link";
import { quizzes } from "./quizData";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import './page.css'

export default function QuizPage() {
  return (
    <div>
      <Header />
      <div className="quiz-container">
        <h1 className="quiz-title">Better You Quizzes</h1>
        <p className="quiz-description">
          Our free Quizzes can help you take a proactive approach to your mental health and wellness!
        </p>
        <div className="quiz-grid">
          {quizzes.map((quiz) => (
            <Link key={quiz.slug} href={quiz.link}>
              <div className="quiz-card">
                <img
                  src={quiz.image.src ? quiz.image.src : quiz.image}
                  alt={quiz.title}
                  className="quiz-image"
                />
                <h3 className="quiz-heading">{quiz.title}</h3>
                <button className="quiz-button">Take Quiz</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

