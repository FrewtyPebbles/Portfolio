import styles from '../styles/Home.module.scss'
import { Project } from './portfolio/projects/lib/project'
import React, { useEffect, useState } from 'react'
import ProjectsListWrapper from './portfolio/ProjectsListWrapper'
import Link from 'next/link'
import hstyles from './(Home Components)/HomeStyles.module.scss'
import LetterStyler from './(Home Components)/LetterStyler'


export default function Home(props: any) {
  const [current_project, change_current_project] = useState(new Project("./favicon.ico", "Neat Object Notation", [0, 6, 16], "A smart and modular object notation.", ["neat", "package", "compiler", "serialize", "serializer", "rust", "python", "notation", "object", "config", "interpreter", "serialization", "dict", "cargo", "pyo3", "pip", "module", "pypi", "list", "dictionary", "datastructure", "datastructures"]));

  return (
    <>
      <ProjectsListWrapper change_curr_proj={change_current_project}>
        <div className={hstyles.CenterContent}>
          {/* This is the home page */}
          <div className={hstyles.SlideInLeft}>
            Welcome to the portfolio of:
          </div>
          <h1 className={hstyles.SlideInRight}>
            <LetterStyler letterclass={hstyles.LetterClass}>William Andrew Lim</LetterStyler>
          </h1>
          <div className={`${hstyles.SlideInRight} ${hstyles.HeaderHint}`}>
            Click PROJECTS to open the project list.
          </div>
        </div>
      </ProjectsListWrapper>
    </>
  )
}

