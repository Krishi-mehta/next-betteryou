import React from "react";
import { notFound } from "next/navigation";
import { fullQuizzes } from "../data/fullQuizData";
import QuizTemplate from "@/components/quiz/QuizTemplate";

export default function QuizPage({ params }) {
  const { slug } = params;

  // Find the quiz matching this slug
  const quiz = fullQuizzes.find((q) => q.slug === slug);

  if (!quiz) {
    notFound(); // shows 404 page if not found
  }

  return (
    <QuizTemplate
      questions={quiz.questions}
      title={quiz.title}
      introduction={<p>Welcome to {quiz.title}</p>}
      resultMessages={quiz.resultMessages}
      scrollOffset={1100}
    />
  );
}
