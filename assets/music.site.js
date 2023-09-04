function musicsite(site, theme) {

  // device test
  var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
  var userAgent = navigator.userAgent.toLowerCase();

  // one-click link
  var melon = "melonapp://play?ctype=1&menuid=0&cid=";
  var melon_ipad = "melonipad://play/?ctype=1&menuid=0&cid=";
  var melon_win = "melonapp://play?cType=1&cList=";
  var melon_mac_1 = "melonplayer://play?ref=&cid=";
  var melon_mac_2 = "&cflag=1";
  var genie_iphone = "ktolleh00167://landing/?landing_type=31&landing_target=";
  var genie_android = "cromegenie://scan/?landing_type=31&landing_target=";
  var genie_web = "https://www.genie.co.kr/player/shareProcessV2?xgnm=";
  var bugs = "bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=";
  var bugs_pc = "https://music.bugs.co.kr/newPlayer?trackId=";
  var vibe = "vibe://listen?version=3&trackIds=";
  var music_site_url;
  var songid_dump = "";
  var i;

  // swal timer
  let timerInterval

  // song-id 전체 songid code
  var melon_songid = [7844372,7844373,7844374,7844375,7844376,7844377,8120282,8120283,8120284,8120285,8120286,8120287,30189029,30189030,30232719,30233080,30284609,30285386,30345502,30345503,30399493,30399494,30457471,30457472,30457476,30457484,30507915,30508688,30566474,30566475,30617942,30617943,30658626,30658627,30711862,30711863,30771999,30772000,30772011,31149436,31149437,31149438,31149439,31149440,31149441,31295149,31412373,31431163,31481699,31481700,31481701,31481702,31481703,31481704,31927274,31927275,31927276,31927277,31927278,31927279,32115575,32115576,32115577,32115578,32115579,32115580,32115581,32115582,32115583,32115584,32115585,32586847,32586848,32586849,32586850,32586851,32586852,32586853,32586854,32892355,32892356,32892357,32892358,32892359,32892360,32892361,33116872,33210835,33422387,33422388,33422389,33422390,33422391,33422392,33422393,33649709,33649710,33649711,33649712,33649713,33649714,33649715,33903431,33903432,33903433,33903434,33903435,33903436,33903437,34009868,34603517,34603518,34603519,34603520,34603521,34603522,34603523,34603524,34603525,34603526,36759974,36759975,36730254,36759976,36759977,36759978,36759979,36759980,36759981,36759982,36759983];
  var genie_songid = [84964151,84964152,84964153,84964154,84964155,84964156,86089284,86089285,86112660,86112661,86112662,86112663,86866728,86866729,86931930,86931931,86990352,86990353,87064418,87064419,87121533,87121534,87185618,87185619,87185623,87185631,87264764,87264765,87359516,87359517,87415867,87415868,87463141,87463142,87527108,87527109,87591822,87591823,87591834,88072513,88072514,88072515,88072516,88072517,88072518,88233287,88362467,88389337,88455412,88455413,88455414,88455415,88455416,88455417,89220626,89220627,89220628,89220629,89220630,89220631,89472159,89472160,89472161,89472162,89472163,89472164,89472165,89472166,89472167,89472168,89472169,90194895,90194896,90194897,90194898,90194899,90194900,90194901,90194902,90756152,90756153,90756154,90756155,90756156,90756157,90756158,91565584,91978161,93002280,93002281,93002282,93002283,93002284,93002285,93002286,93688029,93688030,93688031,93688032,93688033,93688034,93688035,94227262,94227263,94227264,94227265,94227266,94227267,94227268,94435313,95955538,95955539,95955540,95955541,95955542,95955543,95955544,95955545,95955546,95955547,103325887,103325888,103181327,103325889,103325890,103325891,103325892,103325893,103325894,103325895,103325896];
  var bugs_songid = [4551004,4551005,4551006,4551007,4551008,4551009,30203510,30203511,30203512,30203513,30203514,30203515,30511020,30511021,30540153,30540154,30573080,30573081,30612023,30612024,30646154,30646155,30677527,30677528,30677532,30677540,30708337,30708338,30742600,30742601,30772387,30772388,30800908,30800909,30833861,30833862,30872542,30872543,30872554,31120686,31120687,31120688,31120689,31120690,31120691,31225862,31304162,31318643,31360121,31360122,31360123,31360124,31360125,31360126,31650948,31650949,31650950,31650951,31650952,31650953,31728992,31728993,31728994,31728995,31728996,31728997,31728998,31728999,31729000,31729001,31729002,31908732,31908733,31908734,31908735,31908736,31908737,31908738,31908739,32006764,32006765,32006766,32006767,32006768,32006769,32006770,6029882,32124930,32209763,32209764,32209765,32209766,32209767,32209768,32209769,32276896,32276897,32276898,32276899,32276900,32276901,32276902,32330800,32330801,32330802,32330803,32330804,32330805,32330806,32344405,32460057,32460058,32460059,32460060,32460061,32460062,32460063,32460064,32460065,32460066,6214702,6214703,32945820,6214704,6214705,6214706,6214707,6214708,6214709,6214710,6214711];
  var vibe_songid = [5701352,5701356,5701361,5701347,5701349,5701354,6049320,6049321,6049322,6049323,6049324,6049325,16035922,16035923,16081363,16081364,16473414,16473415,17409146,17409156,17735999,17736000,17836612,17836615,17836617,17836625,18419728,18419729,18676775,18676777,18939330,18939331,19183554,19183552,19738258,19738184,20121086,20121084,20121097,21408918,21408915,21408920,21408916,21408919,21408917,21712039,22531444,22886295,23177550,23177552,23177555,23177558,23177561,23177562,27852477,27852478,27852479,27852481,27852480,27852482,30184802,30165478,30184807,30184803,30184808,30184804,30184805,30184806,30184809,30184810,30184811,40319205,40319204,40319206,40319207,40319208,40319209,40319210,40319211,41909362,41909363,41909364,41909365,41909367,41909366,41909368,43626549,44037981,47007043,46822861,47007042,47007046,47007047,47007045,47007044,49626053,49626054,49626055,49626056,49626058,49626057,49626059,50607170,50607171,50607172,50607174,50607175,50607173,50607176,50772549,53589965,53589966,53589967,53589971,53589969,53589968,53589974,53589972,53589970,53589973,66832788,66832787,66751464,66832789,66832790,66832791,66832794,66832797,66832799,66832801,66832804];
  var playlist_parts = ["/playlist/parts/0.png","/playlist/parts/1.png","/playlist/parts/2.png","/playlist/parts/3.png","/playlist/parts/4.png","/playlist/parts/5.png","/playlist/parts/6.png","/playlist/parts/7.png","/playlist/parts/8.png","/playlist/parts/9.png","/playlist/parts/10.png","/playlist/parts/11.png","/playlist/parts/12.png","/playlist/parts/13.png","/playlist/parts/14.png","/playlist/parts/15.png","/playlist/parts/16.png","/playlist/parts/17.png","/playlist/parts/18.png","/playlist/parts/19.png","/playlist/parts/20.png","/playlist/parts/21.png","/playlist/parts/22.png","/playlist/parts/23.png","/playlist/parts/24.png","/playlist/parts/25.png","/playlist/parts/26.png","/playlist/parts/27.png","/playlist/parts/28.png","/playlist/parts/29.png","/playlist/parts/30.png","/playlist/parts/31.png","/playlist/parts/32.png","/playlist/parts/33.png","/playlist/parts/34.png","/playlist/parts/35.png","/playlist/parts/36.png","/playlist/parts/37.png","/playlist/parts/38.png","/playlist/parts/39.png","/playlist/parts/40.png","/playlist/parts/41.png","/playlist/parts/42.png","/playlist/parts/43.png","/playlist/parts/44.png","/playlist/parts/45.png","/playlist/parts/46.png","/playlist/parts/47.png","/playlist/parts/48.png","/playlist/parts/49.png","/playlist/parts/50.png","/playlist/parts/51.png","/playlist/parts/52.png","/playlist/parts/53.png","/playlist/parts/54.png","/playlist/parts/55.png","/playlist/parts/56.png","/playlist/parts/57.png","/playlist/parts/58.png","/playlist/parts/59.png","/playlist/parts/60.png","/playlist/parts/61.png","/playlist/parts/62.png","/playlist/parts/63.png","/playlist/parts/64.png","/playlist/parts/65.png","/playlist/parts/66.png","/playlist/parts/67.png","/playlist/parts/68.png","/playlist/parts/69.png","/playlist/parts/70.png","/playlist/parts/71.png","/playlist/parts/72.png","/playlist/parts/73.png","/playlist/parts/74.png","/playlist/parts/75.png","/playlist/parts/76.png","/playlist/parts/77.png","/playlist/parts/78.png","/playlist/parts/79.png","/playlist/parts/80.png","/playlist/parts/81.png","/playlist/parts/82.png","/playlist/parts/83.png","/playlist/parts/84.png","/playlist/parts/85.png","/playlist/parts/86.png","/playlist/parts/87.png","/playlist/parts/88.png","/playlist/parts/89.png","/playlist/parts/90.png","/playlist/parts/91.png","/playlist/parts/92.png","/playlist/parts/93.png","/playlist/parts/94.png","/playlist/parts/95.png","/playlist/parts/96.png","/playlist/parts/97.png","/playlist/parts/98.png","/playlist/parts/99.png","/playlist/parts/100.png","/playlist/parts/101.png","/playlist/parts/102.png","/playlist/parts/103.png","/playlist/parts/104.png","/playlist/parts/105.png","/playlist/parts/106.png","/playlist/parts/107.png","/playlist/parts/108.png","/playlist/parts/109.png","/playlist/parts/110.png","/playlist/parts/111.png","/playlist/parts/112.png","/playlist/parts/113.png","/playlist/parts/114.png","/playlist/parts/115.png","/playlist/parts/116.png","/playlist/parts/117.png","/playlist/parts/118.png","/playlist/parts/119.png","/playlist/parts/120.png","/playlist/parts/121.png","/playlist/parts/122.png","/playlist/parts/123.png","/playlist/parts/124.png","/playlist/parts/125.png","/playlist/parts/126.png","/playlist/parts/127.png","/playlist/parts/128.png","/playlist/parts/129.png","/playlist/parts/130.png"];

  // playlist array
  var playlist_number = Array.from(Array(100),() => Array()); // playlist 개수 한도 100 설정
  playlist_number[0] = [55,45,0,59,37,87,36,71,9,21,82,32,67,61,74,40,77,8,70,30,17,44,13,23,14,2,41,33,72,10,49];
  playlist_number[1] = [80,55,26,56,3,54,21,45,32,17,48,14,82,49,87,84,20,9,0];
  playlist_number[2] = [67,69,14,44,17,23,70,13,8,37,49,29,3,27,52,60,61,55,62,20,0,9];
  playlist_number[3] = [59,9,10,41,55,52,1,42,56,54,57,4,49,7,5,33,12,22,50,39,40,55,58,2,20,0,9];
  playlist_number[4] = [55,36,35,37,45,26,21,87,56,19,15,18];
  playlist_number[5] = [31,23,44,77,13,70,14,48,30,17,49,24];
  playlist_number[6] = [20,36,59,35,19,55,28,18,56,87,9,71,49,40,74,41,61];
  playlist_number[7] = [14,30,70,13,73,8,67,17,32,45,26,53,72,82,48,38];
  playlist_number[8] = [2,8,12,14,16,18,20,23,26,28,30,32,34,37,40,45,49,55,61,72,82,87,89];
  playlist_number[9] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94];
  playlist_number[10] = [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];
  playlist_number[11] = [87,18,28,56,15,45,21,46,84,26,86,80,71,29,6,54,19];
  playlist_number[12] = [55,0,35,4,60,41,9,7,64,1,10,22,57,80,42,19,20];
  playlist_number[13] = [30,44,77,17,73,14,24,5,67,2,31,32,84,26,65,72,47,48];
  playlist_number[14] = [13,73,70,14,47,37,59,36,49,23,21,54,58,8,84,86,82,53,38];
  playlist_number[15] = [95,82,80,86,87,97,100,3,55,71,98,44,14,69,96,99,84,45,15,49,101,9];
  playlist_number[51] = [121,120,122,123,124,121,122,125,126,127,121,128,129,130,121,14,55,119]; // support 
  playlist_number[53] = [121,120,122,123,124]; // support vibe 1
  playlist_number[54] = [121,122,125,126,127]; // support vibe 2
  playlist_number[55] = [121,128,129,130]; // support vibe 3
  playlist_number[56] = [121,14,55,119]; // support vibe 4
  

  // melon : 1 // genie : 2 // bugs : 3 // vibe : 4 // flo : 5
  // site = a / theme = b

  var ok = 0;
  var icon = ["error", "success"];
  var title = ["지원하지 않는 기기예요😥", "플레이리스트 생성 완료🎉"];

  var guide_link = ["", "/guide#멜론-스트리밍-가이드", "/guide#지니-스트리밍-가이드", "/guide#벅스-스트리밍-가이드", "/guide#바이브-스트리밍-가이드", "/guide#플로-스트리밍-가이드"];

  if ( mobile || ( navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 ) || site < 4 ) ok = 1; // site test
  else ok = 0;

  if ( (site==5||site==10) && mobile ){
    var canvas = document.querySelector("#playlist"),
    ctx = canvas.getContext('2d');

    var imgs = new Array();
    for(i=0;i<playlist_number[theme].length;i++){
      imgs[i] = new Image();
      imgs[i].src = playlist_parts[playlist_number[theme][i]];
    }
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: icon[ok],
    title: title[ok]
  })

  if ( mobile || ( navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 ) ){
    // site 1 - 4 case
    if(site == 1 || site == 6){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + melon_songid[playlist_number[theme][i]] + ',';
      songid_dump = songid_dump + melon_songid[playlist_number[theme][playlist_number[theme].length-1]];
      if (userAgent.search("ipad") > -1 || navigator.platform === 'MacIntel') music_site_url = melon_ipad + songid_dump;
      else if(theme == 51 && userAgent.search("android") > -1 ) music_site_url = "/support_melon_android";
      else music_site_url = melon + songid_dump;
    }
    else if(site == 2 || site == 7){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + genie_songid[playlist_number[theme][i]] + ';';
      songid_dump = songid_dump + genie_songid[playlist_number[theme][playlist_number[theme].length-1]];
      if(userAgent.search("android") > -1) music_site_url = genie_android + songid_dump;
      else music_site_url = genie_iphone + songid_dump;
    }
    else if(site == 3 || site == 8){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + bugs_songid[playlist_number[theme][i]] + '|';
      songid_dump = songid_dump + bugs_songid[playlist_number[theme][playlist_number[theme].length-1]];
      music_site_url = bugs + songid_dump;
    }
    else if(site == 4 || site == 9){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + vibe_songid[playlist_number[theme][i]] + ',';
      songid_dump = songid_dump + vibe_songid[playlist_number[theme][playlist_number[theme].length-1]];
      music_site_url = vibe + songid_dump;
      if(theme == 51) music_site_url = "/support_vibe";
    }
    if(site < 5)  location.href = music_site_url;
    else if (site == 5){
      Swal.fire({
        title: '만드는 중...',
        html: '플레이리스트를 만들고 있어요.',
        timer: 1500+20*playlist_number[theme].length,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          canvas.width = 350;
          canvas.height = 70*playlist_number[theme].length;

          for(i=0;i<playlist_number[theme].length;i++){
            ctx.drawImage(imgs[i], 0, 70*i);
          }
          Swal.fire({
            icon: 'success',
            title: '생성 완료🎉',
            text: '위의 이미지를 저장하고 플로에서 플레이리스트를 만드세요!',
            imageUrl: canvas.toDataURL(),
            imageHeight: 35*playlist_number[theme].length,
            imageAlt: 'Playlist image',
            confirmButtonText: '알겠어요',
            footer: '<a href="/intro#플로-플레이리스트-이용-방법" style="color:#28acff">어떻게 플레이리스트를 만드나요?</a>'
          }).then((result) => {
              canvas.width = 0;
              canvas.height = 0;
          })
        }
      })
    }
    if (site > 5 && site < 10){
      Swal.fire({
        icon: 'success',
        title: '생성 완료🎉',
        text: '혹시 스트리밍 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '가이드 보기',
        confirmButtonColor: '#aab7c1',
        denyButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = music_site_url;
        } else if (result.isDenied) {
          location.href = guide_link[site-5];
        }
      })
    }
    else if (site == 10){
      Swal.fire({
        title: '만드는 중...',
        html: '플레이리스트를 만들고 있어요.',
        timer: 1500+20*playlist_number[theme].length,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        canvas.width = 350;
        canvas.height = 70*playlist_number[theme].length;

        if (result.dismiss === Swal.DismissReason.timer) {
          for(i=0;i<playlist_number[theme].length;i++){
            ctx.drawImage(imgs[i], 0, 70*i);
          }
          Swal.fire({
            icon: 'success',
            title: '생성 완료🎉',
            text: '혹시 스트리밍 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
            imageUrl: canvas.toDataURL(),
            imageHeight: 700,
            imageAlt: 'Playlist image',
            showDenyButton: true,
            focusConfirm: false,
            focusDeny: true,
            confirmButtonText: '괜찮아요',
            denyButtonText: '가이드 보기',
            confirmButtonColor: '#aab7c1',
            denyButtonColor: '#3085d6',
            footer: '<a href="/intro#플로-플레이리스트-이용-방법" style="color:#28acff">어떻게 플레이리스트를 만드나요?</a>'
          }).then((result) => {
            if (result.isConfirmed) {
            } else {
              location.href = guide_link[site-5];
            }
            anvas.width = 0;
            canvas.height = 0;
          })
        }
      })
    }
  }
  else{
    if(site == 1 || site == 6){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + melon_songid[playlist_number[theme][i]] + ',';
      songid_dump = songid_dump + melon_songid[playlist_number[theme][playlist_number[theme].length-1]];
      if (userAgent.search("macintosh") > -1) music_site_url = melon_mac_1 + songid_dump + melon_mac_2;
      else music_site_url = melon_win + songid_dump;
    }
    else if(site == 2 || site == 7){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + genie_songid[playlist_number[theme][i]] + ';';
      songid_dump = songid_dump + genie_songid[playlist_number[theme][playlist_number[theme].length-1]];
      music_site_url = genie_web + songid_dump;
      if (site == 2) window.open( music_site_url, '', 'scrollbars=no, width=600, height=600');
    } 
    else if(site == 3 || site == 8){
      for(i=0;i<playlist_number[theme].length-1;i++) songid_dump = songid_dump + bugs_songid[playlist_number[theme][i]] + ',';
      songid_dump = songid_dump + bugs_songid[playlist_number[theme][playlist_number[theme].length-1]];
      music_site_url = bugs_pc + songid_dump;
      if (site == 3) window.open( music_site_url, '', 'scrollbars=no, width=350, height=800');
    }
    if(site == 1 && userAgent.search("macintosh") > -1){
      Swal.fire({
        icon: 'success',
        title: '멜론 플레이리스트 생성 완료🎉',
        text: '멜론 플레이어를 설치하셨나요? 플레이어를 설치하지 않으셨다면 아래의 링크를 통해 플레이어를 설치해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '닫기',
        footer: '<a href="//www.melon.com/customer/serviceintro/multi_pc_web.htm" style="color:#28acff">멜론 플레이어 설치하기</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = music_site_url;
        }
      })
    } else if (site == 1){
      Swal.fire({
        icon: 'success',
        title: '멜론 플레이리스트 생성 완료🎉',
        text: '멜론 플레이어를 설치하셨나요? 플레이어를 설치하지 않으셨다면 아래의 링크를 통해 플레이어를 설치해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '닫기',
        footer: '<a href="//www.melon.com/customer/serviceintro/index.htm" style="color:#28acff">멜론 플레이어 설치하기</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = music_site_url;
        }
      })
    } else if(site == 6 && userAgent.search("macintosh") > -1){
      Swal.fire({
        icon: 'success',
        title: '멜론 플레이리스트 생성 완료🎉',
        text: '혹시 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '가이드 보기',
        confirmButtonColor: '#aaa',
        denyButtonColor: '#3085d6',
        footer: '<a href="//www.melon.com/customer/serviceintro/multi_pc_web.htm" style="color:#28acff">멜론 플레이어 설치하기</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = music_site_url;
        } else if (result.isDenied) {
          location.href = guide_link[site-5];
        }
      })
    } else if(site == 6){
      Swal.fire({
        icon: 'success',
        title: '멜론 플레이리스트 생성 완료🎉',
        text: '혹시 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '가이드 보기',
        confirmButtonColor: '#aaa',
        denyButtonColor: '#3085d6',
        footer: '<a href="//www.melon.com/customer/serviceintro/index.htm" style="color:#28acff">멜론 플레이어 설치하기</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = music_site_url;
        } else if (result.isDenied) {
          location.href = guide_link[site-5];
        }
      })
    } else if(site == 7){
      Swal.fire({
        icon: 'success',
        title: '지니 플레이리스트 생성 완료🎉',
        text: '혹시 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '가이드 보기',
        confirmButtonColor: '#aaa',
        denyButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open( music_site_url , '', 'scrollbars=no, width=600, height=600');
        } else if (result.isDenied) {
          location.href = guide_link[site-5];
        }
      })
    } else if(site == 8){
      Swal.fire({
        icon: 'success',
        title: '벅스 플레이리스트 생성 완료🎉',
        text: '혹시 가이드를 확인하셨나요? 아직 확인하지 않으셨다면 가이드를 먼저 확인해주세요!',
        showDenyButton: true,
        focusConfirm: false,
        focusDeny: true,
        confirmButtonText: '바로 담기',
        denyButtonText: '가이드 보기',
        confirmButtonColor: '#aaa',
        denyButtonColor: '#3085d6'
      }).then((result) => {
        if (result.isConfirmed) {
          window.open( music_site_url, '', 'scrollbars=no, width=350, height=800');
        } else if (result.isDenied) {
          location.href = guide_link[site-5];
        }
      })
    }
  }
}
