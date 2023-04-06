import styles from './../../styles/Home.module.scss'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProjectsListWrapper from '../../components/ProjectsListWrapper'
import ProjectPage from '../../components/projects/project page/ProjectPage'
import { PROJECTS, IP } from '../../components/globals'
import ProjectDisplay, { fetch_display_files } from '../../components/projects/lib/ProjectDisplay'
import DOMPurify from 'isomorphic-dompurify'
import p_style from '../../components/project.module.scss'

function slug(url:any){return new URL(url).pathname.match(/[^\/]+/g)};

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
  }, [props === ft])

  
  return (
    <>
      <ProjectsListWrapper>
        <div className={styles.CenterContent}>
          {/* {currpage} */}
          <ProjectPage project={PROJECTS[props.route]}>
            <header className={p_style.bodyroot} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }}></header>
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
    fallback: false
  }
  for (let key of Object.keys(PROJECTS)) {
    paths.paths.push({params: {project: key}})
  }
  return paths;
}

export async function getStaticProps({ params }:any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let body = await (await fetch(`http://${IP}:5000/body`, {
    headers: {
      "program_name":params.project
    }
  })).text()
  let data = {}
  data = await fetch_display_files("root", params.project);
  // Pass post data to the page via props
  return { props: { body, route:params.project, filetree:{data:data, program_name:params.project, parent_file:""} } }
}