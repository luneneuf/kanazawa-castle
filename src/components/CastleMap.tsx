type NodeStyle = { fill: string; opacity: number };
type Props = { nodeStyles?: Record<string, NodeStyle>; onNodeClick?: (id: string) => void };
const DEFAULT: NodeStyle = { fill: '#8b7355', opacity: 1 };

const LABELS = [
  { id: 'honmaru',       x: 220, y: 350, label: '本丸' },
  { id: 'ninomaru',      x: 761, y: 475, label: '二の丸' },
  { id: 'sannomaru',     x: 470, y: 675, label: '三の丸' },
  { id: 'tenshu-dai',    x: 92,  y: 205, label: '天守台' },
  { id: 'kahoku-turret', x: 222, y: 102, label: '河北門' },
];

const hoverOn  = (e: React.MouseEvent<SVGElement>) => { e.currentTarget.style.strokeWidth = '3'; };
const hoverOff = (e: React.MouseEvent<SVGElement>) => { e.currentTarget.style.strokeWidth = '1.5'; };

export default function CastleMap({ nodeStyles = {}, onNodeClick }: Props) {
  const s = (id: string): NodeStyle => nodeStyles[id] ?? DEFAULT;
  const click = (id: string) => onNodeClick?.(id);

  return (
    <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', borderRadius: 8 }}>

      {/* 레이어 1: 惣絵図 배경 */}
      <image href="/assets/castle_map.jpg"
        x="0" y="0" width="1000" height="800"
        opacity="0.9"
        preserveAspectRatio="xMidYMid meet" />

      {/* 외해자 — 클릭 대상 아님 */}
      <polygon id="outer-moat" data-type="moat"
        points="65,64 905,74 905,426 829,426 829,613 225,730"
        fill="none"
        stroke={s('outer-moat').fill}
        strokeWidth="3"
        opacity={s('outer-moat').opacity}
        style={{ cursor: 'default' }} />

      {/* 혼마루 */}
      <polygon id="honmaru" data-type="zone"
        points="65,87 400,87 400,430 330,613 115,613"
        fill={s('honmaru').fill}
        opacity={s('honmaru').opacity}
        stroke="#0f0f0f" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('honmaru')} />

      {/* 니노마루 */}
      <polygon id="ninomaru" data-type="zone"
        points="617,333 905,333 905,613 617,613"
        fill={s('ninomaru').fill}
        opacity={s('ninomaru').opacity}
        stroke="#0f0f0f" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('ninomaru')} />

      {/* 산노마루 */}
      <polygon id="sannomaru" data-type="zone"
        points="115,613 829,613 829,730 225,730"
        fill={s('sannomaru').fill}
        opacity={s('sannomaru').opacity}
        stroke="#0f0f0f" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('sannomaru')} />

      {/* 내해자 — 클릭 대상 아님 */}
      <line id="inner-moat"
        x1="115" y1="613" x2="829" y2="613"
        stroke={s('inner-moat').fill}
        strokeWidth="8"
        opacity={s('inner-moat').opacity}
        style={{ cursor: 'default' }} />

      {/* 천수대 */}
      <rect id="tenshu-dai" data-type="building"
        x="65" y="160" width="55" height="70"
        fill={s('tenshu-dai').fill}
        opacity={s('tenshu-dai').opacity}
        stroke="#c4a882" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('tenshu-dai')} />

      {/* 河北門 */}
      <rect id="kahoku-turret" data-type="building"
        x="195" y="108" width="55" height="35"
        fill={s('kahoku-turret').fill}
        opacity={s('kahoku-turret').opacity}
        stroke="#8fbcbb" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('kahoku-turret')} />

      {/* 히시 망루 */}
      <rect id="hishi-turret" data-type="building"
        x="630" y="490" width="52" height="52"
        fill={s('hishi-turret').fill}
        opacity={s('hishi-turret').opacity}
        stroke="#8fbcbb" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('hishi-turret')} />

      {/* 오십간 장옥 */}
      <rect id="gojikken-nagaya" data-type="building"
        x="680" y="500" width="220" height="28"
        fill={s('gojikken-nagaya').fill}
        opacity={s('gojikken-nagaya').opacity}
        stroke="#8fbcbb" strokeWidth="1.5"
        style={{ cursor: 'pointer' }}
        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
        onClick={() => click('gojikken-nagaya')} />

      {/* 레이블 */}
      {LABELS.map(({ id, x, y, label }) => (
        <text key={id} x={x} y={y}
          textAnchor="middle" fontSize="13"
          fill="#2a1f0f"
          opacity={s(id).opacity > 0.3 ? 0.9 : 0.3}
          style={{ pointerEvents: 'none', userSelect: 'none' }}>
          {label}
        </text>
      ))}
    </svg>
  );
}
