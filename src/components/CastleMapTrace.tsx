// 트레이스용 임시 컴포넌트 — 좌표 확정 후 삭제
// 소스: 惣絵図 (jmapps.ne.jp/kanazawazyo data_id=53), 1532×1200px
export default function CastleMapTrace() {
  return (
    <svg viewBox="0 0 1532 1200" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}>

      {/* 트레이스 기준 이미지 — 완료 후 제거 */}
      <image href="/ref/sozu_53.jpg" x="0" y="0"
        width="1532" height="1200" opacity="0.55" />

      {/* 외해자 — 외곽 경계 */}
      <polygon id="outer-moat" data-type="moat"
        points="68,40 1490,40 1490,860 1080,1060 68,1060"
        fill="#3a5a7a" opacity="0.25" stroke="#4a9aba" strokeWidth="3" />

      {/* 내해자 — 산노마루와 내성 사이 수평 경계 */}
      <rect id="inner-moat" data-type="moat"
        x="160" y="490" width="660" height="28"
        fill="#3a5a7a" opacity="0.5" stroke="#4a9aba" strokeWidth="2" />

      {/* 혼마루 — 좌측/서쪽 내성 구역 */}
      <polygon id="honmaru" data-type="zone"
        points="90,200 480,200 480,540 90,540"
        fill="#c4a882" opacity="0.45" stroke="#c4a882" strokeWidth="2.5" />

      {/* 니노마루 — 우측 밀집 궁전 건물군 */}
      <polygon id="ninomaru" data-type="zone"
        points="820,380 1480,380 1480,840 820,840"
        fill="#c4a882" opacity="0.45" stroke="#c4a882" strokeWidth="2.5" />

      {/* 산노마루 — 중앙-하단 개방 구역 */}
      <polygon id="sannomaru" data-type="zone"
        points="160,518 820,518 820,850 160,850"
        fill="#c4a882" opacity="0.35" stroke="#c4a882" strokeWidth="2" />

      {/* 천수대 — 혼마루 북서 모서리 석단 */}
      <rect id="tenshu-dai" data-type="building"
        x="92" y="206" width="95" height="75"
        fill="#ff6b6b" opacity="0.75" stroke="#ff4444" strokeWidth="2" />

      {/* 가호쿠 망루 — 혼마루 서쪽 입구 게이트 */}
      <rect id="kahoku-turret" data-type="building"
        x="132" y="324" width="60" height="42"
        fill="#8fbcbb" opacity="0.85" stroke="#5fa0a0" strokeWidth="2" />

      {/* 히시 망루 — 니노마루 서측 끝 */}
      <rect id="hishi-turret" data-type="building"
        x="820" y="382" width="52" height="52"
        fill="#8fbcbb" opacity="0.85" stroke="#5fa0a0" strokeWidth="2" />

      {/* 오십간 장옥 — 니노마루 북측 장랑 */}
      <rect id="gojikken-nagaya" data-type="building"
        x="872" y="382" width="230" height="32"
        fill="#8fbcbb" opacity="0.85" stroke="#5fa0a0" strokeWidth="2" />

      {/* 노드 ID 레이블 (트레이스 확인용) */}
      {[
        { id: 'honmaru',         x: 285,  y: 370, label: '本丸' },
        { id: 'ninomaru',        x: 1150, y: 610, label: '二の丸' },
        { id: 'sannomaru',       x: 490,  y: 690, label: '三の丸' },
        { id: 'tenshu-dai',      x: 139,  y: 248, label: '天守台' },
        { id: 'kahoku-turret',   x: 162,  y: 350, label: '河北門' },
        { id: 'hishi-turret',    x: 846,  y: 413, label: '菱櫓' },
        { id: 'gojikken-nagaya', x: 987,  y: 402, label: '長屋' },
      ].map(({ id, x, y, label }) => (
        <text key={id} x={x} y={y}
          textAnchor="middle" fontSize="18" fontWeight="bold"
          fill="#ffffff" stroke="#000000" strokeWidth="3" paintOrder="stroke"
          style={{ pointerEvents: 'none' }}>
          {label}
        </text>
      ))}
    </svg>
  );
}
