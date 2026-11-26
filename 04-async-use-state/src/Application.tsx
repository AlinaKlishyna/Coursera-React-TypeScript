import * as React from 'react';
// hover underlined items for information
import { HeroType, fetchHero } from './heroes';
import { HeroInformation } from './HeroInformation';

const Application = () => {
  const [hero, setHero] = React.useState<HeroType | string>('')
  React.useEffect(() => {
    fetchHero().then(h => {
      setHero(h)
    })
  }, [])
  return <main>
    {hero && <HeroInformation hero={hero} />}
  </main>;
};

export default Application;
