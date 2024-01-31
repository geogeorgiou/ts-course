enum QuestionCategory {
  GeneralKnowledge,
  Science,
  Math,
  Programming,
}

type TrueFalseQuestion = {
  category: QuestionCategory;
  question: string;
  correctAnswer: boolean;
};

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    category: QuestionCategory.GeneralKnowledge,
    question: 'The sun is a star.',
    correctAnswer: true,
  },
  {
    category: QuestionCategory.Science,
    question: 'Water boils at 200 degrees Celsius.',
    correctAnswer: false,
  },
];

function checkAnswer(
  question: TrueFalseQuestion,
  userAnswer: boolean,
): boolean {
  return question.correctAnswer === userAnswer;
}

checkAnswer(trueFalseQuestions[0], false);

console.log(`Your answer is:`, checkAnswer(trueFalseQuestions[1], true));
