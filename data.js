const universities = [
  {
    id: "snu",
    name: "Seoul National University",
    type: "National",
    region: "Seoul",
    image: "snu.png",
    description: "South Korea's top national university known for excellence in research and education.",
    contact: {phone: "+82-2-880-6971 ", email: "snuadmit@snu.ac.kr", website: "https://www.snu.ac.kr"
    },
    ranking: 1,
    mapQuery: "Seoul National University, Seoul" 
  },

  {
    id: "ku",
    name: "Korea University",
    type: "Private",
    region: "Seoul",
    image: "ku.png",
    description: "One of South Korea's oldest and most prestigious private universities, Korea University is a member of the elite SKY universities. Known for its excellence in law, business, and international studies, the university's main campus is located in Seoul.",
    contact: {phone: "+82-2-3290-5156~7 ", email: "admission@korea.ac.kr", website: "http://www.korea.edu/"
  },
  ranking: 6,
  mapQuery: "Korea University, Seoul"
  },

  {
    id: "ysu",
    name: "Yonsei University",
    type: "Private",
    region: "Seoul",
    image: "yonsei.png",
    description: "Prestigious private university and a member of SKY universities.",
    contact: {phone: "+82-2-2123-4131 ", email: " ysadms@yonsei.ac.kr", website: "https://www.yonsei.ac.kr"
  },
  ranking: 2,
  mapQuery: "Yonsei University, Seoul"  
  },

  {
    id: "pnu",
    name: "Pusan National University",
    type: "National",
    region: "Busan",
    image: "pnu.jpg",
    description: "Pusan National University is one of ten Flagship Korean National Universities in South Korea. It is the first national university established after the National Liberation Day of Korea.",
    contact: {phone: "+82-51-510-3856 ", email: " iadmission@pusan.ac.kr", website: "https://www.pusan.ac.kr"
  },
  ranking: 12,
  mapQuery: "Pusan National University, Busan"
  },

  {
    id: "skku",
    name: "Sungkyunkwan University",
    type: "Private",
    region: ["Seoul", "Suwon"], 
    image: "skku.jpg",
    description: "Sungkyunkwan University is a private research university with campuses in Seoul and Suwon, South Korea.",
    contact: {phone: "+82-2-760-1000 ", email: "admission@skku.edu",  website: "http://www.skku.edu/"
  },
  ranking: 4,
  mapQuery: "Sungkyunkwan University, Seoul"
  },

  {
    id: "hyu",
    name: "Hanyang University",
    type: "Private",
    region: "Seoul",
    image: "hyu.png",
    description: "Hanyang University, also located in Seoul, is ranked seventh in the South Korea ranking and joint 151st in the world university rankings.",
    contact: {phone: "82-2-2220-2444~2451 ", email: "intladms@hanyang.ac.kr",  website: "https://www.hanyang.ac.kr/"
  },
  ranking: 9,
  mapQuery: "Hanyang University, Seoul"  
  },

  {
    id: "sju",
    name: "Sejong University",
    type: "Private",
    region: "Seoul",
    image: "sju.png",
    description: "Sejong University is known for its standing in hospitality and tourism management, dancing, animation and rhythmic gymnastics",
    contact: {phone: "+82-2-3408-3973 ", email: "intadmission@sejong.ac.kr",  website: "http://www.sejong.ac.kr/"
  },
  ranking: 3,
  mapQuery: "Sejong University, Seoul"   
  },

  {
    id: "kaist",
    name: "Korea Advanced Institute of Science and Technology (KAIST)",
    type: "Specialized",
    region: "Daejeon",
    image: "kaist.png",
    description: "KAIST - Korea Advanced Institute of Science & Technology is ranked best in South Korea for Engineering (Biotechnology)",
    contact: {phone: "+82-42-350-4803 ", email: "creative.adm@kaist.ac.kr",  website: "https://kaist.ac.kr/"
  },
  ranking: 5,
  mapQuery: "Korea Advanced Institute of Science and Technology (KAIST), Daejeon"   
  },

  {
    id: "gist",
    name: "Gwangju Institute of Science and Technology (GIST)",
    type: "Specialized",
    region: "Gwangju",
    image: "gist.jpg",
    description: "A leading national research-oriented university in South Korea, GIST specializes in science and engineering. Located in Gwangju, it is renowned for its advanced research programs and strong emphasis on innovation and graduate education.",
    contact: {phone: "+82-62-715-2950 ", email: "admis@gist.ac.kr", website: "http://www.gist.ac.kr/"
  },
  ranking: 21,
  mapQuery: "Gwangju Institute of Science and Technology (GIST), Seoul"     
  },

  {
    id: "uou",
    name: "University of Ulsan",
    type: "Private",
    region: "Ulsan",
    image: "uou.jpg",
    description: "A prominent private university located in Ulsan, South Korea’s industrial capital. The University of Ulsan is known for its strong engineering, business, and medical programs, and has close ties with Hyundai Group and other major industries.",
    contact: {phone: "052-220-5952(~5959) ", email: "international@mail.ulsan.ac.kr", website: "http://www.ulsan.ac.kr/eng/index.aspx"
  },
  ranking: 13,
  mapQuery: "University of Ulsan, Ulsan"
  },

  {
    id: "inha",
    name: "Inha University",
    type: "Private",
    region: "Incheon",
    image: "inha.png",
    description: "A prestigious private university located in Incheon, South Korea, Inha University is renowned for its strong programs in engineering, science, and business. Founded in collaboration with Korean expatriates in Hawaii, the university has a long-standing reputation for academic excellence and innovation.",
    contact: {phone: "032-860-8609 ", email: "apply@inha.ac.kr", website: "http://www.inha.ac.kr/"
  },
  ranking: 23,
  mapQuery: "Inha University, Incheon"  
  },

  {
    id: "knu",
    name: "Kyungpook National University",
    type: "National",
    region: "Daegu",
    image: "knu.jpg",
    description: "One of South Korea’s major national universities, Kyungpook National University is located in Daegu. It is well known for its research and academic strength in engineering, agriculture, and medical sciences, and plays a central role in education and innovation in the southeastern region.",
    contact: {phone: "+82-53-950-2434 ", email: "knu2024150@knu.ac.kr", website: "http://www.knu.ac.kr/"
  },
  ranking: 11,
  mapQuery: "Kyungpook National University, Daegu"    
  },

  {
    id: "khu",
    name: "Kyung Hee University",
    type: "Private",
    region: "Seoul",
    image: "khu.jpg",  
    description: "Kyung Hee University is a prestigious private university based in Seoul, known for its excellence in humanities, medicine, international studies, and hospitality management. It also has a strong global presence through active international partnerships and English-medium programs.",
    contact: {phone: "+82-31-201-3961 ", email: "ciss_gc@khu.ac.kr", website: "https://www.khu.ac.kr"
  },
  ranking: 10,
  mapQuery: "Kyung Hee University, Seoul"     
  },

  {
    id: "unist",
    name: "Ulsan National Institute of Science and Technology (UNIST)",
    type: "Specialized",
    region: "Ulsan",
    image: "unist.jpg",
    description: "A leading national research university located in Ulsan, UNIST is dedicated to science, technology, and innovation. It is one of South Korea’s top institutes for engineering and interdisciplinary research, with strong industry ties, particularly in automotive and energy sectors.",
    contact: {phone: "+82-52-217-1127 ", email: "adm-u@unist.ac.kr", website: "http://www.unist.ac.kr/"
  },
  ranking: 8,
  mapQuery: "Ulsan National Institute of Science and Technology (UNIST), Ulsan"  
  },

  {
    id: "dgist",
    name: "Daegu Gyeongbuk Institute of Science and Technology (DGIST)",
    type: "Specialized",
    region: "Daegu",
    image: "dgist.png",
    description: "A government-funded research university located in Daegu, DGIST focuses on science, engineering, and convergent technologies. Known for its interdisciplinary programs and innovation-driven education, DGIST is part of South Korea’s elite group of science and technology institutes.",
    contact: {phone: "+82-53-785-5145 ", email: "iug@dgist.ac.kr", website: "http://www.dgist.ac.kr/en/"
  },
  ranking: 30,
  mapQuery: "Daegu Gyeongbuk Institute of Science and Technology (DGIST), Daegu"  
  },

  {
    id: "ajou",
    name: "Ajou University",
    type: "Private",
    region: "Suwon",
    image: "ajou.png",
    description: "A leading private university located in Suwon, Ajou University is known for its strong engineering, IT, and medical programs. It has a growing international reputation, with active global partnerships and a focus on practical, research-driven education.",
    contact: {phone: "031-219-2304 ", email: "dncjsdk@ajou.ac.kr", website: "https://www.ajou.ac.kr/en/index.do"
  },
  ranking: 24,
  mapQuery: "Ajou University, Suwon"  
  },

  {
    id: "cnu",
    name: "Chungnam National University",
    type: "National",
    region: "Daejeon",
    image: "cnu.png",
    description: "A major national university located in Daejeon, Chungnam National University offers comprehensive programs across science, engineering, humanities, and medicine. It is known for academic excellence, research capacity, and serving as a key educational institution in the central region of South Korea.",
    contact: {phone: "+82-42-821-8825 ", email: "cnuint@cnu.ac.kr", website: "http://cnu.ac.kr/"
  },
  ranking: 25,
  mapQuery: "Chungnam National University, Daejeon"   
  },

  {
    id: "pknu",
    name: "Pukyong National University",
    type: "National",
    region: "Busan",
    image: "pknu.jpg",
    description: "Located in Busan, Pukyong National University is a national university recognized for its strengths in fisheries science, marine engineering, environmental studies, and IT. With a coastal campus and strong regional ties, PKNU plays a vital role in South Korea’s maritime and scientific research sectors.",
    contact: {phone: "+82-51-629-6915 ", email: "admissions@pknu.ac.kr",  website: "http://www.pknu.ac.kr/index.do"
  },
  ranking: 36,
  mapQuery: "Pukyong National University, Busan"  
  },

  {
    id: "kmou",
    name: "Korea Maritime and Ocean University",
    type: "Specialized",
    region: "Busan",
    image: "kmou.jpg",
    description: "Located in Busan, Korea Maritime and Ocean University is South Korea’s leading institution for maritime, ocean engineering, and naval architecture education. It plays a vital role in training professionals for the shipping, logistics, and marine industries and has a strong global reputation in ocean-related research.",
    contact: {phone: "+82-51-410-4771~4 ", email: "ahyoung9205@kmou.ac.kr", website: "http://www.kmou.ac.kr/"
  },
  ranking: 55,
  mapQuery: "Korea Maritime and Ocean University, Busan"  
  },

  {
    id: "karts",
    name: "Korea National University of Arts (K-ARTS)",
    type: "Specialized",
    region: "Seoul",
    image: "karts.jpg",
    description: "Korea National University of Arts, also known as K-ARTS, is South Korea’s premier institution dedicated exclusively to the arts. Located in Seoul, it offers comprehensive programs in music, dance, drama, film, visual arts, and traditional Korean arts, nurturing some of the country’s most prominent artists and cultural figures.",
    contact: {phone: "+82-2-746-9073,9075, 9088 ", email: "apply@karts.ac.kr", website: "http://www.karts.ac.kr/"
  },
  ranking: "19 in QS WUR Ranking By Subject 2025",
  mapQuery: "Korea National University of Arts (K-ARTS), Seoul"    
  },

  {
    id: "jnu",
    name: "Jeju National University",
    type: "National",
    region: "Jeju",
    image: "jnu.jpg", 
    description: "Jeju National University is the flagship public university on Jeju Island, offering a wide range of academic programs and actively engaging in international exchange. It plays a central role in regional development and global cooperation in environmental and marine sciences.",
    contact: {phone: "064-754-2043 ", email: "intl1@jejunu.ac.kr", website: "https://www.jejunu.ac.kr"
  }, 
  ranking: 35,
  mapQuery: "Jeju National University, Jeju"
  },

  {
    id: "hufs",
    name: "Hankuk University of Foreign Studies (HUFS)",
    type: "International",
    region: "Seoul",
    image: "hufs.png",
    description: "Hankuk University of Foreign Studies is Korea’s leading university for foreign languages and international relations, offering globally-focused programs and a culturally diverse student body.",
    contact: {phone: "+82-02-2173-2066, 2859 ", email: "issc@hufs.ac.kr",  website: "https://www.hufs.ac.kr"
  }, 
  ranking: 40,
  mapQuery: "Hankuk University of Foreign Studies (HUFS), Seoul" 
  },

  {
    id: "yonsei-underwood",
    name: "Underwood International College (Yonsei University)",
    type: "International",
    region: "Seoul",
    image: "yonsei.png",
    description: "Underwood International College (UIC) is Yonsei University's all-English liberal arts college, attracting international students and faculty from around the world.",
    contact: {phone: "02-2123-3924 ", email: "uicadm@yonsei.ac.kr", website: "https://uic.yonsei.ac.kr"
  }, 
  ranking: 2,
  mapQuery: "Underwood International College (Yonsei University), Seoul"
  },

  {
    id: "dsu",
    name: "Dongseo University",
    type: "International",
    region: "Busan",
    image: "dsu.jpg",
    description: "Dongseo University offers internationally-oriented programs, especially in design, media, and computer science, with a focus on global exchange and English instruction.",
    contact: {phone: "+82-51-320-2092, 2093, 2746 ", email: "dsuinternational@dongseo.ac.kr", website: "https://www.dongseo.ac.kr"
  }, 
  ranking: 65,
  mapQuery: "Dongseo University, Busan"  
  },

  {
    id: "kmu",
    name: "Keimyung University",
    type: "International",
    region: "Daegu",
    image: "kmu.jpg",
    description: "Keimyung University’s Global Campus hosts students from around the world, offering English-language programs in arts, international relations, and business.",
    contact: {phone: "+82-53-580-6028 ", email: "intl@kmu.ac.kr", website: "https://www.kmu.ac.kr"
  },
  ranking: 45,
  mapQuery: "Keimyung University, Daegu"  
  },

   {
    id: "kkk",
    name: "Konkuk University",
    type: "Private",
    region: "Seoul",
    image: "kkk.png",
    description: "Konkuk University is a private university founded in South Korea in 1931. Konkuk University is known for its veterinary and art colleges at the Seoul campus. It has two campuses: one in Seoul and one in Chungju. The Seoul campus is located near the Han River, by the Konkuk University Station (subway line no.2).",
    contact: {phone: "+82-2-2049-6212 ", email: "abroad@konkuk.ac.kr", website: "https://konkuk.ac.kr/"
  },
  ranking: 22,
  mapQuery: "Konkuk University, Seoul"  
  },

   {
    id: "jbnu",
    name: "Jeonbuk National University",
    type: "National",
    region: "Jeonju",
    image: "jbnu.jpg",
    description: "Jeonbuk National University is one of ten Flagship Korean National Universities founded in 1947, located in Jeonju, South Korea. Jeonbuk National University has been ranked 551–560th in the world by QS Top Universities Ranking in 2023.",
    contact: {phone: "+82-63-270-4653 ", email: "admissionu@jbnu.ac.kr", website: "http://jbnu.ac.kr/eng"
  },
  ranking: 18,
  mapQuery: "Jeonbuk National University, Jeonju"  
  },

   {
    id: "cnu1",
    name: "Chonnam National University",
    type: "National",
    region: "Gwangju",
    image: "cnu1.png",
    description: "Chonnam National University is one of ten Flagship Korean National Universities located in Gwangju and South Jeolla Province, South Korea. CNU ranked the 10th nationwide and the 420th worldwide in world university rankings in the CWUR (Center for World University Rankings).",
    contact: {phone: "+82 62-530-1278 ", email: "underia@jnu.ac.kr", website: "https://www.jnu.ac.kr/"
  },
  ranking: 19,
  mapQuery: "Chonnam National University, Gwangju"  
  },

   {
    id: "cbnu",
    name: "Chungbuk National University",
    type: "National",
    region: "Cheongju",
    image: "cbnu.png",
    description: "Chungbuk National University (CBNU), a flagship national university in South Korea, emphasizes its role in nurturing talent and contributing to both regional and national development. CBNU prioritizes student support, innovative research, and industry-university collaborations, aiming to be a harmonious and balanced university. ",
    contact: {phone: "+82-43-261-3841 ", email: "minhakim@chungbuk.ac.kr", website: "https://www.cbnu.ac.kr/english/index.do"
  },
  ranking: 31,
  mapQuery: "Chungbuk National University, Cheongju"  
  },

   {
    id: "gnu",
    name: "Gyeongsang National University",
    type: "National",
    region: "Jinju",
    image: "gnu.jpg",
    description: "Gyeongsang National University  is one of ten Flagship Korean National Universities located in Jinju, South Gyeongsang Province. Gyeongsang National University has twelve colleges such as arts, social science, natural science, engineering, agriculture and life science, management, veterinary, education, nursing, and medicine, and eight graduate schools such as medicine and public health, business administration, education, aerospace, industry, etc",
    contact: {phone: "+82-55-772-0276 ", email: "gognu@gnu.ac.kr ", website: "http://eng.gnu.ac.kr/"
  },
  ranking: 26,
  mapQuery: "Gyeongsang National University, Jinju"  
  },

  {
    id: "knu1",
    name: "Kangwon National University",
    type: "National",
    region: "Chuncheon",
    image: "knu1.jpg",
    description: "Kangwon National University is one of ten Flagship Korean National Universities in Gangwon, South Korea. Initially established as an agricultural college, Kangwon National University has steadily expanded to the comprehensive university encompassing a full spectrum of academic fields.",
    contact: {phone: " +82-33-250-6985, 7615 ", email: "enter@kangwon.ac.kr", website: "https://wwwk.kangwon.ac.kr/english/index.do"
  },
  ranking: 32,
  mapQuery: "Kangwon National University, Chuncheon"  
  },

{
    id: "ewu",
    name: "Ewha Womans University",
    type: "Private",
    region: "Seoul",
    image: "ewu.png",
    description: "Ewha Womans University is a private women's research university in Seoul, South Korea. Currently, Ewha Womans University is one of the world's largest female educational institutes and one of the most prestigious universities in South Korea. Ewha Womans University has produced numerous South Korean women leaders, including politicians, CEOs, and legal professionals.",
    contact: {phone: "+82-2-3277-3818 ", email: "isadmit@ewha.ac.kr", website: "http://www.ewha.ac.kr/"
  },
  ranking: 16,
  mapQuery: "Ewha Womans University, Seoul"  
  }









 



 

  

];
