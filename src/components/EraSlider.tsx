import { useState } from 'react';
import CastleMap from './CastleMap';
import eras from '../../public/data/eras.json';
import places from '../../public/data/places.json';

type EraState = 'standing' | 'restored' | 'ruin' | 'lost';

const STATE_STYLE: Record<EraState, { fill: string; opacity: number }> = {
  standing: { fill: '#c4a882', opacity: 1 },
  restored: { fill: '#8fbcbb', opacity: 1 },
  ruin:     { fill: '#6b5a45', opacity: 0.5 },
  lost:     { fill: '#3a3530', opacity: 0.2 },
};

export default function EraSlider() {
  const [eraIndex, setEraIndex] = useState(6);
  const currentEra = eras[eraIndex];

  const nodeStyles = Object.fromEntries(
    places.map(place => {
      const state = (place.eras as Record<string, EraState>)[currentEra.id] ?? 'lost';
      return [place.id, STATE_STYLE[state]];
    })
  );

  return (
    <div style={{ width: '100%', maxWidth: 720, margin: '0 auto', padding: '0 1rem' }}>
      <div style={{ margin: '1.5rem 0 0.5rem' }}>
        <input
          type="range"
          min={0}
          max={eras.length - 1}
          value={eraIndex}
          onChange={e => setEraIndex(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#c4a882' }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.7rem',
          color: '#8a7a6a',
          marginTop: '0.25rem',
        }}>
          {eras.map(e => <span key={e.id}>{e.year}</span>)}
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', color: '#e8e0d4', marginBottom: '1rem' }}>
        {currentEra.label?.ko ?? currentEra.year}
      </p>

      <CastleMap nodeStyles={nodeStyles} />
    </div>
  );
}
