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
    deploy:
      "https://64895e1190bf8e64ae3305cd--celadon-fairy-bfaa56.netlify.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/95146343/262322865-c1af5503-5b10-4e21-88f3-9f61a1f33b1e.jpg",
    name: "Async Race",
    description:
      "Async Race is a educational project as part of the task for RS School.",
    stack: [
      "TypeScript",
      "SCSS",
      "Webpack",
      "Responsive UI",
      "SPA",
      "Rest API",
      "JS Animations",
    ],
    git: "https://github.com/M0rl0ck/m0rl0ck-JSFE2022Q3/blob/async-race/README.md",
    deploy: "https://m0rl0ck.github.io/m0rl0ck-JSFE2022Q3/async-race/",
  },
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
];

export default PROJECTS;
