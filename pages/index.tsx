import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Project } from './portfolio/projects/lib/project'
import React, { useEffect, useState } from 'react'
import ProjectsListWrapper from './portfolio/ProjectsListWrapper'
import ProjectPage from './portfolio/projects/project page/ProjectPage'
import Link from 'next/link'


export default function Home(props:any) {
  const [current_project, change_current_project] = useState(new Project("./favicon.ico", "Neat Object Notation", [0,6,16], "A smart and modular object notation.", ["neat", "package", "compiler", "serialize", "serializer", "rust", "python", "notation", "object", "config", "interpreter", "serialization", "dict", "cargo", "pyo3", "pip", "module", "pypi", "list", "dictionary", "datastructure", "datastructures"]));
  //let filetree = new FileTree(props.filetree.parent_file,props.filetree.program_name)
  
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

// export async function getStaticProps({ params }:any) {
//   let filetree = new FileTree("","Rust FTP")
//   await filetree.fetch()
//   return { props: { filetree:{data:filetree.data, program_name:"Rust FTP", parent_file:""} } }
// }
