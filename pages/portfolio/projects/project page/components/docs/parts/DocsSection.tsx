import React from 'react'
import styles from '../docs.module.scss'

export default function (props:{section_name:string, change_doc:(key: string) => void}) {
  return (
	<a onClick={() => {props.change_doc(props.section_name)}}>
		<div className={styles.DocsSection}>
			{props.section_name}
		</div>
	</a>
  )
}
