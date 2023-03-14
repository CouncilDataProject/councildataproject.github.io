import { Location } from './Location';
import { useState } from 'react';
export function Locations() {
  const locationsData = [
    {
      linkUrl: 'https://councildataproject.org/seattle',
      imageUrl: 'imgs/seattle.jpg',
      imageDescription: 'Seattle skyline',
      title: 'Seattle, Washington',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/king-county',
      imageUrl: 'imgs/king-county.png',
      imageDescription:
        'King County, Puget Sound, Lake Washington, and Mt. Rainier',
      title: 'King County, Washington',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/portland',
      imageUrl: 'imgs/portland.jpg',
      imageDescription: 'Portland Downtown Waterfront',
      title: 'Portland, Oregon',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://www.openmontana.org/missoula-council-data-project',
      imageUrl: 'imgs/missoula.jpg',
      imageDescription: 'Missoula Skyline',
      title: 'Missoula, Montana',
      region: 'West',
      metadata: 'Maintained by Open Montana',
    },
    {
      linkUrl: 'https://councildataproject.org/denver',
      imageUrl: 'imgs/denver.jpg',
      imageDescription: 'Denver Skyline',
      title: 'Denver, Colorado',
      region: 'Midwest',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/alameda',
      imageUrl: 'imgs/alameda.jpg',
      imageDescription: 'Alameda Theatre in Night',
      title: 'Alameda, California',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/boston',
      imageUrl: 'imgs/boston.jpg',
      imageDescription: 'Boston Skyline from the waterfront',
      title: 'Boston, Massachusetts',
      region: 'East',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/oakland',
      imageUrl: 'imgs/oakland.jpeg',
      imageDescription: 'Oakland Skyline',
      title: 'Oakland, California',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/charlotte',
      imageUrl: 'imgs/charlotte.jpg',
      imageDescription: 'Charlotte skyline',
      title: 'Charlotte, North Carolina',
      region: 'South',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/san-jose',
      imageUrl: 'imgs/san-jose.jpeg',
      imageDescription: 'San José City Hall Rotunda',
      title: 'San José, California',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/mountain-view',
      imageUrl: 'imgs/mountain-view.jpeg',
      imageDescription:
        'Mountain View City Hall and Center for the Performing Arts',
      title: 'Mountain View, California',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/milwaukee',
      imageUrl: 'imgs/milwaukee.jpg',
      imageDescription: 'Milwaukee Downtown Waterfront',
      title: 'Milwaukee, Wisconsin',
      region: 'Midwest',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/long-beach',
      imageUrl: 'imgs/long-beach.jpg',
      imageDescription: 'Long Beach Rainbow Harbow',
      title: 'Long Beach, California',
      region: 'West',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/albuquerque',
      imageUrl: 'imgs/albuquerque.jpg',
      imageDescription: 'Albuquerque downtown skyline',
      title: 'Albuquerque, New Mexico',
      region: 'South',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/richmond',
      imageUrl: 'imgs/richmond.jpeg',
      imageDescription: 'Richmond city skyline',
      title: 'Richmond, Virginia',
      region: 'South',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/louisville',
      imageUrl: 'imgs/louisville.jpeg',
      imageDescription: 'Louisville skyline with river',
      title: 'Louisville, Kentucky',
      region: 'South',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/atlanta',
      imageUrl: 'imgs/atlanta.jpg',
      imageDescription: 'Atlanta skyline looking at the ferris wheel',
      title: 'Atlanta, Georgia',
      region: 'South',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://councildataproject.org/pittsburgh-pa',
      imageUrl: 'imgs/pittsburgh.jpg',
      imageDescription: 'Pittsburgh skyline and Point State Park',
      title: 'Pittsburgh, Pennsylvania',
      region: 'Midwest',
      metadata: 'Maintained by the CDP Core Team',
    },
    {
      linkUrl: 'https://sunshine-request.github.io/cdp-asheville/',
      imageUrl: 'imgs/asheville.jpg',
      imageDescription: 'Asheville city skyline and mountains and hills behind',
      title: 'Asheville, North Carolina',
      region: 'South',
      metadata: 'Maintained by Sunshine Labs and Code for Asheville',
    },
    {
      linkUrl:
        'https://www.openmontana.org/montana-legislature-council-data-project/#/events',
      imageUrl: 'imgs/montana-st-leg.jpg',
      imageDescription: 'Montana state capital building and garden',
      title: 'Montana State Legislature',
      region: 'West',
      metadata: 'Maintained by Open Montana',
    },
    {
      linkUrl:
        'https://github.com/CouncilDataProject/cookiecutter-cdp-deployment#readme',
      imageUrl: 'imgs/city-illustration.png',
      imageDescription: 'An illustration of a city.',
      title: 'Your Location?',
      region: 'All',
      metadata: 'Want CDP for your location/council? Click this card!',
    },
  ];
  const regions = ['All', 'West', 'East', 'South', 'Midwest'];
  const [selectedRegion, setSelectedRegion] = useState('All');
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  const filteredLocations =
    selectedRegion === 'All'
      ? locationsData
      : locationsData.filter((location) => location.region === selectedRegion);
  return (
    <section
      id="locations"
      className="cdp-bg-light-grey"
      style={{ padding: '2rem 0' }}
    >
      <div className="mzp-l-content mzp-t-content-xl">
        <h2 className="mzp-u-title-md">Locations</h2>
        <p style={{ marginBottom: '4rem' }}>
          All currently maintained Council Data Project locations.
        </p>
        <div>
          <label htmlFor="region-select">Filter by region:</label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div className="mzp-l-card-third">
          {filteredLocations.map((location) => (
            <Location key={location.linkUrl} data={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
