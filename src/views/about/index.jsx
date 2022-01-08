import React from "react";
import TypingCard from "@/components/TypingCard";
//import wechat from "@/assets/images/wechat.jpg";
//import reward from "@/assets/images/reward.jpg";
const About = () => {
  const cardContent = `
    <p> Hello everyone, 
    <br>
    <a href="http://www.fingersfun.com" target="_blank">
      <img style="-webkit-user-select: none;margin: auto;background-color: #fff;transition: background-color 300ms;" src="https://www.fingersfun.com/img/fingersfun_logo.png" >
      </a>

      <br>
      <br>
    <img style="-webkit-user-select: none;margin: auto;background-color: #fff;transition: background-color 300ms;" src="https://avatars.githubusercontent.com/u/5946516?v=4">
</ p>
    `;
  return (
    <div className="app-container">
      <TypingCard title="About author" source={cardContent} />
    </div>
  );
};

export default About;
