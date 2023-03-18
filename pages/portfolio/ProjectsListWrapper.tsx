import React from 'react'
import ProjectsList from './projects/ProjectsList'
import styles from '../pagestyles/projectlistwrapper.module.scss'
import { JsxElement } from 'typescript';

export default function ProjectsListWrapper(props:any) {
  const [isopen, setIsOpen] = React.useState(false);
  const content_ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!isopen) {
      content_ref.current!.style.display = "block";
      //console.log(content_ref.current)
      //document.getElementById("landingpage-content")!.style.display = "inline";
      content_ref.current!.className = styles.ContentParent;
    } else {
      setTimeout(function() {
        content_ref.current!.style.display = "none";
        //console.log(content_ref.current);
      }, 1000);
      //content_ref.current!.className = styles.ContentParentHidden
    }
  },[content_ref, isopen]);

  return (
	<div className={styles.PageGrid}>
    <div style={{height:"100%"}} ref={content_ref}>
      {/* all page content goes in here */}
      {props.children}
    </div>
    <ProjectsList cref={content_ref} isopen={[isopen, setIsOpen]}/>
  </div>
  )
}
