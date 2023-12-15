import { Request } from "../tools/request";

export class GithubRepos extends Request {
    constructor (url: string, config = {}){
        super(url,config)
    }
    compare(body: any):boolean {
        console.log(body[0].id)
        return true;
    }
}

export const githubRepo = new GithubRepos ('https://api.github.com/orgs/nodejs/repos')