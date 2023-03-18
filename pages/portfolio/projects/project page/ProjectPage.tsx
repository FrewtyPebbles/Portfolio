import React from 'react'
import { Project } from '../lib/project'
import Docs from './components/docs/Docs'
import DownloadSection from './components/DownloadSection'
import styles from './projectpage.module.scss'

export default function ProjectPage(props:{project:Project, children:any}) {
  return (
	<div style={{height:"100%"}}>
		<h1 style={{display:"inline"}}>{props.project.title}</h1><code style={{display:"inline", paddingLeft:"5px"}}>{props.project.ver()}</code>
		<div className={styles.description}>
			<div className={styles.abridge}>{props.project.description}</div>
			<div>{props.project.body}</div>
		</div>
		{props.children}
		<Docs docs={props.project.docs}/>
		<DownloadSection project={props.project}/>
		<div style={{height:"50px"}}></div>
	</div>
  )
}
