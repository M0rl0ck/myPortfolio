import IProject from "../interfaces/IProject";

const PROJECTS: IProject[] = [
  {
    image:
      "https://user-images.githubusercontent.com/95146343/262353723-bbb6dbfc-f83a-4e16-8abe-c03877574a49.jpg",
    name: "Online zoo",
    description: "online-zoo",
    stack: ["TypeScript", "SCSS", "Webpack", "Responsive UI"],
    git: "https://github.com/M0rl0ck/m0rl0ck-JSFE2022Q3/tree/online-zoo",
    deploy:
      "https://m0rl0ck.github.io/m0rl0ck-JSFE2022Q3/online-zoo/pages/main/index.html",
  },
  {
    image:
      "https://user-images.githubusercontent.com/95146343/243592756-1eaec6da-ce87-4617-817b-c55c937d4f47.png",
    name: "Songbird",
    description:
      "Songbird is a quiz app for recognizing birds by their voices.",
    stack: ["JavaScript", "SCSS", "Webpack", "Responsive UI", "SPA"],
    git: "https://github.com/M0rl0ck/m0rl0ck-JSFE2022Q3/tree/songbird",
    deploy: "https://celadon-fairy-bfaa56.netlify.app/",
  },
  // {
  //   image:
  //     "https://user-images.githubusercontent.com/95146343/262322865-c1af5503-5b10-4e21-88f3-9f61a1f33b1e.jpg",
  //   name: "Async Race",
  //   description:
  //     "Async Race is a educational project as part of the task for RS School.",
  //   stack: [
  //     "TypeScript",
  //     "SCSS",
  //     "Webpack",
  //     "Responsive UI",
  //     "SPA",
  //     "Rest API",
  //     "JS Animations",
  //   ],
  //   git: "https://github.com/M0rl0ck/m0rl0ck-JSFE2022Q3/blob/async-race/README.md",
  //   deploy: "https://m0rl0ck.github.io/m0rl0ck-JSFE2022Q3/async-race/",
  // },
  {
    image:
      "https://user-images.githubusercontent.com/95146343/243565434-c717bf39-87cc-4fea-831d-e63929a03330.png",
    name: "Online store",
    description:
      "This application is a educational project made by the team (Gregory, Sergey) as part of the task for RS School.",
    stack: ["TypeScript", "Modules", "Webpack", "SPA", "Rest API"],
    git: "https://github.com/M0rl0ck/online-store/tree/develop",
    deploy: "https://m0rl0ck-gregory-vinokur-online-store.netlify.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/104526360/221363267-1d90a83f-d0bd-4d0a-bb59-3c00694db1ff.png",
    name: "RS-Clone",
    description:
      "This application is a copy of the social network Vkontakte made by the team (Artem, Sergey, Grigory) as part of the final project.",
    stack: ["TypeScript", "Webpack", "SPA", "EsLint", "Firebase"],
    git: "https://github.com/M0rl0ck/RS-Clone",
    deploy: "https://vk-clone-rs-clone-party-team.netlify.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/98179706/241579636-aaffe2f6-8e1b-42be-98ee-7b80b1c1c8e4.jpg",
    name: "graphiql-app",
    description:
      "This application is a copy of the GraphiQL playground made by the team (Gregory, Sergey, Artem) as part of the final project for React Course.",
    stack: ["TypeScript", "CSS Modules", "Next.js", "Redux - RTK + RTK Query"],
    git: "https://github.com/M0rl0ck/graphiql-app",
    deploy: "https://graphiql-party-team.vercel.app/",
  },
  {
    image:
      "https://private-user-images.githubusercontent.com/95146343/309213125-0ad0d718-2049-4cbc-b882-25313cfba6c0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyOTcwNjYsIm5iZiI6MTcwOTI5Njc2NiwicGF0aCI6Ii85NTE0NjM0My8zMDkyMTMxMjUtMGFkMGQ3MTgtMjA0OS00Y2JjLWI4ODItMjUzMTNjZmJhNmMwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzAxVDEyMzkyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVjNGU3NjViOWI4OWJlYzc3N2ExOWE0NDk2MGQxOWJmZTBkYWY1MTQwZDQ2MGMwMDVhNzgyNWY1YzAwYzgyNWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5JjakKIvSwfhVupXkpC0kzs8ZD4_sfduFiBGHz8KVa4",
    name: "Async Race",
    description: "This application is a test task for the 'Kvartirka' company.",
    stack: [
      "TypeScript",
      "CSS Modules",
      "Next.js",
      "Responsive UI",
      "Rest API",
    ],
    git: "https://github.com/M0rl0ck/Test_task-Apartment",
    deploy: "https://test-task-apartment.vercel.app/",
  },
];

export default PROJECTS;
