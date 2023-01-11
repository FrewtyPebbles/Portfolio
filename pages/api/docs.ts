// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var fs = require('fs');


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  var pages:{[index: string]:string} = {};
  let path = "public/projects/" + req.headers["program_name"] + "/docs";
  if (fs.existsSync(path)) {
    const dir = fs.opendirSync(path)
    let dirent;
    while ((dirent = dir.readSync()) !== null) {
      //console.log(dirent.name)
      let file_and_ext:string[] = dirent.name.split(".");
      //console.log("path: docs/" + req.headers["program_name"] + "/" + dirent.name)
      pages[file_and_ext[1]] = "projects/" + req.headers["program_name"] + "/docs/" + dirent.name;
    }
    dir.closeSync()
  }
  res.status(200).json({pgs:pages})
}
