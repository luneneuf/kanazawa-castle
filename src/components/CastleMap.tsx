export default function CastleMap() {
  return (
    <svg
      viewBox="0 0 1000 800"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* 외해자 — 성 전체 외곽 해자 */}
      <rect
        id="outer-moat"
        data-type="moat"
        data-era-state="current:standing"
        x="70" y="40" width="860" height="720"
        fill="#3a5a7a"
        opacity="0.6"
      />

      {/* 성내 대지 (해자 안쪽 지면) */}
      <rect x="140" y="100" width="720" height="600" fill="#4a3d2a" />

      {/* 내해자 — 니노마루·산노마루 사이 */}
      <rect
        id="inner-moat"
        data-type="moat"
        data-era-state="current:standing"
        x="140" y="555" width="720" height="65"
        fill="#3a5a7a"
        opacity="0.6"
      />

      {/* 혼마루 — 본성(本丸), 북서구역 */}
      <polygon
        id="honmaru"
        data-type="zone"
        data-era-state="current:standing"
        points="140,100 470,100 470,420 140,420"
        fill="#8b7355"
        stroke="#c4a882"
        strokeWidth="2"
      />

      {/* 니노마루 — 이성(二の丸), 중앙-동쪽 */}
      <polygon
        id="ninomaru"
        data-type="zone"
        data-era-state="current:standing"
        points="470,100 860,100 860,555 470,555"
        fill="#9b8365"
        stroke="#c4a882"
        strokeWidth="2"
      />

      {/* 산노마루 — 삼성(三の丸), 남쪽 */}
      <polygon
        id="sannomaru"
        data-type="zone"
        data-era-state="current:standing"
        points="140,620 860,620 860,700 140,700"
        fill="#7a6a50"
        stroke="#c4a882"
        strokeWidth="1.5"
      />

      {/* 천수대 — 天守台, 혼마루 북서단 석단(폐허) */}
      <rect
        id="tenshu-dai"
        data-type="building"
        data-era-state="current:ruin"
        x="155" y="112" width="135" height="105"
        fill="#6b5a45"
        stroke="#c4a882"
        strokeWidth="1.5"
      />

      {/* 가호쿠 망루 — 河北門, 니노마루 북동 입구 (복원) */}
      <rect
        id="kahoku-turret"
        data-type="building"
        data-era-state="current:restored"
        x="755" y="95" width="105" height="80"
        fill="#c4a882"
        stroke="#e8d4a0"
        strokeWidth="1.5"
      />

      {/* 히시 망루 — 菱櫓, 니노마루 남서 모서리 (복원) */}
      <polygon
        id="hishi-turret"
        data-type="building"
        data-era-state="current:restored"
        points="470,510 510,492 550,510 510,528"
        fill="#c4a882"
        stroke="#e8d4a0"
        strokeWidth="1.5"
      />

      {/* 오십간 장옥 — 五十間長屋, 히시에서 동쪽으로 이어지는 긴 건물 (복원) */}
      <rect
        id="gojikken-nagaya"
        data-type="building"
        data-era-state="current:restored"
        x="550" y="500" width="260" height="30"
        fill="#c4a882"
        stroke="#e8d4a0"
        strokeWidth="1.5"
      />
    </svg>
  );
}
