import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Nowy ambasador naszego sklepu",
    author: "me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit maiores exercitationem incidunt, quasi perspiciatis beatae ratione saepe pariatur reiciendis dolore maxime voluptate aperiam ducimus praesentium laudantium temporibus, architecto nihil blanditiis impedit, natus repellendus eius aut quam. Minus, sed tempore deserunt totam velit qui hic voluptate consectetur sapiente praesentium aperiam!"
  },
  {
    id: 2,
    title: "Technologia jakiej jeszcze nie znacie tylko w naszych topach",
    author: "me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit maiores exercitationem incidunt, quasi perspiciatis beatae ratione saepe pariatur reiciendis dolore maxime voluptate aperiam ducimus praesentium laudantium temporibus, architecto nihil blanditiis impedit, natus repellendus eius aut quam. Minus, sed tempore deserunt totam velit qui hic voluptate consectetur sapiente praesentium aperiam!"
  },
  {
    id: 3,
    title: "Jak w czasie kwarantanny ćwiczyć technikę? Opowiada Grażyna Jarzyna",
    author: "me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit maiores exercitationem incidunt, quasi perspiciatis beatae ratione saepe pariatur reiciendis dolore maxime voluptate aperiam ducimus praesentium laudantium temporibus, architecto nihil blanditiis impedit, natus repellendus eius aut quam. Minus, sed tempore deserunt totam velit qui hic voluptate consectetur sapiente praesentium aperiam!"
  }
]
const HomePage = () => {
  const artList = articles.map(article => (<Article key={article.id} {...article} />))
  return <div className="home">
    {artList}
  </div>;
};

export default HomePage;
