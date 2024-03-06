/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "David Zapata",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "Multimedia engineer with more than 7 years of successful career as founding partner and development director at Saki S.A.S. I excel in leading innovative projects and contributing to the growth of teams focused on excellence in software and multimedia development. My holistic approach and academic background in multimedia engineering position me as an ideal candidate for roles that demand technical and creative leadership."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bNzbSTEdKu5kO9s9-FAmjKvlxjXHbJCS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dzr794",
  linkedin: "https://www.linkedin.com/in/dzr794/",
  gmail: "dzr794@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji("⚡ UX is always a priority.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "less",
      fontAwesomeClassname: "fab fa-less"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Accesibility",
      fontAwesomeClassname: "fas fa-universal-access"
    },
    {
      skillName: "HCI",
      fontAwesomeClassname: "fas fa-hand-pointer"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de San Buenaventura",
      logo: require("./assets/images/logo-universidad-san-buenaventura.webp"),
      subHeader: "Multimedia Engineer",
      duration: "June 2011 - December 2015",
      desc: "published 1 paper for the 12th colombian congress of computing ",
      descBullets: [
        "Diseño e implementación de una capa multisensorial para niños con discapacidad visual"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Videogame development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Video and Audio Editing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founding Partner and Development Director",
      company: "Saki S.A.S.",
      companylogo: require("./assets/images/saki-logo.webp"),
      date: "Jan 2016 - Dec 2023",
      desc: "As a founding partner and development director at Saki I gained important experience in the following areas:",
      descBullets: [
        "Leadership",
        "Project management",
        "Entrepreneurship",
        "Time management",
        "Webflow Web development",
        "Shopify Web development",
        "Wordpress Web development",
        "Video editing and post-production",
        "Cyber security",
        "WebAR development",
        "Unity development"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: true, // Set false to hide this section, defaults to true
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/LogoPassaro.webp"),
      projectName: "Passaro Shopify eCommerce",
      projectDesc:
        "Pássaro is a clothing brand made in Colombia that offers jeans, blouses, shorts, skirts and more.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.passaro.com.co/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo_aprende-a-invertir.webp"),
      projectName: "Aprende a Invertir Webflow web page",
      projectDesc:
        "A website that teaches you how to invest in the stock market from scratch, with courses, guides, templates and free tools.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aprendeainvertir.co/"
        }
      ]
    },
    {
      image: require("./assets/images/app-ginsac.webp"),
      projectName: "Ginsac App",
      projectDesc:
        "App developed in Unity for Ginsac Colombia S.A.S. The app enables customers to interactively visualize the final installation of the machinery, enhancing the sales process.",
      footerLink: [
        {
          name: "Watch App Reel",
          url: "https://youtu.be/GEtIpqKYy_s"
        }
      ]
    },
    {
      image: require("./assets/images/how-is-my-kid-driving.webp"),
      projectName: "How is my kid driving",
      projectDesc: "Developed a web and a video for this client",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://howismykiddriving.com/"
        },
        {
          name: "Watch Video",
          url: "https://youtu.be/c3NTrKy4i44"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_Module-3.webp"),
      projectName: "Video: Colmena Gestión, Module 3 (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=Dc4Kbr_l0QA"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_SG-SST.webp"),
      projectName: "Video: Colmena Gestión, SG SST (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=vTHpQMhKgl4"
        }
      ]
    },

    {
      image: require("./assets/images/thumbnail_actores.webp"),
      projectName: "Video: Colmena Gestión, Actores (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=zruoQoPsgEY"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_peligro-y-riesgos.webp"),
      projectName:
        "Video: Colmena Gestión, Peligro y Riesgos (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=igvI0XgZNxQ"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_origen.webp"),
      projectName: "Video: Colmena Gestión, Origen (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=vwxPytbP5BE"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_objetivo.webp"),
      projectName: "Video: Colmena Gestión, Objetivo (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=p9AFI9Ponw8"
        }
      ]
    },
    {
      image: require("./assets/images/thumbnail_definiciones-clave.webp"),
      projectName:
        "Video: Colmena Gestión, Definiciones clave (co-developments)",
      projectDesc:
        'Co-development made with "Maranta Producción y Diseño" for "Colmena Seguros"',
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=4-IaM0EopJg"
        }
      ]
    },

    {
      image: require("./assets/images/thumbnail_zukai350.webp"),
      projectName:
        "Video: Find out how to make your investment more profitable with ZUKAI",
      projectDesc:
        "This video was the solution to the problem: How to teach them if they don't read the manuals?",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://www.youtube.com/watch?v=7FJVvDqVcpI"
        }
      ]
    }
  ],
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "React Native course",
      subtitle:
        "React Native: Native applications for IOS and Android from DevTalles",
      image: require("./assets/images/curso_devTalles_ReactNative.webp"),
      imageAlt: "React Native course image",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        },
        {
          name: "Course repository",
          url: "https://github.com/dzr794/"
        }
      ]
    },
    {
      title: "React course",
      subtitle:
        "React: From zero to expert ( Hooks and MERN ) course from DevTalles",
      image: require("./assets/images/curso_devTalles_React.webp"),
      imageAlt: "React course image",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        },
        {
          name: "Course repository",
          url: "https://github.com/dzr794/curso-react-zero-to-expert"
        }
      ]
    },
    {
      title: "GIT+GitHub course",
      subtitle:
        "GIT+GitHub: A whole version control system from scratch from DevTalles",
      image: require("./assets/images/curso_devTalles_git-github.webp"),
      imageAlt: "GIT+GitHub course image",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1G9Ebz-m1xBaR9Ys76lzW_6c74aWjm80E/view?usp=sharing"
        },
        {
          name: "Course repository",
          url: "https://github.com/dzr794/curso-git"
        }
      ]
    },
    {
      title: "SOLID Principles course",
      subtitle: "SOLID and Clean Code principles from DevTalles",
      image: require("./assets/images/curso_devTalles_SOLID.webp"),
      imageAlt: "SOLID Principles course image",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Bfr2SY8c23c0LtID5LbClrXOuHScd33D/view?usp=sharing"
        },
        {
          name: "Course repository",
          url: "https://github.com/dzr794/clean-solid-course"
        }
      ]
    },
    {
      title: "TypeScript course",
      subtitle: "TypeScript: Your complete guide and handbook from DevTalles",
      image: require("./assets/images/curso_devTalles_typescript.webp"),
      imageAlt: "TypeScript course image",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1iunIHkyeAB8nlFbzv-1Eakso5eWliTTT/view?usp=sharing"
        },
        {
          name: "Course repository",
          url: "https://github.com/dzr794/LEARNING-TYPESCRIPT"
        }
      ]
    },

    {
      title: "CMS - Level 1",
      subtitle: "Webflow certification exam: CMS - Level 1",
      image: require("./assets/images/webflow.webp"),
      imageAlt: "Webflow Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1e9-CGQrLaK78Wem-_T7iwwNRFQNssDwP/view?usp=sharing"
        }
      ]
    },
    {
      title: "Layout - Level 2",
      subtitle: "Webflow certification exam: Layout - Level 2",
      image: require("./assets/images/webflow.webp"),
      imageAlt: "Webflow Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZOnlylVT8fdT5htI9FKqu0ShwZx5Y7i1/view?usp=sharing"
        }
      ]
    },
    {
      title: "Layout - Level 1",
      subtitle: "Webflow certification exam: Layout - Level 1",
      image: require("./assets/images/webflow.webp"),
      imageAlt: "Webflow Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jCof2YUHJfQ3FCOiZBXgITlrKWAFX75d/view?usp=sharing"
        }
      ]
    },
    {
      title: "Webflow 101",
      subtitle: "Webflow certification exam: Webflow 101",
      image: require("./assets/images/webflow.webp"),
      imageAlt: "Webflow Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14PCgK_YbSdiPm5BqashLKl67i53l3Jsu/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57-3168263302",
  email_address: "dzr794@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
