import React from 'react'
import { Download as downl } from '../../lib/project'
import styles from './components.module.scss'

export default function Download(props:{dl:downl}) {
  return (
	<div className={styles.download}>
		<div>
			<div style={{display:"inline-block"}} className={styles.downloadtitle}>{props.dl.title}</div> <code style={{paddingLeft:"5px"}} className={styles.downloadver}>{props.dl.ver()}</code>
			<div style={{display:"inline-block"}} className={styles.downloadplatform}>{props.dl.platform}</div>
			<div className={styles.downloadfilename}><code className={styles.downloadfilenameinner}>{props.dl.filename}</code></div>
		</div>
		<svg className={styles.downloadicon} fill="#FFFFFF" height="30px" width="30px" viewBox="0 0 490 490">
			<path d="M8.347,0l236.653,490L481.653,0L245.001,150.769L8.347,0z M369.968,125.622L245.001,384.372L120.033,125.622l100.285,63.89
			l24.683,15.726l24.683-15.726L369.968,125.622z"/>
		</svg>
	</div>
  )
}
