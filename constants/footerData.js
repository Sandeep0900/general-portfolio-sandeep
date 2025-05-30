import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImSphere } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";

export const socialLinks = [
    {
        id: 1,
        icon: <FaGithub />,
        link: "https://github.com/Sandeep0900",
        label: "GitHub"
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/sandeep--sharma/",
        label: "LinkedIn"
    },
    {
        id: 3,
        icon: <FaInstagram />,
        link: "https://www.instagram.com/sandeep_._20_._",
        label: "Instagram"
    },
    {
        id: 4,
        icon: <FaXTwitter />,
        link: "https://x.com/Anup_9960",
        label: "Twitter"
    },
    {
        id: 5,
        icon: <MdEmail />,
        link: "mailto:sandeesharma09@gmail.com",
        label: "Email"
    }
];

export const MENU_LINKS = [
    { name: "ABOUT" },
    { name: "PROJECTS" },
    { name: "SKILLS" },
];

export const CARD_NAMES = [
    { name: "Web Dev", icon: <ImSphere /> },
    { name: "Game Dev", icon: <IoGameController /> },
    { name: "App Dev", icon: <CiMobile3 /> }
]