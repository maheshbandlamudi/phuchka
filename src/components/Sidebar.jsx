import React from "react";
import Button from "./Button";

const Sidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      {console.log(projects)}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="mt-4">
          {projects.map((project) => (
            <li key={project.id} className="">
              <button className="text-left w-full text-stone-400 hover:text-stone-200 hover:bg-stone-800 px-2 py-1 rounded-sm my-1">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* <ProjectTitle /> */}
    </aside>
  );
};

export default Sidebar;
