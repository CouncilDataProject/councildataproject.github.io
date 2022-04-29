import React from 'react';
import Location from './Location';

export default function Locations() {
  const locationsData = [
    {
      linkUrl: 'https://councildataproject.org/seattle',
      imageUrl: 'imgs/seattle.jpg',
      imageDescription: 'Seattle skyline',
      title: 'City of Seattle, Washington',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/king-county',
      imageUrl: 'imgs/king-county.png',
      imageDescription:
        'King County, Puget Sound, Lake Washington, and Mt. Rainier',
      title: 'King County, Washington',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/portland',
      imageUrl: 'imgs/portland.jpg',
      imageDescription: 'Portland Downtown Waterfront',
      title: 'City of Portland, Oregon',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://www.openmontana.org/missoula-council-data-project',
      imageUrl: 'imgs/missoula.jpg',
      imageDescription: 'Missoula Skyline',
      title: 'City of Missoula, Montana',
      metadata: 'Maintained by Open Montana',
    },
  ];

  return (
    <>
      <div id="instances" className="cdp-bg-light-grey">
        <div className="mzp-l-content mzp-t-content-xl">
          <h1 className="mzp-c-article-title">Locations</h1>
          <p>All currently maintained Council Data Project locations.</p>
          <div className="mzp-l-card-third">
            {locationsData.map((instance) => (
              <Location key={instance.linkUrl} data={instance} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
