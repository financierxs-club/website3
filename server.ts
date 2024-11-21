// server.ts
import { serveFile, serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

//import { serveDir, serveFile } from "jsr:@std/http/file-server";


Deno.serve((req: Request) => {
    let filePath = new URL(req.url).pathname;

    if (filePath === "/") {
      filePath = "/index.html";
    }


    console.log(filePath)

    return serveFile(req, `./public${filePath}`);

//  if (pathname === "/simple_file") {
//    return serveFile(req, "./path/to/file.txt");
//  }

//  if (pathname.startsWith("/static")) {
    /*return serveDir(req, {
      fsRoot: "./public",
      urlRoot: "/",
    });*/
//  }

//  return new Response("404: Not Found", {
//    status: 404,
//  });
});


/*const server = serve(_, { port: 8000 });
console.log("HTTP webserver running. Access it at: http://localhost:8000/");

for await (const request of server) {
  const url = new URL(request.url, `http://${request.headers.get("host")}`);
  let filePath = url.pathname;

  if (filePath === "/") {
    filePath = "/index.html";
  }

  try {
    const response = await serveFile(request, `./public${filePath}`);
    request.respond(response);
  } catch {
    request.respond({ status: 404, body: "File not found" });
  }
}*/
