import {
    DiAws,
    DiAngularSimple,
    DiReact,
    DiNodejsSmall,
    DiJavascript,
    DiPython,
    DiRust,
    DiPostgresql,
    DiMongodb,
    DiPhp,
    DiJava,
    DiLinux,
    DiWindows,
} from "react-icons/di";

const personalInformations = {
    siteTitle: "My Porfolio",
    name: "Vladimir GIRAUD",
    title: "Software Engineer",
    location: "",
    shortIntro: `Hi, I'm Vladimir, also know as Bartifle !`,
    about: `Passionate about development and technology, I'm a versatile software engineer who
thrives on learning and continuous improvement. With a strong foundation in modern
web technologies and a collaborative mindset, I enjoy solving real-world problems,
building scalable systems, and contributing to team success. I bring both curiosity and
reliability to every project, with a focus on clean code, customer value, and long-term
impact.
`,
    experiences: [
        {
            company: "ACCSYS",
            role: "Software Developer",
            period: "2021 - 2024",
            description: [
                "SaaS development",
                "3D Viewer development",
                "Data analysis",
                "Point Cloud processing",
                "It support",
            ],
            learned: ["Project management", "Team management"],
        },
        {
            company: "Capcod",
            role: "DevOps Engineer",
            period: "2021 - 2021",
            description: ["CI/CD Migration", "Development of a CI/CD Pipeline creation automation app", "DevOps (AWS)"],
            learned: ["Agile / Scrum", "AWS", "Bitbucket"],
        },
        {
            company: "Golden Chateau",
            role: "Freelance",
            period: "2015 - 2021",
            description: ["Website creation and maintenance", "Marketing support"],
            learned: ["Site creation", "Time management", "SEO"],
        },
    ],
    projects: [
        {
            name: "AI Vision AimAssist",
            description: `Learning project that explores real-time computer vision and ai-assisted input. Using ONNX Runtime and DirectML combined with multithreaded video capture and inference.`,
            link: "https://github.com/Bartifle/AI-Vision-Aim-Assist-Learning-Project-with-YOLOv8-DirectML",
            image: "",
        },
        {
            name: "3D .mhd Viewer",
            description:
                "A particle physicist friend needed a lightweight, browser-based viewer for 3D data in the .mhd and .raw formats. This project ended up being a little bigger than just particle dispersion visualization.",
            link: "https://github.com/Bartifle/3D-mhd-displayer",
            image: "",
        },
        {
            name: "Custom Keyboard",
            description: `Built a custom ortholinear keyboard with a custom “Coding” layout (a mix between AZERTY and QWERTY + personal touches) and a dedicated gaming layout.`,
            link: "https://github.com/Bartifle/qmk_firmware",
            image: "",
        },
        {
            name: "Kinney Wiruth Calculator",
            description: "Construction site risk assessment calculator based on the Kinney-Wiruth calculation method.",
            link: "https://github.com/Bartifle/calculatrice_kinney-wiruth",
            image: "",
        },
        {
            name: "CI/CD Pipeline Creation Tool",
            description: "Small app made with Python and Qt to automate the creation of AWS CI/CD pipelines.",
            link: "https://github.com/Bartifle/CI-CD-Pipeline-Creation-Tool",
            image: "",
        },
        {
            name: "Rename_ly",
            description:
                "Discord bot used to rename guild members for a specific event, randomly from a .txt input file.",
            link: "https://github.com/Bartifle/Rename_ly",
            image: "",
        },
        {
            name: "3D Bim Viewer",
            description: "Personal 3D BIM viewer, based on the Xeokit SDK.",
            link: "https://github.com/Bartifle/3D_bim_viewer",
            image: "",
        },
        {
            name: "Google Extension Course",
            description:
                "Completed Google extension courses and built 4 small extensions: Reading Timer, Focus Mode, Tabs Manager, and Service Worker Example.",
            link: "https://github.com/Bartifle/Google-Extensions-Course",
            image: "",
        },
        {
            name: "Inoft Vocal Framework",
            description: "Framework created to deploy voice assistant apps (compatible with Bixby, Google, etc.).",
            link: "https://github.com/Bartifle/inoft_vocal_framework",
            image: "",
        },
    ],
    skills: {
        systemOps: [
            "Git (GitHub, GitLab, Bitbucket)",
            ["CI/CD", ", AWS", <DiAws />],
            ["Linux", <DiLinux />, "Windows", <DiWindows />, "macOS"],
        ],
        development: [
            ["SQL/NoSQL", <DiPostgresql />, <DiMongodb />],
            "GraphQL",
            ["React", <DiReact />, "Angular", <DiAngularSimple />],
            ["Node.js", <DiNodejsSmall />, "Next.js, Express.js"],
            "Paradigms: OOP, Functional, Imperative",
        ],
        methodologies: ["Agile", "TDD and BDD", "Penetration testing, security audits"],
        languages: [
            ["Python", <DiPython />],
            ["Javascript", <DiJavascript />],
            "TypeScript",
            ["PHP", <DiPhp />],
            ["Java", <DiJava />],
            "C#",
            "C/C++",
            ["Rust", <DiRust />],
        ],
        softSkills: [
            "Teamwork",
            "Creativity",
            "Problem Solving",
            "Communication",
            "Project management",
            "Team management",
        ],
        speaking: ["French (native)", "Russian (native)", "English (fluent)"],
    },
    socials: [
        { name: "GitHub", url: "https://github.com/Bartifle", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/vladimir-g-10069926a/", icon: "linkedin" },
    ],
};

export default personalInformations;
