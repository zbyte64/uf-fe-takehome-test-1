import * as React from 'react';

function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.name}, ${info.state}`;

  return (
    <div>
      <div>
        {displayName} |{' '}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
      </div>
      <img width={240} alt="" src={info.image} />
    </div>
  );
}

export default React.memo(CityInfo);