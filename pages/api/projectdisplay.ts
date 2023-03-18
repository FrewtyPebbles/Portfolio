// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    let ret_val:any = {};
    let cache_file = path.join("public", "projects", req.headers["program_name"]?.toString() as string, "cache", "project.json")

    if (!fs.existsSync(cache_file)){
        let f_path = path.join("public", "projects", req.headers["program_name"]?.toString() as string, req.headers["path"]?.toString() as string);
        let client_path = path.join("projects", req.headers["program_name"]?.toString() as string, req.headers["path"]?.toString() as string);
        var stack:{[key:string]:(string|{})}[] = [{}, {}]
        //var namestack:string[] = [] 
        if (fs.existsSync(f_path)) {
            var into_dir = () => {
                let dir = fs.opendirSync(f_path)
                let dirent:fs.Dirent|null;
                while ((dirent = dir.readSync()) !== null) {
                    if (dirent.isFile())
                    {
                        //create an entry for it.
                        stack[stack.length-1][path.join(client_path, dirent.name)] = fs.readFileSync(path.join(f_path, dirent.name), 'utf8');
                    }
                    else if (dirent.isDirectory()) {
                        //go into dir
                        //namestack.push(dirent.name);
                        client_path = path.join(client_path, dirent.name)
                        f_path = path.join(f_path, dirent.name)
                        stack.push({})
                        into_dir();
                        client_path = path.join(client_path, "..")
                        f_path = path.join(f_path, "..")
                    }
                }
                dir.closeSync()
                let laststack = stack[stack.length-1];
                stack[stack.length-2][client_path] = laststack;
                stack.pop()
                //namestack.pop()
                return
            }
            into_dir();
        }
        fs.writeFile(cache_file, JSON.stringify({root:stack[0]}), err => {
            if (err) {
            console.error(err);
            }
            // file written successfully
        });
        ret_val = {root:stack[0]}
    }
    else {
        let cache_json = fs.readFileSync(cache_file, 'utf8');
        ret_val = JSON.parse(cache_json)
    }
  res.status(200).json(ret_val)
}
