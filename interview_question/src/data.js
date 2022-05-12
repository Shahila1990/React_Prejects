const questions = [
  {
    id: 1,
    title: "What is JSX?",
    info: "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. ",
  },
  {
    id: 2,
    title: "Can web browsers read JSX directly?",
    info: "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel",
  },
  {
    id: 3,
    title: "What is the virtual DOM?",
    info: "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects. React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.",
  },
  {
    id: 4,
    title: "Explain how lists work in React?",
    info: "We create lists in React as we do in regular JavaScript. Lists display data in an ordered format.The traversal of lists is done using the map() function",
  },
  {
    id: 5,
    title: "Why is there a need for using keys in Lists?",
    info: "A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists. It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered",
  },
  {
    id: 6,
    title: "What are the components in React?",
    info: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.",
  },
  {
    id: 7,
    title: "What is the use of render() in React?",
    info: "It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.",
  },
  {
    id: 8,
    title: "What is a state in React?",
    info: "The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render",
  },
  {
    id: 9,
    title: "What are props in React?",
    info: "Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes. Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.",
  },
];
export default questions;
