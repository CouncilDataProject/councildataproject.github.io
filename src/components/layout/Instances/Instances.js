import React from "react";
import Instance from "./Instance";

export default function Instances() {
  const instancesData = [
    {
      linkUrl: "https://councildataproject.org/seattle",
      imageUrl: "imgs/seattle.jpg",
      imageDescription: "Seattle skyline",
      title: "Seattle, Washington",
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
      title: "Portland, Oregon",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://www.openmontana.org/missoula-council-data-project",
      imageUrl: "imgs/missoula.jpg",
      imageDescription: "Missoula Skyline",
      title: "Missoula, Montana",
      metadata: "Maintained by Open Montana",
    },
    {
      linkUrl: "https://councildataproject.org/denver",
      imageUrl: "imgs/denver.jpg",
      imageDescription: "Denver Skyline",
      title: "Denver, Colorado",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://councildataproject.org/alameda",
      imageUrl: "imgs/alameda.jpg",
      imageDescription: "Alameda Theatre in Night",
      title: "Alameda, California",
      metadata: "Maintained by the CDP Core Team",
    },
    {
      linkUrl: "https://councildataproject.org/boston",
      imageUrl: "imgs/boston.jpg",
      imageDescription: "Boston Skyline from the waterfront",
      title: "Boston, Massachusetts",
      metadata: "Maintained by the CDP Core Team",
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
