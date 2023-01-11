import React, { useEffect, useState } from 'react'
import { Docs as DocsType } from '../../../lib/project'
import { NextPage } from 'next'
import DocsPage from './parts/DocsPage'
import styles from './docs.module.scss'
import DocsSection from './parts/DocsSection'

export default function Docs(props:{docs:DocsType}) {
	const [docpage, changedocpage] = useState("Getting Started");
	const [docpagecontent, changedocpagecontent] = useState("");
	props.docs.renderpage(docpage).then(res => {
		if (res != docpagecontent) {
			changedocpagecontent(res);
		}
	})
	
  return (
	<div className={styles.Docs}>
		<h1 style={{fontStyle:"italic"}}>Documentation</h1>
		{Object.keys(props.docs.pages).map((key, ind) => <DocsSection key={ind} section_name={key} change_doc={changedocpage}/>)}
		<DocsPage page={docpagecontent}/>
	</div>
  )
}