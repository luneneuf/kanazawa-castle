type NodeStyle = { fill: string; opacity: number };
type Props = {
  nodeStyles?: Record<string, NodeStyle>;
};

const DEFAULT_STYLE: NodeStyle = { fill: '#8b7355', opacity: 1 };

const LABELS = [
  { id: 'tenshu-dai', x: 222, y: 164, label: '天守台' },
  { id: 'honmaru',    x: 305, y: 260, label: '本丸' },
  { id: 'ninomaru',   x: 665, y: 327, label: '二の丸' },
  { id: 'sannomaru',  x: 500, y: 660, label: '三の丸' },
];

export default function CastleMap({ nodeStyles = {} }: Props) {
  const s = (id: string): NodeStyle => nodeStyles[id] ?? DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1000 800"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', background: '#1a1610', borderRadius: 8 }}
    >
      {/* 외해자 */}
      <rect
        id="outer-moat"
        data-type="moat"
        x="70" y="40" width="860" height="720"
        fill={s('outer-moat').fill}
        opacity={s('outer-moat').opacity}
        stroke="#2a3a4a"
        strokeWidth="2"
      />

      {/* 성내 대지 */}
      <rect x="140" y="100" width="720" height="600" fill="#4a3d2a" />

      {/* 내해자 */}
      <rect
        id="inner-moat"
        data-type="moat"
        x="140" y="555" width="720" height="65"
        fill={s('inner-moat').fill}
        opacity={s('inner-moat').opacity}
        stroke="#2a3a4a"
        strokeWidth="1.5"
      />

      {/* 혼마루 */}
      <polygon
        id="honmaru"
        data-type="zone"
        points="140,100 470,100 470,420 140,420"
        fill={s('honmaru').fill}
        opacity={s('honmaru').opacity}
        stroke="#0f0f0f"
        strokeWidth="1.5"
      />

      {/* 니노마루 */}
      <polygon
        id="ninomaru"
        data-type="zone"
        points="470,100 860,100 860,555 470,555"
        fill={s('ninomaru').fill}
        opacity={s('ninomaru').opacity}
        stroke="#0f0f0f"
        strokeWidth="1.5"
      />

      {/* 산노마루 */}
      <polygon
        id="sannomaru"
        data-type="zone"
        points="140,620 860,620 860,700 140,700"
        fill={s('sannomaru').fill}
        opacity={s('sannomaru').opacity}
        stroke="#0f0f0f"
        strokeWidth="1.5"
      />

      {/* 천수대 */}
      <rect
        id="tenshu-dai"
        data-type="building"
        x="155" y="112" width="135" height="105"
        fill={s('tenshu-dai').fill}
        opacity={s('tenshu-dai').opacity}
        stroke="#c4a882"
        strokeWidth="1.5"
      />

      {/* 가호쿠 망루 */}
      <rect
        id="kahoku-turret"
        data-type="building"
        x="755" y="95" width="105" height="80"
        fill={s('kahoku-turret').fill}
        opacity={s('kahoku-turret').opacity}
        stroke="#8fbcbb"
        strokeWidth="1.5"
      />

      {/* 히시 망루 */}
      <polygon
        id="hishi-turret"
        data-type="building"
        points="470,510 510,492 550,510 510,528"
        fill={s('hishi-turret').fill}
        opacity={s('hishi-turret').opacity}
        stroke="#8fbcbb"
        strokeWidth="1.5"
      />

      {/* 오십간 장옥 */}
      <rect
        id="gojikken-nagaya"
        data-type="building"
        x="550" y="500" width="260" height="30"
        fill={s('gojikken-nagaya').fill}
        opacity={s('gojikken-nagaya').opacity}
        stroke="#8fbcbb"
        strokeWidth="1.5"
      />

      {/* 레이블 */}
      {LABELS.map(({ id, x, y, label }) => (
        <text
          key={id}
          x={x} y={y}
          textAnchor="middle"
          fontSize="13"
          fill="#e8e0d4"
          opacity={s(id).opacity > 0.3 ? 0.9 : 0.3}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {label}
        </text>
      ))}
    </svg>
  );
}
