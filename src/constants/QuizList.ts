interface IQuizList {
  id: number;
  QuizTitle: string;
  url_image: string;
}

export const QuizList: Array<IQuizList> = [
  {
    id: 0,
    QuizTitle: "HTML",
    url_image: "https://logodix.com/logo/470388.png",
  },
  {
    id: 1,
    QuizTitle: "JavaScript",
    url_image:
      "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png",
  },
  {
    id: 2,
    QuizTitle: "CSS",
    url_image:
      "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/css-1024.png",
  },
];

export interface IQuiz {
  id: number;
  Quizes: Array<IQuestions>;
}

export interface IQuestions {
  id: number;
  title: string;
  answers: Array<string>;
  correct: number;
}

export const QuizDB: Array<IQuiz> = [
  {
    id: 0,
    Quizes: [
      {
        id: 0,
        title: "Че тактое HTML",
        answers: [
          "Язык программирования",
          "Язык гипер-разметки",
          "Таблица каскадных стилей",
        ],
        correct: 0,
      },
      {
        id: 1,
        title: "Че такое прототип",
        answers: ["Один", "Два", "Правильно"],
        correct: 2,
      },
    ],
  },
  {
    id: 1,
    Quizes: [
      {
        id: 0,
        title: "Че тактое JS",
        answers: [
          "Язык программирования",
          "Язык гипер-разметки",
          "Таблица каскадных стилей",
        ],
        correct: 0,
      },
      {
        id: 1,
        title: "Че такое прототип",
        answers: ["Один", "Два", "Правильно"],
        correct: 2,
      },
    ],
  },
];
