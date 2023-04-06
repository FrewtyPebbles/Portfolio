import { JSXElementConstructor, ReactElement, useEffect, useState } from "react";
import styles from "./projectdisplay.module.scss"
import React from 'react'
import Image from 'next/image'
import axios from "axios";
import { log } from "console";
import { IP } from "../../globals";

export function FileNode(props:{name:string, content:string, path:string, render: (path: string, content: string) => void}) {
	
	return <div className={styles.File} onClick={() => {props.render(props.path, props.content)}}>{props.name}</div>
	// render_open() {
	// 	return <pre>{this.content.split("\n").map((line, ln) => <code line-Num={ln}>{line}</code>)}</pre>
	// }
}

export function FolderNode (props:{open:boolean, foldername:string, children:React.ReactNode, path:string}) {
	const [open, toggleopen] = useState(props.open);
	useEffect(() => {
		toggleopen(props.open)
	}, [props.path])
	const toggle = () => {
		toggleopen(!open);
	}
	switch (open){
		case false:
			return (
				<div className={[styles.FolderWrapper].join(' ')}>
					<div className={[styles.Folder, styles.FolderClosed].join(" ")} onClick={toggle}>{props.foldername}</div>
				</div>
			)
		case true:
			return (
				<div className={[styles.FolderWrapper].join(' ')}>
					<div className={[styles.Folder, styles.FolderOpen].join(" ")} onClick={toggle}>{props.foldername}</div>
					<div className={styles.FolderInsides}><div>{props.children}</div></div>
				</div>
			)
	}
}

export async function fetch_display_files(parent_file:string, program_name:string) {
	//send path to api
	let res = await fetch(`http://${IP}:5000/content`, {
		headers: {
			"path": parent_file,
			"program_name": program_name,
		}
	})
	let retval = await res.json()
	return retval
}

export function FileTree(props:{parent_file:string, program_name:string, data:{root:{[key:string]:(string|{})}}, render: (path: string, content: string) => void}) {
	let first = true;
	
	return(<>{Object.entries(props.data.root).map(([key, val], ind) => {
		const map_entries = (inner_key:string, inner_val: string | {[key:string]:(string|{})}, ind_inner:number) => {
			if (typeof inner_val == "string") {
				let pathparts = inner_key.split("\\");
				let filename = pathparts[pathparts.length-1]
				first = false;
				return <FileNode key={ind_inner} path={inner_key} name={filename} content={inner_val} render={props.render}/>
			}
			else {
				let pathparts = inner_key.split("\\");
				let filename = pathparts[pathparts.length-1]
				let retval = <FolderNode key={ind_inner} path={inner_key} foldername={first ? inner_key : filename} open={first}>
					{Object.entries(inner_val).map(([inner_map_key, inner_map_val], ind2) => map_entries(inner_map_key, inner_map_val, ind2))}
				</FolderNode>
				first = false;
				return retval
			}
		}
		return map_entries(key, val, ind);
	})}
</>)
}

export default function ProjectDisplay(props:{parent_file:string, program_name:string, data:{root:{[key:string]:(string|{})}}}) {
	const [filecontent, change_filecontent] = useState(<></>)
	useEffect(() => {
	  change_filecontent(<></>)
	}, [props.program_name])
	
	const render_content = (path:string, content:string) => {
		let lines = content.split("\n")
		if (path.endsWith(".png") || path.endsWith (".jpg") || path.endsWith (".webp"))
		{
			change_filecontent(<div className={styles.Display}>
				<div className={styles.DisplayTitle}>
					<div className={styles.DisplayTitleTitle}>{path}</div><div onClick={()=>{change_filecontent(<></>)}} className={styles.DisplayTitleX}> ✖ </div>
				</div>
				<div style={{display:"flex", justifyContent:"space-around"}}>
					<img className={styles.DisplayImage} src={content} alt={path}/>
				</div>
			</div>)
		}
		else {
			if (lines != null && lines.length < 1500) {
				change_filecontent(<div className={styles.Display}>
					<div className={styles.DisplayTitle}>
						<div className={styles.DisplayTitleTitle}>{path}</div><div onClick={()=>{change_filecontent(<></>)}} className={styles.DisplayTitleX}> ✖ </div>
					</div>
					<div className={styles.DisplayLineParent}>
					{lines.map((line, ln) => 
					<div key={ln} className={styles.DisplayLine}>
						<div className={styles.DisplayLineNum}>
							<code>
								{ln + 1}
							</code>
						</div>
						<div className={styles.DisplayLineLine}>
							<pre>
								<code>
									{line}
								</code>
							</pre>
						</div>
					</div>)}
					</div>
				</div>)
			}
			else {
				change_filecontent(<div file-path={path} className={styles.Display}>
					<span style={{paddingLeft:"30px"}}>This file is too large to render.</span>
				</div>)
			}
		}
	}
  return (
	<div className={styles.DisplayParent}>
		<FileTree data={props.data} parent_file={props.parent_file} program_name={props.program_name} render={render_content}/>
		{filecontent}
	</div>
  )
}
