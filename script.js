(() => {
  'use strict';

  // Belt-and-suspenders for the CSS user-select/user-drag: none — blocks the
  // native image drag-ghost in browsers (Firefox) that don't honor
  // -webkit-user-drag.
  document.addEventListener('dragstart', (e) => e.preventDefault());

  // ---------------------------------------------------------------------
  // ASSET CONFIG — the only two lines to touch if a clip is swapped later.
  // "ขั้นของจริง.mp4" (cinematic golden-hour clip) = takeoff.
  // "ขาลง.mp4" (literally "descent leg") = landing.
  // ---------------------------------------------------------------------
  const TAKEOFF_VIDEO = 'anniversayry/ขั้นของจริง.mp4';
  const LANDING_VIDEO = 'anniversayry/ขาลง.mp4';

  // Background music playlist — cycles to the next track when one ends,
  // wrapping back to the first after the last. See anniversayry/music/.
  const PLAYLIST = [
    { title: "Moonwalkin' — LNGSHOT", src: 'anniversayry/music/01.mp3' },
    { title: 'Hoo Hoo — Dept', src: 'anniversayry/music/02.mp3' },
    { title: 'รักแรกพบ — Tattoo Colour', src: 'anniversayry/music/03.mp3' },
    { title: 'ONLY — Lee Hi', src: 'anniversayry/music/04.mp3' },
    { title: 'Folded — Kehlani', src: 'anniversayry/music/05.mp3' },
    { title: 'No One Else — Spicydisc', src: 'anniversayry/music/06.mp3' },
    { title: 'Honeymoon — Morvasu', src: 'anniversayry/music/07.mp3' },
    { title: 'Extraordinary — ANATOMY RABBIT', src: 'anniversayry/music/08.mp3' },
    { title: 'Sunkissed — URWORLD', src: 'anniversayry/music/09.mp3' },
    { title: 'Everyday — Patrickananda', src: 'anniversayry/music/10.mp3' },
    { title: 'Her — YENTED', src: 'anniversayry/music/11.mp3' },
    { title: 'Try Again — d.ear, Jaehyun', src: 'anniversayry/music/12.mp3' },
    { title: 'goosebumps — Travis Scott ft. Kendrick Lamar', src: 'anniversayry/music/13.mp3' },
    { title: 'You — Don Toliver ft. Travis Scott', src: 'anniversayry/music/14.mp3' },
    { title: 'FE!N — Travis Scott ft. Playboi Carti', src: 'anniversayry/music/15.mp3' },
  ];

  // Relationship timeline — one entry per gellery/<n> folder. `main` is the
  // large centered photo/clip (same frame size on every card); `chips` are
  // the small fan-out photos/clips — count varies per memory, matching
  // however many non-main files actually live in that folder.
  // Everything is served from gellery-thumb — the same photos/clips resized
  // way down (originals are full iPhone-camera resolution and 4K/60fps
  // video, several GB total for something only ever shown at a few hundred
  // px) so the browser isn't decoding dozens of multi-MB files at once, and
  // the repo stays a reasonable size to push to GitHub. See resize-thumbs.js
  // / transcode-memory-videos.js. Raw originals stay untouched in gellery/.
  function media(dir, name) {
    const isVideo = /\.mp4$/i.test(name);
    return { src: `gellery-thumb/${dir}/${name}`, type: isVideo ? 'video' : 'image' };
  }

  const TIMELINE = [
    {
      date: '24 กันยายน 2568',
      story: 'เอาจริงๆ อันนี้เป็นการไปเที่ยวที่โคตรฮา คบกันยังไม่ถึงเดือนเลย ได้ไปเที่ยวด้วยกันละ อันนี้ก็ถือว่าเป็นครั้งแรกของกูหลายเรื่องเลยอ่ะ ได้กินข้าวกับแฟนดูหนังกับแฟนถ่าย Photo Booth กับแฟนไอ้เหี้ย โคตรมีความสุขอ่ะไอ้สัตว์ ไปกันเเบบงงๆ555',
      main: media('1', 'main.mp4'),
      chips: ['IMG_0210.jpg', 'IMG_0211.jpg', 'IMG_0216.jpg'].map((n) => media('1', n)),
    },
    {
      date: '1 และ 29 พฤศจิกายน 2568',
      story: 'ไปลาดกระบังด้วยกันนนนนน!!!! เราไปลาดกระบังด้วยกันตั้ง สองรอบในหนึ่งเดือนโคตรบ้า ไปการบินทั้งวันนน เเละอีกวันก็ ไปเทคโนโลยีแล้วเราก็ได้ไปดูหนัง Zootophia 2 โดยที่มีพี่ขวัญเป็นคนเลี้ยง555555 ขอบคุณครับบบ',
      main: media('2', 'main.jpg'),
      chips: ['IMG_0356.jpg', 'IMG_0606.jpg', 'IMG_0608.jpg', 'IMG_0609.jpg', 'IMG_0610.jpg', 'IMG_0621.jpg', 'IMG_0622.jpg'].map((n) => media('2', n)),
    },
    {
      date: '19 ธันวาคม 2568',
      story: 'ไปดรีมเวิลด์ด้วยกันนนนน!!!! วันนี้เป็นวันที่โคตรมัน แม่งไปถึงก็เล่นครึ่งเล่นตั้งแต่เช้ายันเลิกเลย เกือบ 10 ครึ่งเล่นมั้ง ไอ้ขวัญพากูไปเล่นอันแรกก็ไว้กลิ้งเลย ต่อด้วยรถไฟเหาะ แทบตาย ยิ่งทอร์นาโดนะกูเดส แต่โดยรวม สนุกมากกกก มึงอ่ะชอบเล่น Disco สุด เล่นตั้งสองรอบ ไม่อ้วกหรอ555 ถ้าครั้งหน้ามีอีกไปเล่นสวนสยามกันไหมหรือว่าเวอร์เลยก็ไปดิสนีย์แลนด์กัน555 เเม่งเล่นซะคุ้มเรย5555',
      main: media('3', 'main.jpg'),
      chips: ['IMG_0776.mp4', 'IMG_0777.mp4', 'IMG_0793.jpg', 'IMG_0794.jpg', 'IMG_0796.jpg'].map((n) => media('3', n)),
    },
    {
      date: '4-9 มกราคม 2569',
      story: 'งานลูกเสือกูให้เลยโคตรแบบ ทดสอบความรัก อยู่ใกล้กันแค่เอื้อมแต่คุยไม่ได้เพราะติดหน้าที่ 😭😭😭\nโคตรแซด โคตรซึมแต่ก็ได้มีคุยกันบ้างแหละเราได้เล่นอะไรนะ เจ็ตสกีห้องสุดท้ายสนุกสุดละ แต่เศร้าเศร้ากูทำรองเท้าหาย😭 แต่ว่าช่วงเวลาตอนนั้นน่ะโคตรอยากคุยกับมึงอ่ะ เเต่คุยไม่ได้ ฝึกอดทนจนจัด',
      main: media('4', 'main.mp4'),
      chips: ['IMG_1036.jpg', 'IMG_1145.jpg', 'IMG_1148.mp4'].map((n) => media('4', n)),
    },
    {
      date: '4 มีนาคม 2569',
      story: 'อันนี้เป็นครั้งแรกที่เราไปเดทกันแบบจริงๆจังจัง โคตรมีความสุขอ่ะวันนั้นน่ะ เราแบบเที่ยวกันทั้งวันตั้งแต่กี่โมงวะตั้งแต่ตั้งแต่ 7 โมงปะ เราเที่ยวอย่างเดียวเลยเราเที่ยวจนลืมกินข้าว5555 กูยังจำวันนั้นได้อยู่เลย โหเราไปเจอกันตั้งแต่กี่โมงวะ 7 โมงป่ะ เราไปนั่งกันที่สวนจตุจักรแบบนานมากแต่เวลาผ่านไปเร็วเกินนนน ออกไปแล้วก็ไปดูหนัง Avatar 2 แต่ดูไม่รู้เรื่องเลย:)\nแล้วเราก็ไปMBKกันต่อ แล้วเราก็ไปหาซูชิกินกันซูชิลดราคาที่ดองกี้ แล้วเราก็ไปหอศิลป์ เเล้วเราก็ถ่ายรูปกัน แล้วมันก็เป็นครั้งแรกที่ kiss กัน เป็นวันที่เราไปเที่ยวกันนานมากแต่เวลาหมดโคตรไวอยากไปเที่ยวกันอีกอะะะ',
      main: media('5', 'main2.jpg'),
      chips: ['main.jpg', 'IMG_1799.jpg', 'IMG_1801.jpg', 'IMG_1808.jpg', 'IMG_1810.jpg', 'IMG_1828.mp4', 'IMG_1832.jpg'].map((n) => media('5', n)),
    },
    {
      date: '4 พฤษภาคม 2569',
      story: 'วันนี้ก็เป็นวันที่กูเหี้ยมากกกกกกก ที่ไปบ้านมึง ขอโทษค้าบ วันนี้เราไปกินบุฟเฟ่เกาหลีที่มึงกินเเต่ของกินเล่น-_- แล้วก็ไปเดินสวนเบญ แล้วก็เดินสยาม เดินแบบไม่สงสารคนเอ็นขาดเลย555 แล้วที่พีคคือโรงบาลโทรมาบอกว่าจะไปผ่าวันต่อวันโคตรพีค แล้วตอนเราเดินที่สวนเบญ แล้วเดินเยอะมากเลยนะเว้ย หรือไม่เยอะว่ะ5555 เออจากนั้นฝนแม่งตกโรงบาลก็บอกว่าห้ามป่วยไม่งั้นผ่าไม่ได้ ก็ต้องรีบเดินฝนก็ตก สุดท้ายก็ขึ้นรถไฟฟ้าได้สำเร็จจจจ โคตรวุ่นวาย5555',
      main: media('6', 'main2.jpg'),
      chips: ['main.jpg', 'IMG_2470.jpg', 'IMG_2473.jpg', 'IMG_2476.jpg', 'IMG_2479.jpg', 'IMG_2488.jpg', 'IMG_2492.jpg', 'IMG_2501.jpg'].map((n) => media('6', n)),
    },
    {
      date: '12 สิงหาคม 2569',
      story: 'ไปเที่ยวกันล่าสุดดด!!! วันนี้นะครับเราไปล่าแสตมป์กันนน ล่ากันแบบททั้งวัน คตฮาเลยไปถึงร้าน พาสปอร์ตหมด ดีนะแก้ปัญหาได้ไม่งั้น ซวย แล้วเราก็กินไอติมกะทิกันก่อนออกเดินทาง ดังนั้นเราก็ล่าแสตมป์ไปเรื่อยเรื่อย มีไปทำบุญด้วยแต่กูไม่บอกหรอกนะว่ากูขอพรว่าอะไร :) เราก็เดินกันทั่วเลยทั่วเยาวราชอย่างงั้นแล้วก็ไปกินผัดไทยกันร้านโคตรหรูเลยมึงโคตรน่ารักเลย พอกินเสร็จไอ้เหี้ยฝนตกดีนะตุ๊กๆมา แล้วก็ต่อไปก็เป็นการผจญภัย ฝนตกหนักโคตรสาดมาใส่พวกเราอ่ะโคตรสนุกเลยโคตรมันน่ะ กว่าจะถึง MRT สามยอดตัวแฉะเลย เราไปไหนต่อนะอ๋อเซ็นทรัลลาดพร้าวเเล้วมึงก็พามึงพากูเข้าบิวเทียม แล้วก็ไปกินไอติม มึงกิน blizzards ultra smooth ชาเขียว กินได้ไงไม่รู้โคตรเยอะแล้วเราก็กลับบ้าน',
      main: media('7', 'main.jpg'),
      chips: ['IMG_3120.jpg', 'IMG_3124.jpg', 'IMG_3129.jpg', 'IMG_3133.jpg', 'IMG_3138.jpg', 'IMG_3147.jpg'].map((n) => media('7', n)),
    },
  ];

  // ---- Letter-scene background strip: every photo/clip from gellery/full,
  // split across the 4 rows. (IMG_1146 in memory 4 is a HEIC file the browser
  // can't decode — skipped here and in that memory's chips until it's
  // re-exported as a JPG.) ----
  const LETTER_MEDIA_THUMB_DIR = 'gellery-thumb/full/Picture (JPG)/';
  const LETTER_MEDIA_FILES = [
    '20250924_142237_341.mp4', '388BF123-3A35-42D5-A376-F36700BAF6E1.jpg', 'IMG_0186.jpg', 'IMG_0210.jpg',
    'IMG_0211.jpg', 'IMG_0216.jpg', 'IMG_0229.jpg', 'IMG_0231.jpg', 'IMG_0232.jpg', 'IMG_0234.jpg',
    'IMG_0356.jpg', 'IMG_0357.jpg', 'IMG_0373.jpg', 'IMG_0557.jpg', 'IMG_0558.jpg', 'IMG_0559.jpg',
    'IMG_0560.jpg', 'IMG_0562.jpg', 'IMG_0563.mp4', 'IMG_0564.jpg', 'IMG_0565.jpg', 'IMG_0566.jpg',
    'IMG_0567.jpg', 'IMG_0568.jpg', 'IMG_0569.jpg', 'IMG_0571.jpg', 'IMG_0580.jpg', 'IMG_0581.jpg',
    'IMG_0582.jpg', 'IMG_0583.jpg', 'IMG_0584.jpg', 'IMG_0585.jpg', 'IMG_0586.jpg', 'IMG_0592.jpg',
    'IMG_0598.jpg', 'IMG_0601.mp4', 'IMG_0602.jpg', 'IMG_0606.jpg', 'IMG_0608.jpg', 'IMG_0609.jpg',
    'IMG_0610.jpg', 'IMG_0611.jpg', 'IMG_0612.jpg', 'IMG_0613.jpg', 'IMG_0614.jpg', 'IMG_0615.jpg',
    'IMG_0621.jpg', 'IMG_0622.jpg', 'IMG_0623.jpg', 'IMG_0624.jpg', 'IMG_0625.jpg', 'IMG_0638.jpg',
    'IMG_0741.jpg', 'IMG_0760.jpg', 'IMG_0776.mp4', 'IMG_0777.mp4', 'IMG_0778.jpg', 'IMG_0779.jpg',
    'IMG_0780.mp4', 'IMG_0781.mp4', 'IMG_0793.jpg', 'IMG_0794.jpg', 'IMG_0796.jpg', 'IMG_0799.jpg',
    'IMG_0802.jpg', 'IMG_0805.jpg', 'IMG_0814.jpg', 'IMG_0821.jpg', 'IMG_1036.jpg', 'IMG_1037.mp4',
    'IMG_1145.jpg', 'IMG_1148.mp4', 'IMG_1185.jpg', 'IMG_1308.jpg', 'IMG_1372.jpg', 'IMG_1373.jpg',
    'IMG_1431.jpg', 'IMG_1432.jpg', 'IMG_1433.jpg', 'IMG_1550.jpg', 'IMG_1555.jpg', 'IMG_1556.jpg',
    'IMG_1709.jpg', 'IMG_1711.jpg', 'IMG_1795.jpg', 'IMG_1796.jpg', 'IMG_1797.jpg', 'IMG_1798.jpg',
    'IMG_1799.jpg', 'IMG_1801.jpg', 'IMG_1802.jpg', 'IMG_1803.mp4', 'IMG_1807.jpg', 'IMG_1808.jpg',
    'IMG_1810.jpg', 'IMG_1812.jpg', 'IMG_1814.jpg', 'IMG_1815.jpg', 'IMG_1816.jpg', 'IMG_1822.jpg',
    'IMG_1823.jpg', 'IMG_1824.jpg', 'IMG_1825.jpg', 'IMG_1826.jpg', 'IMG_1827.jpg', 'IMG_1828.mp4',
    'IMG_1829.jpg', 'IMG_1832.jpg', 'IMG_1833.jpg', 'IMG_2470.jpg', 'IMG_2471.jpg', 'IMG_2472.jpg',
    'IMG_2473.jpg', 'IMG_2474.jpg', 'IMG_2475.jpg', 'IMG_2476.jpg', 'IMG_2478.jpg', 'IMG_2479.jpg',
    'IMG_2480.jpg', 'IMG_2488.jpg', 'IMG_2490.jpg', 'IMG_2491.jpg', 'IMG_2492.jpg', 'IMG_2493.jpg',
    'IMG_2501.jpg', 'IMG_2681.jpg', 'IMG_2682.jpg', 'IMG_2721.jpg', 'IMG_2751.jpg', 'IMG_2752.jpg',
    'IMG_2821.jpg', 'IMG_2822.jpg', 'IMG_3120.jpg', 'IMG_3124.jpg', 'IMG_3125.jpg', 'IMG_3126.jpg',
    'IMG_3127.jpg', 'IMG_3129.jpg', 'IMG_3130.jpg', 'IMG_3131.mp4', 'IMG_3133.jpg', 'IMG_3134.jpg',
    'IMG_3138.jpg', 'IMG_3142.jpg', 'IMG_3143.jpg', 'IMG_3144.jpg', 'IMG_3146.jpg', 'IMG_3147.jpg',
    'IMG_3149.jpg', 'IMG_3151.jpg', 'IMG_3152.jpg', 'IMG_3167.jpg', 'IMG_3176.jpg', 'IMG_3190.jpg',
    'IMG_3234.jpg', 'IMG_3235.jpg', 'IMG_3236.jpg', 'IMG_3237.jpg', 'IMG_3240.jpg',
    'copy_2DAF2467-29F4-4F4F-BFF8-4D58D732DA75.mp4',
  ];
  // Videos here are transcoded copies too (see transcode-videos.js) — the
  // originals were 4K/60fps HEVC clips several hundred MB each, absurdly
  // heavy for something looping small in a background strip. Trimmed to 15s,
  // downscaled, and re-encoded as H.264 for both size and smoother decode.
  const LETTER_MEDIA = LETTER_MEDIA_FILES.map((name) => ({
    src: LETTER_MEDIA_THUMB_DIR + name,
    type: /\.mp4$/i.test(name) ? 'video' : 'image',
  }));

  // ---- Fan-out position for chip `i` of `n` around the main photo — evenly
  // spread around a full circle (radius grows a little with more chips so
  // they don't crowd each other), starting straight up and going clockwise.
  // FAN_SCALE keeps the spread in proportion to .memory-card's width in CSS
  // (300px / the 240px the radius numbers were originally tuned for) so
  // chips still land clear of the main photo and the date underneath it. ----
  const FAN_SCALE = 260 / 240;

  function fanPosition(i, n) {
    const radius = (112 + Math.min(n, 8) * 6) * FAN_SCALE;
    const angle = -90 + (360 / n) * i;
    const rad = (angle * Math.PI) / 180;
    const tx = Math.round(Math.cos(rad) * radius);
    const ty = Math.round(Math.sin(rad) * radius);
    const rot = (i % 2 === 0 ? 1 : -1) * (6 + ((i * 5) % 10));
    return { tx, ty, rot };
  }

  // ---- Fan-chip width is fixed as a % of the card (see .fan-chip in CSS),
  // but a landscape photo at that same width comes out much shorter than a
  // portrait one — same width, way less visible area, reads as "smaller".
  // Once each chip's real media dimensions are known, rescale its width so
  // every chip covers roughly the same on-card area regardless of whether
  // the source photo is portrait or landscape. ----
  const CHIP_BASE_WIDTH_PCT = 30; // the width the CSS/base layout was tuned for
  const CHIP_BASE_ASPECT = 4 / 5; // ...at this aspect ratio (portrait)
  const CHIP_MIN_WIDTH_PCT = 22;
  const CHIP_MAX_WIDTH_PCT = 48;

  function applyChipAspect(chipEl, w, h) {
    if (!w || !h) return;
    const aspect = w / h;
    const pct = CHIP_BASE_WIDTH_PCT * Math.sqrt(aspect / CHIP_BASE_ASPECT);
    chipEl.style.width = `${Math.min(CHIP_MAX_WIDTH_PCT, Math.max(CHIP_MIN_WIDTH_PCT, pct))}%`;
  }

  function watchChipAspect(chipEl) {
    const mediaEl = chipEl.querySelector('img, video');
    if (!mediaEl) return;
    if (mediaEl.tagName === 'VIDEO') {
      mediaEl.addEventListener('loadedmetadata', () => applyChipAspect(chipEl, mediaEl.videoWidth, mediaEl.videoHeight));
    } else if (mediaEl.complete && mediaEl.naturalWidth) {
      applyChipAspect(chipEl, mediaEl.naturalWidth, mediaEl.naturalHeight);
    } else {
      mediaEl.addEventListener('load', () => applyChipAspect(chipEl, mediaEl.naturalWidth, mediaEl.naturalHeight));
    }
  }

  // `lazy: false` for the memory-card chips/main photo — those sit on cards
  // that are 3D-rotated (rotateY/translateZ) out to the sides of the ring.
  // Safari's loading="lazy" intersection check can get confused by that kind
  // of transform and never actually trigger the load for the off-angle
  // cards, leaving some photos permanently unloaded. The carousel is already
  // built lazily as a whole (see buildMemoryCards), so per-image lazy
  // loading isn't needed there anyway — only the flat, non-3D letter-scene
  // photo strip still uses it.
  function mediaTag(item, className, { autoplay = true, lazy = true } = {}) {
    if (item.type === 'video') {
      const autoAttr = autoplay ? 'autoplay' : '';
      return `<video class="${className}" src="${item.src}" muted loop playsinline preload="metadata" ${autoAttr}></video>`;
    }
    const loadingAttr = lazy ? 'loading="lazy"' : '';
    return `<img class="${className}" src="${item.src}" alt="" ${loadingAttr} decoding="async">`;
  }

  // ---------------------------------------------------------------------

  const bgPhoto = document.getElementById('bg-photo');
  const bgLayer = document.getElementById('bg-layer');
  const bgVideo = document.getElementById('bg-video');

  const bgMusic = document.getElementById('bg-music');
  const musicTitle = document.getElementById('music-title');
  const musicVolume = document.getElementById('music-volume');
  const musicPrevBtn = document.getElementById('music-prev');
  const musicNextBtn = document.getElementById('music-next');
  const musicWidget = document.getElementById('music-widget');
  const musicToggleBtn = document.getElementById('music-toggle');
  const musicDropdown = document.getElementById('music-dropdown');

  const screenHero = document.getElementById('screen-hero');
  const brandLogo = document.getElementById('brand-logo');
  const ticket = document.getElementById('ticket');
  const panelMain = document.querySelector('.ticket-panel-main');
  const panelStub = document.querySelector('.ticket-panel-stub');
  const tearHandle = document.getElementById('tear-handle');

  const screenMemory = document.getElementById('screen-memory');
  const memoryTrack = document.getElementById('memory-track');
  const backBtn = document.getElementById('back-btn');
  const nextBtn = document.getElementById('next-btn');

  const memoryDetail = document.getElementById('memory-detail');
  const memoryDetailBackdrop = document.getElementById('memory-detail-backdrop');
  const memoryDetailClose = document.getElementById('memory-detail-close');
  const detailDate = document.getElementById('detail-date');
  const detailText = document.getElementById('detail-text');

  const landingConfirm = document.getElementById('landing-confirm');
  const landingConfirmBackdrop = document.getElementById('landing-confirm-backdrop');
  const landingCancelBtn = document.getElementById('landing-cancel');
  const landingReadyBtn = document.getElementById('landing-ready');

  const screenLetter = document.getElementById('screen-letter');
  const letterPhotos = document.getElementById('letter-photos');
  const letterEnvelope = document.getElementById('letter-envelope');
  const letter = document.getElementById('letter');

  let currentClip = 'takeoff'; // 'takeoff' | 'landing' — tells the ended-handler what comes next
  let currentIndex = 0;

  // ---- Background music playlist: prev/next arrows, a volume slider, the
  // current title, and a chevron that expands a dropdown to jump straight to
  // any track — cycles forward automatically when a track ends. ----
  let currentTrack = 0;

  PLAYLIST.forEach((track, i) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'music-dropdown-item';
    item.textContent = track.title;
    item.addEventListener('click', () => {
      loadTrack(i, { autoplay: true });
      closeMusicDropdown();
    });
    musicDropdown.appendChild(item);
  });

  function highlightTrack() {
    Array.from(musicDropdown.children).forEach((item, i) => {
      item.classList.toggle('active', i === currentTrack);
    });
  }

  function loadTrack(i, { autoplay }) {
    currentTrack = (i + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[currentTrack];
    bgMusic.src = track.src;
    musicTitle.textContent = track.title;
    highlightTrack();
    if (autoplay) {
      bgMusic.play().catch(() => { /* needs a user gesture first — the tear/arrow click satisfies that */ });
    }
  }

  function closeMusicDropdown() {
    musicDropdown.classList.remove('open');
    musicToggleBtn.classList.remove('open');
    musicToggleBtn.setAttribute('aria-expanded', 'false');
  }

  musicToggleBtn.addEventListener('click', () => {
    const opening = !musicDropdown.classList.contains('open');
    musicDropdown.classList.toggle('open', opening);
    musicToggleBtn.classList.toggle('open', opening);
    musicToggleBtn.setAttribute('aria-expanded', String(opening));
  });

  document.addEventListener('click', (e) => {
    if (!musicWidget.contains(e.target)) closeMusicDropdown();
  });

  bgMusic.addEventListener('ended', () => loadTrack(currentTrack + 1, { autoplay: true }));
  musicPrevBtn.addEventListener('click', () => loadTrack(currentTrack - 1, { autoplay: true }));
  musicNextBtn.addEventListener('click', () => loadTrack(currentTrack + 1, { autoplay: true }));
  musicVolume.addEventListener('input', () => {
    bgMusic.volume = Number(musicVolume.value);
  });
  bgMusic.volume = Number(musicVolume.value);
  loadTrack(0, { autoplay: false });

  function loadClip(src, { loop, autoplay }) {
    bgVideo.loop = loop;
    if (bgVideo.getAttribute('src') !== src) {
      bgVideo.setAttribute('src', src);
    }
    bgVideo.currentTime = 0;
    if (autoplay) {
      bgVideo.play().catch(() => { /* autoplay may need a user gesture on some browsers; the CTA click satisfies that */ });
    } else {
      bgVideo.pause();
    }
  }

  // ---- State 1: footage is preloaded but stays paused and hidden — nothing plays until the CTA is pressed ----
  function initHero() {
    loadClip(TAKEOFF_VIDEO, { loop: false, autoplay: false });
  }

  // ---- State 1 -> 2: ticket tears apart, footage reveals and starts its real playback ----
  function beginJourney() {
    brandLogo.classList.add('dissolve');
    ticket.classList.add('torn');
    bgPhoto.classList.add('hidden');
    bgVideo.classList.add('sharp');
    bgLayer.classList.add('visible');
    bgLayer.classList.add('sharp-bg');

    currentClip = 'takeoff';
    loadClip(TAKEOFF_VIDEO, { loop: false, autoplay: true });

    bgMusic.play().catch(() => { /* autoplay may need a user gesture on some browsers; this click satisfies that */ });

    // The takeoff clip runs for a few seconds — plenty of time for the memory
    // photos/clips to load in the background before they're actually shown.
    buildMemoryCards();

    setTimeout(() => {
      screenHero.classList.add('hidden');
    }, 1000);
  }

  // ---- Drag-to-tear gesture on the boarding pass ----
  // The handle always travels straight down (top -> bottom of the perforation);
  // how far the two panels visually peel apart follows the ticket's current
  // layout direction (sideways when side-by-side, up/down when stacked on mobile).
  // Letting go mid-drag freezes it right there — the next grab resumes from that point.
  const TEAR_FRACTION = 0.65; // fraction of the track the handle must travel to commit
  const MAX_PEEL = 130; // px the panels can visually separate while still dragging
  let panelAxis = null; // 'x' | 'y'
  let pointerStartY = 0;
  let committedTraveled = 0; // px already banked from previous grab/release cycles
  let lastTraveled = 0;
  let dragRange = 1;
  let dragging = false;
  let journeyStarted = false;

  function setPanelOffset(px) {
    const half = px / 2;
    if (panelAxis === 'y') {
      panelMain.style.transform = `translateY(${-half}px) rotate(${-half * 0.05}deg)`;
      panelStub.style.transform = `translateY(${half}px) rotate(${half * 0.05}deg)`;
    } else {
      panelMain.style.transform = `translateX(${-half}px) rotate(${-half * 0.05}deg)`;
      panelStub.style.transform = `translateX(${half}px) rotate(${half * 0.05}deg)`;
    }
  }

  function onDragStart(e) {
    if (journeyStarted) return;
    dragging = true;
    tearHandle.style.animation = 'none'; // once touched, the idle pulse never fights a frozen position again
    panelAxis = getComputedStyle(ticket).flexDirection === 'column' ? 'y' : 'x';
    pointerStartY = e.clientY;
    dragRange = Math.max(40, document.getElementById('ticket-tear').getBoundingClientRect().height - 16);
    ticket.classList.add('dragging');
    tearHandle.setPointerCapture(e.pointerId);
  }

  function onDragMove(e) {
    if (!dragging) return;
    const traveled = Math.min(Math.max(0, committedTraveled + (e.clientY - pointerStartY)), dragRange);
    lastTraveled = traveled;
    const progress = traveled / dragRange;

    tearHandle.style.transform = `translate(-50%, ${traveled}px)`;
    setPanelOffset(progress * MAX_PEEL);

    if (progress >= TEAR_FRACTION) {
      dragging = false;
      journeyStarted = true;
      // Re-enable the transition first, with transforms still at the dragged
      // position (no value change yet, so nothing animates on this line) —
      // only THEN set the fly-apart target, so it continues smoothly from
      // wherever the drag was released instead of snapping back to center first.
      ticket.classList.remove('dragging');
      if (panelAxis === 'y') {
        panelMain.style.transform = 'translate(-8px, -90px) rotate(-5deg)';
        panelStub.style.transform = 'translate(8px, 90px) rotate(6deg)';
      } else {
        panelMain.style.transform = 'translate(-90px, -10px) rotate(-5deg)';
        panelStub.style.transform = 'translate(90px, 12px) rotate(6deg)';
      }
      panelMain.style.opacity = '0';
      panelStub.style.opacity = '0';
      ticket.classList.add('torn');
      beginJourney();
    }
  }

  function onDragEnd() {
    if (!dragging) return;
    dragging = false;
    committedTraveled = lastTraveled; // freeze here — resumed on the next grab
    ticket.classList.remove('dragging');
  }

  // ---- 3D carousel: cards sit at a fixed tilt angle apart (not tied to the
  // total count — a closed ring at 5 cards forces ~72° spacing, which rotates
  // the neighbors nearly edge-on into an invisible sliver). A moderate fixed
  // angle plus a wide radius keeps the immediate neighbors clearly visible
  // while still landing out near the screen edges. The whole track still
  // visibly spins to bring the target card to the front. ----
  const RING_ANGLE = 42; // degrees between adjacent cards
  let ringRadius = 0;

  // Built lazily, right when the journey actually begins (ticket tear) —
  // not at page load. Otherwise all 7 cards' photos and 6 video clips start
  // downloading immediately behind the hero screen, competing for bandwidth
  // on a slow connection before the visitor has even tapped anything.
  let memoryCardsBuilt = false;

  // Card 0 gets to fetch its media immediately; the other six have their
  // src swapped onto data-src so nothing about them hits the network yet,
  // then get released a few hundred ms apart — so the very first card the
  // visitor actually lands on isn't stuck competing for bandwidth with six
  // others they can't even see yet.
  function deferCardMedia(card) {
    card.querySelectorAll('img, video').forEach((el) => {
      const src = el.getAttribute('src');
      if (!src) return;
      el.dataset.deferredSrc = src;
      el.removeAttribute('src');
    });
  }

  function activateCardMedia(card) {
    card.querySelectorAll('img, video').forEach((el) => {
      const src = el.dataset.deferredSrc;
      if (!src) return;
      delete el.dataset.deferredSrc;
      el.src = src;
      if (el.tagName === 'VIDEO') el.load();
    });
  }

  // Measures the viewport and (re)sets every card's 3D resting transform.
  // Called once right after the cards are built, and again right before the
  // memory screen's first reveal — some mobile browsers (notably iOS
  // Safari, whose address-bar/toolbar resizes the viewport as it collapses
  // during scrolling) haven't settled on their final viewport size yet at
  // build time, which was making the ring radius (and so every card's
  // apparent 3D size) measure smaller than it should. Re-measuring right
  // before the reveal — well after that settling — fixes it without
  // depending on exactly when the resize happens.
  function layoutMemoryRing() {
    const stageWidth = memoryTrack.getBoundingClientRect().width;
    ringRadius = Math.round(stageWidth * 0.70);
    Array.from(memoryTrack.children).forEach((card, i) => {
      card.dataset.baseTransform = `translate(-50%, -50%) rotateY(${i * RING_ANGLE}deg) translateZ(${ringRadius}px)`;
      card.style.transform = card.dataset.baseTransform;
    });
  }

  function buildMemoryCards() {
    if (memoryCardsBuilt) return;
    memoryCardsBuilt = true;

    TIMELINE.forEach((entry) => {
      const n = entry.chips.length;
      const chipsHtml = entry.chips.map((chip, i) => {
        const { tx, ty, rot } = fanPosition(i, n);
        return `<div class="fan-chip" style="--i:${i}; --tx:${tx}px; --ty:${ty}px; --rot:${rot}deg">${mediaTag(chip, 'fan-chip-media', { autoplay: false, lazy: false })}</div>`;
      }).join('');

      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <div class="memory-photo-wrap">
          <div class="photo-fan" aria-hidden="true">${chipsHtml}</div>
          <div class="memory-photo">${mediaTag(entry.main, 'memory-photo-media', { autoplay: false, lazy: false })}</div>
        </div>
        <div class="memory-caption">
          <span class="memory-date">${entry.date}</span>
        </div>
      `;
      memoryTrack.appendChild(card);
      card.querySelectorAll('.fan-chip').forEach(watchChipAspect);
    });

    layoutMemoryRing();

    Array.from(memoryTrack.children).forEach((card, i) => {
      card.addEventListener('click', () => {
        if (i === currentIndex) {
          openMemoryDetail(i);
        } else {
          goTo(i);
        }
      });

      if (i === 0) return;
      deferCardMedia(card);
      setTimeout(() => activateCardMedia(card), i * 350);
    });
  }

  // ---- Click the centered card: open its detail sheet (story + event photos) ----
  function openMemoryDetail(i) {
    const entry = TIMELINE[i];
    detailDate.textContent = entry.date;
    detailText.textContent = entry.story;
    memoryDetail.classList.add('visible');
  }

  function closeMemoryDetail() {
    memoryDetail.classList.remove('visible');
  }

  function updateCarousel() {
    memoryTrack.style.transform = `rotateY(${-currentIndex * RING_ANGLE}deg)`;

    Array.from(memoryTrack.children).forEach((card, i) => {
      const dist = Math.abs(i - currentIndex);
      // Neighbors stay only faintly visible so the center card (photo + its
      // fan of small photos) reads as one clean composition, not several
      // full-opacity cards crowding/overlapping each other on screen.
      const opacity = dist === 0 ? 1 : dist === 1 ? 0.18 : 0;
      // Only the centered card gets pulled in slightly smaller — side cards
      // keep their own perspective-driven size untouched.
      const extraScale = dist === 0 ? ' scale(0.9)' : '';

      card.style.opacity = String(opacity);
      card.style.pointerEvents = dist <= 1 ? 'auto' : 'none';
      card.style.transform = card.dataset.baseTransform + extraScale;
      card.classList.toggle('fanned', dist === 0);

      // Only the centered card's clips actually play — the rest sit paused
      // on their first frame, so at most a couple of videos ever decode at
      // once instead of all of them simultaneously.
      card.querySelectorAll('video').forEach((v) => {
        if (dist === 0) v.play().catch(() => {});
        else v.pause();
      });
    });
  }

  // ---- State 2 -> 3: takeoff clip ends, first memory appears ----
  function showMemory() {
    bgLayer.classList.remove('visible');

    setTimeout(() => {
      currentIndex = 0;
      layoutMemoryRing();
      renderMemory();
      screenMemory.classList.remove('hidden');

      // One more pass after the screen has actually painted — covers mobile
      // Safari re-laying out the page slightly after becoming visible
      // (address bar settling, 3D compositing layer only fully establishing
      // post-paint) rather than in the same tick it was unhidden.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        layoutMemoryRing();
        updateCarousel();
      }));
    }, 900);
  }

  function renderMemory() {
    updateCarousel();
    backBtn.disabled = currentIndex === 0;
  }

  function goTo(newIndex) {
    if (newIndex < 0 || newIndex >= TIMELINE.length || newIndex === currentIndex) return;
    currentIndex = newIndex;
    activateCardMedia(memoryTrack.children[newIndex]); // don't wait on the stagger if the visitor gets here first
    // Mobile Safari's address bar only actually collapses on a real touch
    // interaction, not just time passing — so the viewport (and the ring
    // radius measured from it) may still be wrong even after the re-measure
    // in showMemory(). This tap is exactly that interaction, so re-measure
    // again here too.
    layoutMemoryRing();
    renderMemory();
  }

  let landingTriggered = false;

  // ---- State 4: advance timeline, or ask for landing confirmation on the final press ----
  function handleNext() {
    const atLastEvent = currentIndex >= TIMELINE.length - 1;

    if (!atLastEvent) {
      goTo(currentIndex + 1);
      return;
    }

    if (landingTriggered) return;
    landingConfirm.classList.add('visible');
  }

  // ---- State 4: step back to the previous memory ----
  function handleBack() {
    goTo(currentIndex - 1);
  }

  // ---- Swipe the memory carousel left/right with a finger (or mouse drag) ----
  const memoryViewport = document.querySelector('.memory-viewport');
  const SWIPE_THRESHOLD = 50;
  let swipeStartX = 0;
  let swiping = false;
  let justSwiped = false;

  memoryViewport.addEventListener('pointerdown', (e) => {
    swiping = true;
    swipeStartX = e.clientX;
  });

  memoryViewport.addEventListener('pointerup', (e) => {
    if (!swiping) return;
    swiping = false;
    const delta = e.clientX - swipeStartX;
    if (delta <= -SWIPE_THRESHOLD) {
      justSwiped = true;
      handleNext();
    } else if (delta >= SWIPE_THRESHOLD) {
      justSwiped = true;
      handleBack();
    }
  });

  memoryViewport.addEventListener('pointercancel', () => { swiping = false; });

  // A real swipe still ends in a 'click' on whatever card is under the finger —
  // swallow that one click (capture phase, runs before the card's own listener)
  // so a swipe never also re-triggers goTo/openMemoryDetail on release.
  memoryViewport.addEventListener('click', (e) => {
    if (justSwiped) {
      justSwiped = false;
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);

  // ---- State 4 -> 5: landing clip ----
  function goToLanding() {
    screenMemory.classList.add('hidden');

    setTimeout(() => {
      currentClip = 'landing';
      bgLayer.classList.add('visible');
      bgVideo.classList.add('sharp');
      bgLayer.classList.add('sharp-bg');
      loadClip(LANDING_VIDEO, { loop: false, autoplay: true });
    }, 900);
  }

  // ---- State 5 -> 6: landing clip ends, footage blurs again, letter rises ----
  function showLetterScene() {
    bgVideo.classList.remove('sharp');
    bgLayer.classList.remove('sharp-bg');
    screenLetter.classList.remove('hidden');
    buildLetterPhotos();
  }

  function openLetter() {
    letterEnvelope.classList.add('hidden');
    letter.classList.add('visible');
    letterPhotos.classList.add('visible');
  }

  // ---- Letter-scene background rows: the ~160-photo pool is split across
  // the 4 rows, each duplicated once (seamless CSS loop, translateX 0 -> -50%).
  // Every row's own set is already far wider than any real viewport, so no
  // resize-driven rebuild is needed the way the old fixed-tile-count did.
  // Built lazily (only once, right before the letter scene can appear) since
  // there are over a dozen video clips in the pool — mounting them earlier
  // would mean all of them loading/decoding at once in the background. Videos
  // start paused and only actually play while scrolled into view. ----
  let letterPhotosBuilt = false;

  function buildLetterPhotos() {
    if (letterPhotosBuilt) return;
    letterPhotosBuilt = true;

    const rows = document.querySelectorAll('.photo-row');
    const buckets = Array.from({ length: rows.length }, () => []);
    LETTER_MEDIA.forEach((item, i) => buckets[i % rows.length].push(item));

    rows.forEach((row, idx) => {
      row.innerHTML = '';
      for (let copy = 0; copy < 2; copy++) {
        buckets[idx].forEach((item) => {
          const tile = document.createElement('div');
          tile.className = 'drift-photo';
          tile.innerHTML = mediaTag(item, '', { autoplay: false });
          row.appendChild(tile);
        });
      }
    });

    const videos = letterPhotos.querySelectorAll('video');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
          } else {
            entry.target.pause();
          }
        });
      }, { threshold: 0.1 });
      videos.forEach((v) => io.observe(v));
    } else {
      videos.forEach((v) => v.play().catch(() => {}));
    }
  }

  bgVideo.addEventListener('ended', () => {
    if (currentClip === 'takeoff') {
      showMemory();
    } else if (currentClip === 'landing') {
      showLetterScene();
    }
  });

  tearHandle.addEventListener('pointerdown', onDragStart);
  tearHandle.addEventListener('pointermove', onDragMove);
  tearHandle.addEventListener('pointerup', onDragEnd);
  tearHandle.addEventListener('pointercancel', onDragEnd);

  nextBtn.addEventListener('click', handleNext);
  backBtn.addEventListener('click', handleBack);
  memoryDetailClose.addEventListener('click', closeMemoryDetail);
  memoryDetailBackdrop.addEventListener('click', closeMemoryDetail);

  landingCancelBtn.addEventListener('click', () => {
    landingConfirm.classList.remove('visible');
  });
  landingConfirmBackdrop.addEventListener('click', () => {
    landingConfirm.classList.remove('visible');
  });
  landingReadyBtn.addEventListener('click', () => {
    landingConfirm.classList.remove('visible');
    landingTriggered = true;
    goToLanding();
  });

  letterEnvelope.addEventListener('click', openLetter);

  initHero();
})();
