import React from "react";
import { useStyles } from "./styles";

const ProjectNameFilterPopup = ({ activeProjects, setActiveProjects }) => {
    const classes = useStyles();

    const projects = [
        "ЖК City Hub",
        "ЖК Озерний гай Гатне",
        "ЖК Нивки-Парк",
        "Паркові Озера",
        "ЖК Sky Avenue",
        "ЖК Сирецькі Сади",
        "ЖК Теремки",
        "ЖК Голосіївський",
        "Intergal City",
        "Причал 8",
        "Академ Квартал",
        "ЖК Лук'янівський каскад",
    ];

    const toggleProject = (project) => {
        setActiveProjects((prev) =>
            prev.includes(project)
                ? prev.filter((item) => item !== project)
                : [...prev, project]
        );
    };

    return (
        <div className={"lContent"}>
            {projects.map((project) => (
                <button
                    key={project}
                    className={`lBtn ${
                        activeProjects.includes(project) ? classes.active : ""
                    }`}
                    onClick={() => toggleProject(project)}
                >
                    {project}
                </button>
            ))}
        </div>
    );
};

export default ProjectNameFilterPopup;