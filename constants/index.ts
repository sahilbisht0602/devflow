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
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
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
      { title: "NEXTJS", count: "31" },
      { title: "TEST", count: "19" },
      { title: "REACT", count: "18" },
      { title: "CSS", count: "14" },
      { title: "NEXTJS", count: "9" },
    ],
  },
};
