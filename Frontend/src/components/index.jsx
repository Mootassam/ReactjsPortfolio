import React from "react";

const Header = React.lazy(() => import("./Header/Header"));
const About = React.lazy(() => import("./About/About"));
const Portfolio = React.lazy(() => import("./Portfolio/Portfolio"));
const Skills = React.lazy(() => import("./Skills/Skills"));
const Service = React.lazy(() => import("./Service/Service"));
const Contact = React.lazy(() => import("./Contact/Contact"));

export { Header, About, Portfolio, Skills, Service, Contact };
