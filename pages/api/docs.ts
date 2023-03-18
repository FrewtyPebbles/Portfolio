// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var fs = require('fs');
import path from 'path';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let ret_val:any = {};
  let cache_file = path.join("public", "projects", req.headers["program_name"]?.toString() as string, "cache", "docs.json")
  if (!fs.existsSync(cache_file)){
    var pages:{[index: string]:string} = {};
    let docs_path = "public/projects/" + req.headers["program_name"] + "/docs";
    if (fs.existsSync(docs_path)) {
      const dir = fs.opendirSync(docs_path)
      let dirent;
      while ((dirent = dir.readSync()) !== null) {
        //console.log(dirent.name)
        let file_and_ext:string[] = dirent.name.split(".");
        //console.log("path: docs/" + req.headers["program_name"] + "/" + dirent.name)
        pages[file_and_ext[1]] = "projects/" + req.headers["program_name"] + "/docs/" + dirent.name;
      }
      dir.closeSync()
    }
    fs.writeFile(cache_file, JSON.stringify({pgs:pages}), (err: any) => {
      if (err) {
      console.error(err);
      }
      // file written successfully
    });
    ret_val = {pgs:pages}
  }
  else {
    let cache_json = fs.readFileSync(cache_file, 'utf8');
    ret_val = JSON.parse(cache_json)
  }
  
  res.status(200).json(ret_val)
}
