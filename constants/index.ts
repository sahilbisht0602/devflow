import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const RightBarContent = {
  TOP_QUESTION: {
    heading: "Top Questions",
    content: [
      {
        text: "Would it be appropriate to point out an error in another paper during a referee report?",
      },
      { text: "How can an airconditioning machine exist?" },
      { text: "Interrogated every time crossing UK Border as citizen" },
      { text: "Low digit addition generator" },
      { text: "What is an example of 3 numbers that do not make up a vector?" },
    ],
    ICON: "/assets/icons/chevron-right.svg",
  },

  TAGS: {
    heading: "Popular Tags",
    content: [
      { title: "NEXTJS", count: "31", _id: "1" },
      { title: "TEST", count: "19", _id: "2" },
      { title: "REACT", count: "18", _id: "3" },
      { title: "CSS", count: "14", _id: "4" },
      { title: "NEXTJS", count: "9", _id: "5" },
    ],
  },
};

export const QuestionCardContent = [
  {
    _id: "1",
    title:
      "Best Practices for data fetching in a next js Best practices for data fetching in a nextjs Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente?",
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
    tags: [
      { title: "NEXTJS", _id: "1" },
      { title: "Python", _id: "1" },
    ],
    author: {
      _id: "1",
      name: "Sahil bisht",
      picture: "",
    },
    upvotes: "150",
    views: "59787",
    answers: [],
  },
  {
    _id: "2",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente?",
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
    tags: [
      { title: "React", _id: "1" },
      { title: "Python", _id: "1" },
    ],
    author: {
      _id: "1",
      name: "Vijay bisht",
      picture: "",
    },
    upvotes: "250",
    views: "9787",
    answers: [],
  },
  {
    _id: "2",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sapiente?",
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
    tags: [
      { title: "React", _id: "1" },
      { title: "Python", _id: "1" },
    ],
    author: {
      _id: "1",
      name: "Vijay bisht",
      picture: "",
    },
    upvotes: "250",
    views: "9787",
    answers: [],
  },
  
];
