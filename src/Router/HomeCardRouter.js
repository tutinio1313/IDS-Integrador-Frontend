import Paths from "./Paths/HomeCardPaths.json";

export default function HomeCardRouter(param) { 

    for(let i = 0; i < Paths.length;i++)
    {
          if(Paths[i].name == param)
          {
                return Paths[0].Body;
          }
          else
          {
        }
    }
    alert("Oops no se ha encontrado el link");
    return null;
}