// 트레이스용 임시 컴포넌트 — 좌표 확정 후 삭제
// 소스: 惣絵図 (jmapps.ne.jp/kanazawazyo data_id=53)
// viewBox: 1000×800 (프로젝트 표준, 이미지 스케일 맞춤)
// 좌표 추출: 이미지 분석 (sozu_53.jpg 1532×1200 → SVG 1000×800, scale=0.6527, y_off=8.4)
export default function CastleMapTrace() {
  return (
    <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}>

      {/* 트레이스 기준 이미지 — 완료 후 제거 */}
      <image href="/ref/sozu_53.jpg" x="0" y="0"
        width="1000" height="800" opacity="0.55" />

      {/* 외해자 — 성 전체 외곽 윤곽선 (6점 다각형, 좌하단 대각선 경계 포함) */}
      <polygon id="outer-moat" data-type="moat"
        points="65,64 905,74 905,426 829,426 829,613 225,730"
        fill="none" stroke="#4a7a9a" strokeWidth="3" opacity="0.6" />

      {/* 본환 — 좌측 개방 마당 */}
      <polygon id="honmaru" data-type="zone"
        points="65,87 400,87 400,430 330,613 115,613"
        fill="#c4a882" opacity="0.35" stroke="#c4a882" strokeWidth="2" />

      {/* 천수대 — 본환 내부 북서 모서리 */}
      <rect id="tenshu-dai" data-type="building"
        x="65" y="160" width="55" height="70"
        fill="none" stroke="#ff4444" strokeWidth="3" />

      {/* 가호쿠 망루 — 본환 서쪽 입구 */}
      <rect id="kahoku-turret" data-type="building"
        x="65" y="358" width="60" height="53"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 니노마루 — 우측 밀집 건물군 */}
      <polygon id="ninomaru" data-type="zone"
        points="617,333 905,333 905,613 617,613"
        fill="#c4a882" opacity="0.35" stroke="#c4a882" strokeWidth="2" />

      {/* 산노마루 — 하단 넓은 구역 */}
      <polygon id="sannomaru" data-type="zone"
        points="115,613 829,613 829,730 225,730"
        fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="2" />

      {/* 히시 망루 — 니노마루 북서쪽 모서리 */}
      <rect id="hishi-turret" data-type="building"
        x="617" y="333" width="40" height="50"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 오십간 장옥 — 히시 망루에서 동쪽으로 (긴 건물) */}
      <rect id="gojikken-nagaya" data-type="building"
        x="657" y="333" width="248" height="45"
        fill="none" stroke="#8fbcbb" strokeWidth="2.5" />

      {/* 내해자 — 본환·니노마루 남쪽 경계선 */}
      <line id="inner-moat"
        x1="115" y1="613" x2="829" y2="613"
        stroke="#3a6a8a" strokeWidth="8" opacity="0.5" />

      {/* 레이블 */}
      {[
        { id: 'honmaru',    x: 220, y: 350, label: '本丸' },
        { id: 'ninomaru',   x: 761, y: 475, label: '二の丸' },
        { id: 'sannomaru',  x: 470, y: 675, label: '三の丸' },
        { id: 'tenshu-dai', x: 92,  y: 205, label: '天守台' },
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
