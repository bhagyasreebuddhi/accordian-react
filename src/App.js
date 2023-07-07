import Accordian from "./Accordian";
import "./styles.css";

export default function App() {
  const data = [
    {
      question: "What is React JS ?",
      content:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
    },
    {
      question: "What is the main concept of ReactJS?",
      content:
        "React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”."
    },
    {
      question: "Is React a framework or language?",
      content:
        "React is an open source JavaScript framework, that isn't actually a framework. But it is currently the most commonly used front-end development technology in the world. React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS 'library'"
    }
  ];

  return (
    <div className="App">
      <h3>Accordion Using React JS</h3>
      {data.map(({ question, content }) => {
        return <div>{<Accordian question={question} content={content} />}</div>;
      })}
    </div>
  );
}
