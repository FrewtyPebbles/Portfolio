import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Project } from './lib/project'
import styles from './project.module.scss'

export default function ProjectsProject(props:{project:Project, key:number, searchstate:[string, React.Dispatch<React.SetStateAction<string>>], on_select: () => void}) {
	const router = useRouter()
	return (
		<div className={styles.ProjectItem}>
			{/* uses cssgrid */}
			{/* icon */}
			<img className={styles.ProjectItemIcon} src={props.project.iconpath} alt="There was an issue loading the project icon." onClick={() => {router.push(`/portfolio/${props.project.title}`);}}/>
			{/* description */}
			<div className={styles.ProjectItemDescription} onClick={() => {props.on_select(); router.push(`/portfolio/${props.project.title}`);}}>
				<div className={styles.ProjectItemDescriptionTitle}>{props.project.title} - v{props.project.ver()}</div>
				<div className={styles.ProjectItemDescriptionDescription}>{props.project.description}</div>
			</div>
			{/* taglist  */}
			<div className={styles.ProjectItemTaglist}>
				{props.project.tags.map((tag, key) => <div key={key} onClick={() => props.searchstate[1](props.searchstate[0] + " " + tag)} className={styles.ProjectItemTaglistTag}>{tag}</div>)}
			</div>
		</div>
  	)
}
