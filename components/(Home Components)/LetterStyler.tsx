import React from 'react'
import { JsxElement } from 'typescript'

export default function LetterStyler(props:{children:string, letterclass:string}) {
  return (
	<>
		{props.children.split("").map((char,index) => <span className={props.letterclass} key={index}>{char != " " ? char : ""}</span>)}
	</>
  )
}
