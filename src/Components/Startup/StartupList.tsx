import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await StartupHttpService.getStartups();
        setStartups(list);
        console.log(list);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return <Fragment></Fragment>;
}
