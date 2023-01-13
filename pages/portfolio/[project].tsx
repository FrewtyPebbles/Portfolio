import styles from './../../styles/Home.module.scss'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProjectsListWrapper from './ProjectsListWrapper'
import ProjectPage from './projects/project page/ProjectPage'
import { PROJECTS } from '../globals'
import ProjectDisplay, { fetch_display_files } from './projects/lib/ProjectDisplay'
import path from 'path'
import DOMPurify from 'isomorphic-dompurify'


const slug = (url:any) => new URL(url).pathname.match(/[^\/]+/g);

export default function Home(props:{body:string, route:string, filetree:{data:any, program_name:string, parent_file:string}}) {
  
  // console.log("PNAME :: " + props.filetree.program_name)
  // let filetree = new FileTree(props.filetree.parent_file, props.filetree.program_name)
  // filetree.data = props.filetree.data
  let refresh = () => {
    changeft(props)
  }
  const [ft, changeft] = useState(props)
  useEffect(() => {
    refresh()
    console.log(ft)
  }, [props === ft])

  
  return (
    <>
      <ProjectsListWrapper>
        <div className={styles.CenterContent}>
          {/* {currpage} */}
          <ProjectPage project={PROJECTS[props.route]}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }}></div>
            <ProjectDisplay data={ft.filetree.data} parent_file={ft.filetree.parent_file} program_name={ft.filetree.program_name}/>
          </ProjectPage>
        </div>
      </ProjectsListWrapper>
    </>
  )
}

export async function getStaticPaths() {
  let paths:{paths:{params: {project: string}}[], fallback:boolean} = {
    paths: [],
    fallback: true
  }
  for (let key of Object.keys(PROJECTS)) {
    paths.paths.push({params: {project: key}})
  }
  return paths;
}

export async function getStaticProps({ params }:any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let body = await (await fetch(path.join("http://localhost:3000/projects", params.project, "body.html"))).text()
  let data = await fetch_display_files("root", params.project);
  console.log("DATA :::  ? ? :::");
  console.log(data)
  // Pass post data to the page via props
  return { props: { body, route:params.project, filetree:{data:data, program_name:params.project, parent_file:""} } }
}