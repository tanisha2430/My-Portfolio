import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Smart Campus Solutions Platform",
    img: "/Home_page.png",
    desc: "This platform includes smart solutions in six domains including events and communication, resource optimization, smart campus navigation, environmental sustainability, feedback and improvements, and automated library services.",
    git:"https://github.com/Tanishasaxena24/Campus-Elevate",
  },
   {
    id: 2,
    title: "CardioScan",
    img: "/cardioscan2.png",
    desc: "It leverage AI  to analyze ECG images for detecting cardiovascular diseases. It provides accurate predictions to classify ECGs as normal or abnormal, aiding in early diagnosis.",
    git:"https://github.com/Tanishasaxena24/AI-Powered-CardioScan",
  },
   {
    id: 3,
    title: "Merchant Interactions",
    img: "/merchant.png",
    desc: `This project adds a "Merchant Interactions" feature to a CRM system, enabling agents to log communications with merchants, assign tasks, set reminders, and view interaction history.`,
    git:"https://github.com/Tanishasaxena24/Merchant-Interactions-Website",
  },
  // {
  //   id: 2,
  //   title: "Keyword Snap(Extractor)",
  //   img: "/keywordP.png",
  //   desc: "Keyword Snap is a text analysis tool that utilizes the OpenAI API to extract keywords, assisting in content summary creation and generating SEO tags for improved online visibility and searchability.",
  //   git:"https://github.com/new",
  // },
//   {
//     id: 3,
//     title: "Travel Companion",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     desc: "Travel Companion is a platform that allows you to explore hotels, restaurants, and attractions around you. It provides a comprehensive guide on their specialties, ratings, and features. You can view these details on a map and scroll through the list to find any place of interest.",
//   },
  {
    id: 4,
    title: "Dictionary Application",
    img: "/dictionaryP.png",
    desc: "The dictionary application offers a comprehensive search feature, providing meanings, antonyms, synonyms, and examples for a thorough understanding of words",
    git:"https://github.com/Tanishasaxena24/Dictionary_App",
  },
  {
    id: 5,
    title: "Hangman Game",
    img: "/hangmanP.png",
    desc: "In the Hangman game, players guess a word by selecting letters from a provided keyboard.Incorrect guesses result in parts of a hangman being drawn. Guess the word correctly within the limit to win",
    git:"https://github.com/Tanishasaxena24/Hangman_Game",
  },

  {
    id: 6,
    title: "Image Bliss",
    img: "/imageP.png",
    desc: "Image Bliss is a versatile tool that generates a vast array of pictures and images based on any word inputted.",
    git:"https://github.com/Tanishasaxena24/Image-Bliss",
  },

  {
    id: 7,
    title: "Weather Whiz",
    img: "/weatherP.png",
    desc: "The weather app provides weather updates, including humidity and temperature, for any location in a visually appealing manner.",
    git:"https://github.com/Tanishasaxena24/Weather-Whiz",
  },

  {
    id: 8,
    title: "Currency Converter",
    img: "/currencyP.png",
    desc: "The currency converter allows users to easily convert between any two currencies, providing accurate and up-to-date exchange rates.",
    git:"https://github.com/Tanishasaxena24/Currency-Converter",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
            
            <motion.img ref={ref} src={item.img} alt="" />
          <motion.div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.git} target="_blank"><button>Github Link</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;