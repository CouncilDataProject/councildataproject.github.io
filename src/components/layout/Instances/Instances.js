import React from "react";
import Instance from "./Instance";

export default function Instances() {
  const instancesData = [
    {
      linkUrl: "https://councildataproject.github.io/seattle",
      imageUrl: "imgs/seattle.jpg",
      imageDescription: "Seattle skyline",
      title: "City of Seattle, Washington",
      metadata: "Maintained by the CDP Core Team",
    },
  ];

  return (
    <>
      <div id="instances" className="cdp-bg-light-grey">
        <div className="mzp-l-content mzp-t-content-xl">
          <h1 className="mzp-c-article-title">CDP Instances</h1>
          <p>All currently maintained Council Data Project instances.</p>
          {instancesData.map((instance) => (
            <div className="mzp-l-card-third">
              <Instance data={instance} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
