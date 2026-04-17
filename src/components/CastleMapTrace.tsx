// 트레이스용 임시 컴포넌트 — 좌표 확정 후 삭제
// 소스: 惣絵図 (jmapps.ne.jp/kanazawazyo data_id=53)
// viewBox: 1000×800 (프로젝트 표준, 이미지 스케일 맞춤)
export default function CastleMapTrace() {
  return (
    <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}>

      {/* 트레이스 기준 이미지 — 완료 후 제거 */}
      <image href="/ref/sozu_53.jpg" x="0" y="0"
        width="1000" height="800" opacity="0.55" />

      {/* 외해자 — 성 전체 외곽 윤곽선 */}
      <polygon id="outer-moat" data-type="moat"
        points="40,75 960,75 960,775 40,775"
        fill="none" stroke="#4a7a9a" strokeWidth="3" opacity="0.6" />

      {/* 본환 — 좌측 개방 마당 */}
      <polygon id="honmaru" data-type="zone"
        points="75,195 385,195 385,430 330,535 75,535"
        fill="#c4a882" opacity="0.35" stroke="#c4a882" strokeWidth="2" />

      {/* 천수대 — 본환 내부 북서 모서리 */}
      <rect id="tenshu-dai" data-type="building"
        x="105" y="210" width="80" height="65"
        fill="none" stroke="#ff4444" strokeWidth="3" />

      {/* 가호쿠 망루 — 본환 서쪽 입구 */}
      <rect id="kahoku-turret" data-type="building"
        x="58" y="345" width="58" height="38"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 니노마루 — 우하단 밀집 건물군 */}
      <polygon id="ninomaru" data-type="zone"
        points="845,455 960,455 960,775 845,775"
        fill="#c4a882" opacity="0.35" stroke="#c4a882" strokeWidth="2" />

      {/* 산노마루 — 하단 넓은 구역 */}
      <polygon id="sannomaru" data-type="zone"
        points="75,540 840,540 840,775 75,775"
        fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="2" />

      {/* 히시 망루 — 니노마루 북서쪽 모서리 */}
      <rect id="hishi-turret" data-type="building"
        x="820" y="385" width="50" height="55"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 오십간 장옥 — 히시 망루에서 우측으로 */}
      <rect id="gojikken-nagaya" data-type="building"
        x="870" y="390" width="150" height="28"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 내해자 — 본환 남쪽 경계선 */}
      <line id="inner-moat"
        x1="75" y1="535" x2="845" y2="535"
        stroke="#3a6a8a" strokeWidth="8" opacity="0.5" />

      {/* 레이블 */}
      {[
        { id: 'honmaru',    x: 225, y: 360, label: '本丸' },
        { id: 'ninomaru',   x: 900, y: 615, label: '二の丸' },
        { id: 'sannomaru',  x: 455, y: 655, label: '三の丸' },
        { id: 'tenshu-dai', x: 145, y: 245, label: '天守台' },
      ].map(({ id, x, y, label }) => (
        <text key={id} x={x} y={y}
          textAnchor="middle" fontSize="14" fill="#fff"
          style={{ pointerEvents: 'none', userSelect: 'none' }}>
          {label}
        </text>
      ))}
    </svg>
  );
}
