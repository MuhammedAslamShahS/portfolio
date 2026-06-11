import "./SkillsComponents.css";
import {
    SiHtml5,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiCplusplus,
    SiGit,
    SiPrisma,
    SiMysql,
} from "react-icons/si";

const SkillsComponents = () => {
    return (
        <div className="skills-main-container">
            <div className="skills-container">
                <h1>My Skills</h1>

                <div className="skills-icons">
                    <SiHtml5 className="skill-icon" title="HTML5" />
                    <SiJavascript className="skill-icon" title="JavaScript" />
                    <SiTailwindcss className="skill-icon" title="Tailwind CSS" />
                    <SiReact className="skill-icon" title="React" />
                    <SiNodedotjs className="skill-icon" title="Node.js" />
                    <SiExpress className="skill-icon" title="Express.js" />
                    <SiMongodb className="skill-icon" title="MongoDB" />
                    <SiPython className="skill-icon" title="Python" />
                    <SiCplusplus className="skill-icon" title="C++" />
                    <SiGit className="skill-icon" title="Git" />
                    <SiPrisma className="skill-icon" title="Prisma" />
                    <SiMysql className="skill-icon" title="SQL / MySQL" />
                </div>
            </div>
        </div>
    );
};

export default SkillsComponents;
