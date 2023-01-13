import styles from '../styles/Home.module.scss'
import { Project } from './portfolio/projects/lib/project'
import React, { useEffect, useState } from 'react'
import ProjectsListWrapper from './portfolio/ProjectsListWrapper'
import Link from 'next/link'


export default function Home(props:any) {
  const [current_project, change_current_project] = useState(new Project("./favicon.ico", "Neat Object Notation", [0,6,16], "A smart and modular object notation.", ["neat", "package", "compiler", "serialize", "serializer", "rust", "python", "notation", "object", "config", "interpreter", "serialization", "dict", "cargo", "pyo3", "pip", "module", "pypi", "list", "dictionary", "datastructure", "datastructures"]));
  
  return (
    <>
      <ProjectsListWrapper change_curr_proj={change_current_project}>
        <div className={styles.CenterContent}>
          <Link href="/">Home</Link>
          {/* {filetree.render(props.filetree.data)} */}
        </div>
      </ProjectsListWrapper>
    </>
  )
}

