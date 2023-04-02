import React from 'react'
import styles from '../docs.module.scss'

export default function DocsSection(props:{section_name:string, change_doc:(key: string) => void}) {
  return (
		<div onClick={() => {props.change_doc(props.section_name)}} className={styles.DocsSection}>
			{props.section_name}
		</div>
  )
}
