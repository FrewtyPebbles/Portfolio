
class Version {
	ver:[number,number,number];
	constructor(ver:[number,number,number]) {
		this.ver = ver;
	}
	toString() {
		return this.ver[0] + "." + this.ver[1] + "." + this.ver[2]
	}
	valueOf() {
		return this.ver[0] + "." + this.ver[1] + "." + this.ver[2]
	}
}

export enum Platform {
	Win = "Windows",
	Mac = "Mac",
	Lin = "Linux",
	All = "All"
}


import { remark } from 'remark';
import html from 'remark-html';

export class Docs {
	program_name:string;
	pages:{[index: string]:string} = {}; // associative array with page title and path to page as value
	constructor(program_name:string) {
		this.program_name = program_name;
		fetch("http://localhost:3000/api/docs", {
			headers: {
				"program_name": this.program_name
			}
		}).then(
			res => {res.json().then((data) => {
				this.pages = data["pgs"];
				//console.log("json: " + JSON.stringify(this.pages));
			});}
		)
	}
	async renderpage(page_title:string) {
		// Use remark to convert markdown into HTML string
		if (Object.keys(this.pages).length <= 0) {
			await fetch("http://localhost:3000/api/docs", {
				headers: {
					"program_name": this.program_name
				}
			}).then(
				res => {res.json().then((data) => {
					this.pages = data["pgs"];
					//console.log("json: " + JSON.stringify(this.pages));
				});}
			)
		}
		
		let contents = "";
		//console.log(page_title + " : : PAGE : : " + this.pages[page_title]);
		if (this.pages[page_title] !== undefined) {
			await fetch("http://localhost:3000/" + this.pages[page_title]).then(res => res.text()).then(text => {
				if (typeof text != "undefined")
				contents = text;
			});
		}
		else {
			await fetch("http://localhost:3000/projects/" + this.program_name + "/docs/1.Getting Started.md").then(res => res.text()).then(text => {
				if (typeof text != "undefined")
				contents = text;
			});
		}
		//console.log(contents)
		var processedContent = await remark()
			.use(html)
			.process(contents);
		return processedContent.toString();
	}
}

export class Download {
	filename:string;
	title:string;
	format:string;
	version:Version;
	platform:Platform;

	constructor(filename:string,
		title:string,
		format:string,
		version:[number,number,number],
		platform:Platform = Platform.Win) {
		this.filename = filename;
		this.title = title;
		this.format = format;
		this.version = new Version(version);
		this.platform = platform;
	}
	ver() {
		return this.version.toString();
	}
	download(){
		window.open(`/projects/${this.title}/downloads/${this.filename}`, '_self');
	}
}

export class Project {
	iconpath:string;
	title:string;
	description:string;
	body:string = "";
	tags:string[];
	version:Version;
	downloads:Download[];
	docs:Docs;
	constructor(iconpath:string, title:string, version:[number,number,number], description:string, tags:string[], downloads:Download[] = []) {
		this.iconpath = "http://localhost:3000/" + iconpath;
		this.title = title;
		this.description = description;
		this.tags = tags;
		this.version = new Version(version);
		this.downloads = downloads
		this.docs = new Docs(this.title);
	}
	ver() {
		return this.version.toString();
	}
	new_dl(new_dl:Download){
		this.downloads.push(new_dl);
		return this;
	}
	set_body(body:string){
		this.body = body;
		return this;
	}
	* itter_dls() {
		for(let dl in this.downloads) {
			yield dl;
		}
	}
	public check_tag(raw_search:string): boolean {
		let search = raw_search.trim().toLowerCase();
		
		if (search == "") {
			//if the search is empty render all
			return true;
			
		}
		let parts = search.split(/\s+/);
		if (this.title.toLowerCase().includes(search)) {
			return true;
			
		}
		if (this.description.toLowerCase().includes(search)) {
			return true;
			
		}
		for (let tag of this.tags) {
			for (let part of parts) {
				if (tag.toLowerCase().includes(part)) {
					return true;
				}
			}
		}
		return false;
	}

	public add_tag(tag:string): boolean {
		if (this.tags.includes(tag)) {
			return false;
		}
		this.tags.push(tag);
		return true;
	}
}