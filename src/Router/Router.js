import Paths from "./Paths/URLPaths.json";

export default function Router(param) { 

    for(let i = 0; i < Paths.length;i++)
    {
          if(Paths[i].name == param)
          {
                return Paths[0].link + Paths[i].link;
          }
    }
    alert("Oops no se ha encontrado el link");
    return null;
}