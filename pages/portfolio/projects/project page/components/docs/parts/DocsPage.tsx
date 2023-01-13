import React from 'react'
import DOMPurify from 'isomorphic-dompurify';
import styles from '../docs.module.scss'

export default function DocsPage(props:{page:string}) {

	return (
		<div className={styles.DocsPage} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(props.page)}}>
		</div>
	)
}
