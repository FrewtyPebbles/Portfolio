import React from 'react'
import Project from '../../lib/project'
import Download from './Download'
import styles from './components.module.scss'

export default function DownloadSection(props:{project:Project}) {
  return (
	<div className={styles.downloadlist} style={props.project.downloads.length ? {display:"block"}:{display:"none"}}>
		<div className={styles.downloadlisttitle}>Downloads</div>
		{props.project.downloads.map((dl, key) => <Download key={key} dl={dl}/>)}
	</div>
  )
}
