import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C Programming</li>
                <li>Java</li>
                <li>R Programming</li>
                <li>SQL Database</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Internal CTF</li>
            <li>BAT CTF 2023 </li>
            <li>Petronas Inter-University CTF</li>
            <li>Asean Battle of Hackers (ABOH2023)</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University - Degree Computer Science (CyberSecurity)</li>
                <li>SMK Sri Sentosa - STPM</li>
                <li>SMK USJ 8 - SPM</li>
          </ul>
        ),
    },
    {
        title: "Award",
        id: "award",
        content: (
          <ul className="list-disc pl-2">
                <li>Petronas Inter-University CTF - Finalist</li>
                <li>ABOH 2023 - Top 4</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.jpeg" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently a Degree student majoring in Computer Science specialised in Cyber Security at Asia Pacific University (APU). I am also a CTF player and I have took parts in several CTF competitions.
                     I am a team-player, a friendly and a person who are willing to learn. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("award")}
                        active= {tab === "award"}
                        >
                            {" "}
                            Award{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;