import React from "react";
import Button from "./Button";
import fileIcon from "../assets/fileIcon.png";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 ">
      <div className="flex items-center gap-2 mb-6">
        <img src={fileIcon} className="w-8 " />
        <h2 className="font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
      </div>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="mt-4">
          {projects.map((project) => {
            let cssClasses =
              "text-left w-full px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400 ";
            }

            return (
              <li key={project.id} className="">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <ProjectTitle /> */}
    </aside>
  );
};

export default Sidebar;
