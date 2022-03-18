import { Experience } from "./types";

const experience: Experience[] = [
    {
        role: "Software Developer Intern",
        company: "MindInventory",
        start_date: new Date(2020, 11, 1),
        end_date: new Date(2021, 6, 30),
        location: "Ahmedabad, Gujarat, India",
        responsibilities: [
            "Enhanced and redesigned the existing food ordering ecosystem, which attracted 27% more customer traffic.",
            "Executed a modularized backend server application for text detection with an overall accuracy of 98%.",
            "Designed sophisticated animation for VueJS and NuxtJS with 20% smoother flow than existing libraries.",
            "Amplified overall project revenue by 10% through more client acquisitions and company outreach."
        ]
    },
    {
        role: "Software Developer Intern",
        company: "MindInventory",
        start_date: new Date(2020, 4, 1),
        end_date: new Date(2020, 6, 30),
        location: "Ahmedabad, Gujarat, India",
        responsibilities: [
            "Spearheaded a team of 2 developers to develop a social messaging platform backend with over 20K users.",
            "Implemented scalable and reliable client-oriented tax filing system with query execution and visualization.",
            "Increased sales by 15% and reduced maintenance cost by 23% through improved core system architecture.",
            "Developed a dedicated graph representation technique for SQL queries with a 30% better visual appearance."
        ]
    },
    {
        role: "Lead Software Developer",
        company: "House of Babas",
        start_date: new Date(2019, 12, 1),
        end_date: new Date(2020, 5, 30),
        location: "Vellore, Tamil Nadu, India",
        responsibilities: [
            "Led a team of 4 developers to improve an existing e-commerce portal built using MERN Stack.",
            "Developed an agile and scalable backend system with easy to use user interface.",
            "Increased the sales output and website traffic by 50% and 65% respectively."
        ]
    },
]

export default experience