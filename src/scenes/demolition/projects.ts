import icons from "./icons";
import * as routes from "../../routes";

export type Project = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  isExternal: Boolean;
  link: string;
  description: string;
};

export const projectIds = {
  soundboard: "soundboard",
  portfolio: "portfolio",
  grid: "grid",
  loops: "loops",
  wheel: "wheel",
  segment: "segment",
  engineering: "engineering",
  writing: "writing",
  photography: "photography",
  about: "about",
  coding: "coding"
};

const projects = [
  {
    id: projectIds.soundboard,
    icon: icons.nathan,
    title: "King Soundboard",
    link: routes.SOUNDBOARD,
    isExternal: false,
    subtitle: "A soundboard made to annoy my housemate",
    description: `The year was 2018, the airport was London Gatwick. Some uni friends and I had just been told about a 4 hour delay. Luckily, I had VS Code to hand and used the time to whip up a small soundboard of my friend's common expressions. The annoyance it has created over the last few years has been sensational.`
  },
  {
    id: projectIds.grid,
    icon: icons.grid,
    title: "Land Grid",
    link: routes.LAND_GRID,
    isExternal: false,
    subtitle:
      "An interactive chart to display the location and relative pricing of houses",
    description:
      "I was looking to move jobs and I stumbled across a company called Land Tech that I thought looked really fun. This was my tech test submission for them. A fullstack front end interactive graph display and a backend which processed and served up the data. I got rejected over the phone. However, I could sense that they were on the fence about it. So, I thought, may as well have another shot at showing my value. I broke down their interview process and gave them some helpful feedback, about timings and expectations. They really appreciated it! Next day I got called in for a final interview and then landed the job. I was over the moon! "
  },
  {
    id: projectIds.portfolio,
    icon: icons.drawing,
    link: routes.PORTFOLIO,
    isExternal: false,
    title: "whatsrupp.com v1.0.0",
    subtitle: "My first design for a portfolio back in 2017",
    description:
      "I took a year out in the middle of my degree. I did a number of odd jobs while learning how to code. In March 2017 I took the plunge and did a 3 months coding course. It was amazing. I decided this could be something I'd love to start a career in. I had 6 months before I went back to uni and I was desperately trying to find a summer job. I remember grinding out this website as fast as possible and finding it really difficult at the time. I eventually found a small start up that were willing to take a chance with my limited skills. I will be forever grateful that they did. I ended up working with them throughout the final year of university and the year afterwards. I really enjoyed putting in some subtle animations and hiding a small easter egg on the page. I also remember enjoying making all the logos in Adobe Illustrator, I was obsessed with making all the icons using the Golden ratio principle. "
  },
  {
    id: projectIds.coding,
    icon: icons.coding,
    link: "https://github.com/whatsrupp",
    isExternal: true,
    title: "Coding",
    subtitle:
      "A link to my github if you want to look at the source code for this website! Steal Away!",
    description:
      "Over the years most of my weird coding side projects have ended up on github, it's a good place to have a snoop. I've also got my cv on there if you're interested."
  },
  // {
  //   id: projectIds.loops,
  //   icon: icons.loops,
  //   link: routes.LOOPS,
  //   isExternal: false,
  //   title: "Loops and Cats",
  //   subtitle:
  //     "A live looping recording station. Beatbox your boots and cats and make a fresh track.",
  //   description:
  //     "This was my first ever collaborative coding project. 3 friends and I wanted to rustle up something to quickly brainstorm musical ideas. A loop station is hardly original, but one that's quick and accessible in a browser has its perks. It turned out that it was very hard to keep audio playback for multiple tracks in sync. The original MVP code is here https://github.com/whatsrupp/loops-and-cats it was a single page javascript application written in vanilla js. The version on this website is my rewrite of it using react. "
  // },
  {
    id: projectIds.wheel,
    icon: icons.wheel,
    link: routes.CAMELOT_WHEEL,
    isExternal: false,
    title: "Camelot Wheel",
    subtitle:
      "Also known as the circle of fifths. An Interactive musical SVG to try out chord progressions.",
    description:
      "In 2019 I helped my friend Jack on a project called play-thru (https://github.com/jackbittiner/play-thru). Given a song from the spotify API it recommends other songs that are compatible with the key and the tempo of the song. A core concept behind this automatic mixing is something called the Camelot Wheel, also known as the circle of fifths. All musical keys adjacent to the block you've chosen in the wheel will be musically compatible."
  },
  {
    id: projectIds.segment,
    icon: icons.segment,
    link: routes.SEGMENT,
    isExternal: false,
    title: "Segment",
    subtitle: "A radial SVG builder for react",
    description:
      "In 2019 I helped my friend Jack on a project called play-thru (https://github.com/jackbittiner/play-thru). A core part of the UI required the ability to easily create clickable circular components. SVGs work perfectly in the situation you have weirdly shaped dom elements that you need to be able to click. This react component makes it easy to build segments based on a number of key parameters."
  },
  //   {
  //     id: projectIds.engineering,
  //     icon: icons.wrench,
  //     link: routes.SOUNDBOARD,

  //     title: "Engineering",
  //     subtitle: "A collection of more technical mechanical engineering projects",
  //     description:
  //       "Before becoming a developer I studied Engineering at university. I ended up really enjoyed control systems, where you use code to control physical things. This is an archive of the more visual things we had to make."
  //   },
  {
    id: projectIds.writing,
    icon: icons.writing,
    link: "https://medium.com/@nickrupp95",
    title: "Engineering Blog",
    isExternal: true,
    subtitle:
      "Man Vs. Code a blog about what it's like to do a coding bootcamp",
    description:
      "When I was at a coding bootcamp, I wrote a daily entry of what it was like to be there. Why? Long train journies get boring otherwise..."
  },
  {
    id: projectIds.photography,
    icon: icons.photography,
    link: "https://www.instagram.com/nick.rupp/?hl=en",
    isExternal: true,
    title: "Photography",
    subtitle:
      "Nick Pics. I'm a sucker for long exposures and an animal. I take portaits on the side.",
    description:
      "I think I like photography because I like collecting things. Eiffel Tower?. Snap. Collected it. Bird? Snap. Collected it. So satisfying."
  }
  //   {
  //     id: projectIds.about,
  //     icon: icons.mannequin,
  //     link: routes.SOUNDBOARD,

  //     title: "About Me",
  //     subtitle: "Proceed with caution.",
  //     description:
  //       "Realistically, a ballpit of projects just isn't going to tell you much about me. Here's a bit more."
  //   }
];

export const projectsMap = new Map(
  projects.map(project => {
    return [project.id, project];
  })
);

export default projects;
