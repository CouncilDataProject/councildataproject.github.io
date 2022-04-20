import React from "react";
import Instance from "./Instance";

export default function Instances() {
  const instancesData = [
    {
      linkUrl: "https://councildataproject.org/seattle",
      imageUrl: "imgs/seattle.jpg",
      imageDescription: "Seattle skyline",
      title: "City of Seattle, Washington",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://councildataproject.org/king-county",
      imageUrl: "imgs/kc.png",
      imageDescription:
        "King County, Pudet Sound, Lake Washington, and Mt. Rainier",
      title: "King County, Washington",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://councildataproject.org/portland",
      imageUrl: "imgs/portland.jpg",
      imageDescription: "Portland Downtown Waterfront",
      title: "City of Portland, Oregon",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://www.openmontana.org/missoula-council-data-project",
      imageUrl: "imgs/missoula.jpg",
      imageDescription: "Missoula Skyline",
      title: "City of Missoula, Montana",
      metadata: "Maintained by Open Montana",
    },
  ];

  return (
    <>
      <div id="instances" className="cdp-bg-light-grey">
        <div className="mzp-l-content mzp-t-content-xl">
          <h1 className="mzp-c-article-title">CDP Instances</h1>
          <p>All currently maintained Council Data Project instances.</p>
          <div className="mzp-l-card-third">
            {instancesData.map((instance) => (
              <Instance key={instance.linkUrl} data={instance} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
