import Link from 'next/link';
import React from 'react'
import { PROJECTS } from '../globals';
import styles from './project.module.scss'
import ProjectsProject from './ProjectsProject'

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ProjectsList(props: {cref:React.RefObject<HTMLDivElement>, isopen:[boolean, React.Dispatch<React.SetStateAction<boolean>>]}) {
  const [search, setSearch] = React.useState("");
  // const [projects, set_projects] = React.useState<Project[]>([
  //   new Project("./favicon.ico", "Neat Object Notation", [0,6,16], "A smart and modular object notation.", ["neat", "package", "compiler", "serialize", "serializer", "rust", "python", "notation", "object", "config", "interpreter", "serialization", "dict", "cargo", "pyo3", "pip", "module", "pypi", "list", "dictionary", "datastructure", "datastructures"], [new Download("Neat.zip", "Neat", "zip", [0,6,16], Platform.Win)])
  //   .set_body("Neat is scaleable and versatile.  Neat is designed to be used as a python module."),
  //   new Project("./favicon.ico", "Earwig Web Framework", [0,11,2], "A web framework that simplifies python web development.", ["web", "framework", "python", "website", "site", "werkzeug", "api"], [new Download("Earwig.zip", "Earwig", ".zip", [0,11,2], Platform.All)])
  //   .set_body("The Earwig Web Framework is designed to be used not as a module, but as a project directory.  To get started, download the Earwig Web Framework development kit."),
  //   new Project("./favicon.ico", "Earwig Pastebin API", [0,1,0], "An API made with the Earwig Web Framework for sharing strings data via API hyperlinks.", ["website", "site", "python", "paste", "bin", "api", "rest", "earwig", "werkzeug", "lightshot", "screenshot", "js", "javascript", "java", "script"]),
  //   new Project("./favicon.ico", "Python Image Processor", [0,2,1], "A python image matrix processor made using numpy and pillow. This module features a saturate, desaturate, contrast, decontrast, mosaic, mosaic blur, black and white, and a cell shading filter that works by altering the image matrix in python directly.", ["image", "module", "processing", "python", "pil", "pillow", "numpy", "matrix", "blur", "cell", "shade"]),
  //   new Project("./favicon.ico", "Portfolio Site", [0,1,0], "My portfolio site utilizing the front end tools: Next.js, SCSS, and TypeScript along with the backend frameworks Django Rest Framework and Earwig (used in the pastbin API).", ["next", "next.js", "python", "react.js", "react", "website", "site", "react", "typescript", "ts", "js", "javascript", "java", "script", "css", "scss"]),
  //   new Project("./favicon.ico", "Rust FTP", [0,1,0], "A file transfer protocol written in the rust programming language.", ["ftp", "file", "transfer", "protocol", "rust", "crust", "cargo", "packet", "packets"]),
  //   new Project("./favicon.ico", "Fulcrum", [0,8,8], "A scripting language written in rust.", ["fulcrum", "scripting", "language", "ful", "functional", "programming", "minimal", "input", "output"], [new Download("Fulcrum.zip", "Fulcrum", "zip", [0,8,8], Platform.Win), new Download("Fulcrum.zip", "Fulcrum", "zip", [0,8,8], Platform.Mac), new Download("Fulcrum.zip", "Fulcrum", "zip", [0,8,8], Platform.Lin)])
  // ]);
  const plist_ref = React.useRef<HTMLDivElement>(null);
  const toggle_list = (value:boolean) => {
    props.isopen[1](value);
  }

  switch (props.isopen[0]) {
    case true:
      return (
        <div ref={plist_ref} className={styles.ProjectList}>
          <div className={styles.ProjectListTitle}>
            <div className={styles.ProjectListTitleTitle} onClick={() => {
              plist_ref.current!.className = styles.ProjectListClosing;
              props.cref.current!.style.display = "block";
              setTimeout(function() {
                toggle_list(false)
              }, 990);
            }}>PROJECTS</div>
            <Link href="/" className={styles.StaticLink}>Back To Home Page</Link>
            <div className={styles.ProjectListTitleSearch}>
              <input placeholder='Search' className={styles.ProjectListTitleSearchInput} type="text" onChange={e => { setSearch(e.target.value); }} value={search} />
            </div>
          </div>
          <div className={styles.ProjectListList}>
            {Object.values(PROJECTS).map((project, key) => {
              if (project.check_tag(search)) {
                return <ProjectsProject
                 key={key} project={project} searchstate={[search, setSearch]}
                 on_select={() => {
                  plist_ref.current!.className = styles.ProjectListClosing;
                  props.cref.current!.style.display = "block";
                  setTimeout(function() {
                    toggle_list(false)
                  }, 990);
                }}></ProjectsProject>;
              }
            })}
          </div>
        </div>
      )
    case false:
      return (
        <div className={styles.ProjectListClosed} onClick={() => {toggle_list(true)}}>
          PROJECTS
        </div>
      )
      break;
  }
  
}
