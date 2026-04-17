import { useState } from 'react';
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
  const [eraIndex, setEraIndex] = useState(6); // 기본값: current
  const currentEra = eras[eraIndex];

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
          {eras.map(e => (
            <span key={e.id}>{e.year}</span>
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', color: '#e8e0d4', marginBottom: '1rem' }}>
        {currentEra.year}년
      </p>

      {/* SVG — circle 플레이스홀더, UWO-37에서 polygon/rect 노드로 교체 예정 */}
      <svg
        viewBox="0 0 1000 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', background: '#1a1610', borderRadius: 8 }}
      >
        {places.map(place => {
          const state = (place.eras as Record<string, EraState>)[currentEra.id] ?? 'lost';
          const style = STATE_STYLE[state];
          const x = place.cx * 1000;
          const y = place.cy * 800;
          return (
            <circle
              key={place.id}
              cx={x}
              cy={y}
              r={18}
              fill={style.fill}
              opacity={style.opacity}
              stroke="#0f0f0f"
              strokeWidth={1.5}
            />
          );
        })}
      </svg>
    </div>
  );
}
