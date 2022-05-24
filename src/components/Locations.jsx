import React from 'react';
import { Location } from './Location';

export function Locations() {
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
    {
      linkUrl: '#',
      imageUrl: 'imgs/city-illustration.png',
      imageDescription: 'An illustration of a city.',
      title: 'Your Location?',
      metadata: 'Want CDP for your location/council? Click this card!',
    },
  ];

  return (
    <section
      id="locations"
      className="cdp-bg-light-grey"
      style={{ padding: '2rem 0' }}>
      <div className="mzp-l-content mzp-t-content-xl">
        <h2 className="mzp-u-title-md">Locations</h2>
        <p style={{ marginBottom: '4rem' }}>
          All currently maintained Council Data Project locations.
        </p>
        <div className="mzp-l-card-third">
          {locationsData.map((location) => (
            <Location key={location.linkUrl} data={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
