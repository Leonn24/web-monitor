import { checkUrl, } from "./src/tools/checkUrl";
import { Request, requests } from "./src/tools/request";


const checkUrls = async (requests: Request[]) => {
  await Promise.all (requests.map(async (request) => {
    await checkUrl(request);
   })
  );
}

checkUrls(requests);



