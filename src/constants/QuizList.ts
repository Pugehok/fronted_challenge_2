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
        id: 1,
        title: "Что обозначает аббревиатура CSS?",
        answers: [
          "Counter Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
        correct: 2,
      },
      {
        id: 2,
        title: "Какие основные типы элементов бывают в HTML?",
        answers: ["Inline и Outline", "Block и Inline", "Text и Image"],
        correct: 1,
      },
      {
        id: 4,
        title: "Какой тег используется для создания списка в HTML?",
        answers: ["<ol>", "<ul>", "<dl>"],
        correct: 0,
      },
      {
        id: 5,
        title:
          "Какой оператор используется для сравнения значений по типу и значению?",
        answers: ["==", "===", "!="],
        correct: 1,
      },
      {
        id: 6,
        title: "Что такое HTML?",
        answers: [
          "Hypertext Markup Language",
          "Hyper Transfer Markup Language",
          "High-level Text Markup Language",
        ],
        correct: 0,
      },
      {
        id: 7,
        title: "Какой тег используется для создания заголовка в HTML?",
        answers: ["<header>", "<h1>", "<title>"],
        correct: 1,
      },
      {
        id: 8,
        title: "Что такое DOM?",
        answers: [
          "Document Object Model",
          "Data Object Model",
          "Dynamic Object Model",
        ],
        correct: 0,
      },
      {
        id: 9,
        title: "Какой атрибут используется для задания стиля элемента в HTML?",
        answers: ["class", "style", "id"],
        correct: 1,
      },
      {
        id: 10,
        title: "Какое расширение у файлов Cascading Style Sheets?",
        answers: [".cs", ".css", ".csl"],
        correct: 1,
      },
    ],
  },
  {
    id: 1,
    Quizes: [
      {
        id: 0,
        title: "Верно ли, что null == undefined?",
        answers: ["Да", "Нет"],
        correct: 1,
      },
      {
        id: 1,
        title: "JavaScript - это язык ",
        answers: [
          "с динамической типизацией",
          "статичной типизацией",
          "без типизации",
        ],
        correct: 0,
      },
      {
        id: 2,
        title: "console.log(typeof(Array)) - что выведет консоль?",
        answers: ["Array", "Function", "Object"],
        correct: 1,
      },
      {
        id: 3,
        title:
          "Какой из следующих вариантов не является типом данных в JavaScript?",
        answers: ["Undefined", "Object", "Null"],
        correct: 2,
      },

      {
        id: 4,
        title: "Как узнать длину строки в JavaScript?",
        answers: ["str.size()", "str.length()", "str.length"],
        correct: 1,
      },
      {
        id: 6,
        title: "Как создать обещание (Promise) в JavaScript?",
        answers: ["new Promise()", "str.size()", "str.length"],
        correct: 0,
      },
      {
        id: 7,
        title:
          "Каким образом можно отправить данные на сервер с использованием метода POST в JavaScript?",
        answers: [
          "Используя функцию postRequest()",
          'Применяя XMLHttpRequest с установкой метода в "POST"',
          'С использованием fetch() и установкой опции method в "POST"',
        ],
        correct: 2,
      },
      {
        id: 8,
        title:
          "Как проверить, является ли объект экземпляром определенного класса в JavaScript?",
        answers: [
          "object.isInstanceOf(Class)",
          "object.instanceOf(Class)",
          "object instanceof Class",
        ],
        correct: 2,
      },
      {
        id: 9,
        title:
          "Что такое Map и Set в JavaScript и в чем их отличие от обычных объектов и массивов?",
        answers: [
          "Map и Set - это структуры данных для хранения уникальных значений",
          "Map - это коллекция ключ-значение, Set - это коллекция уникальных значений",
          "Оба утверждения верны",
        ],
        correct: 2,
      },
      {
        id: 10,
        title: "Что такое деструктуризация в JavaScript и как её использовать?",
        answers: [
          "Деструктуризация - это процесс разбора объектов или массивов на отдельные переменные",
          "Деструктуризация - это обязательный этап в работе с промисами",
          "Деструктуризация - это функция для удаления свойств из объектов",
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 2,
    Quizes: [
      {
        id: 1,
        title: "Какое свойство используется для изменения цвета текста в CSS?",
        answers: ["color", "font-color", "text-color"],
        correct: 0,
      },
      {
        id: 2,
        title: "Как создать внешнюю границу вокруг элемента в CSS?",
        answers: ["border", "outline", "box-shadow"],
        correct: 1,
      },
      {
        id: 3,
        title: "Как установить фоновое изображение для элемента в CSS?",
        answers: ["background-image", "image-url", "background-src"],
        correct: 0,
      },
      {
        id: 4,
        title: "Как устанавливается отступ между элементами в CSS?",
        answers: ["margin", "spacing", "padding"],
        correct: 2,
      },
      {
        id: 5,
        title: "Как изменить шрифт текста в CSS?",
        answers: ["font-family", "text-font", "font-style"],
        correct: 0,
      },
      {
        id: 6,
        title: "Как скрыть элемент в CSS?",
        answers: ["display: none", "visibility: hidden", "opacity: 0"],
        correct: 1,
      },
      {
        id: 7,
        title: "Как выровнять текст по центру в CSS?",
        answers: ["text-align: center", "align: center", "center-text: true"],
        correct: 0,
      },
      {
        id: 8,
        title: "Как изменить размер текста в CSS?",
        answers: ["font-size", "text-size", "size"],
        correct: 2,
      },
      {
        id: 9,
        title: "Как установить полужирное начертание текста в CSS?",
        answers: ["font-weight: bold", "text-bold: true", "bold: yes"],
        correct: 0,
      },
      {
        id: 10,
        title: "Как создать анимацию в CSS?",
        answers: ["@keyframes", "animation", "animate"],
        correct: 1,
      },
    ],
  },
];
