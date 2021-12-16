import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import StartupCard from "./StartupCard";

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
  }, [setStartups]);
  return (
    <Fragment>
      {startups.length === 0 && <p>Loading...</p>}
      {startups.length > 0 && (
        <div id="startup-list">
          {startups.map((item) => (
            <StartupCard startup={item} key={item.id} />
          ))}
        </div>
      )}
    </Fragment>
  );
}
