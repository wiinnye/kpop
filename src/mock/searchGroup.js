export function GetInfoGroup(setGroup, search) {
  const allGroup = [
    {
      id: 1,
      name: 'New Jeans',
      type: 'Girl Group',
      fandomName: 'Bunnies (Tokki/토끼)',
      dateDebut: 'July 22, 2022',
      urlImg: 'https://ih1.redbubble.net/image.3951424867.3141/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      profile: [
        {
          idName: 1,
          stageName: ' Minji (민지)',
          birthName: 'Kim Minji (김민지)',
          birthday: 'May 07, 2004',
          zodiacSign: 'Taurus',
          chineseZodiacSign: 'Monkey',
          height: '169 cm ',
          weight: '',
          bloodType: 'A',
          mbtiType: 'ESTJ-T',
          nationality: 'Korean',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/5DFC115E-AFEE-4962-931D-53B5A5995B64-533x800.jpeg',
        },
        {
          idName: 2,
          stageName: ' Hanni(하니)',
          birthName: 'Phạm Ngọc Hân / Hanni Pham',
          birthday: 'October 6, 2004',
          zodiacSign: 'Libra',
          chineseZodiacSign: 'Monkey',
          height: '161.7 cm',
          weight: '',
          bloodType: 'O',
          mbtiType: 'INFP',
          nationality: 'Vietnamese - Australian',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/7CD920D6-9B39-439C-BCC6-4C54C59BAE84-533x800.jpeg',
        },
        {
          idName: 3,
          stageName: 'Danielle (다니엘)',
          birthName: 'Danielle Marsh / Mo Jihye (모지혜)',
          birthday: 'April 11, 2005',
          zodiacSign: ' Aries',
          chineseZodiacSign: 'Rooster',
          height: '165 cm',
          weight: '',
          bloodType: 'AB',
          mbtiType: 'ENFP',
          nationality: 'Korean-Australian',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/D95A6A7B-1428-406F-A869-9711D5067974-533x800.jpeg',
        },
        {
          idName: 4,
          stageName: 'Haerin (해린)',
          birthName: 'Kang Haerin (강해린)',
          birthday: 'May 15, 2006',
          zodiacSign: 'Taurus',
          chineseZodiacSign: 'Dog',
          height: '164.5 cm',
          weight: '',
          bloodType: 'B',
          mbtiType: 'ISTP',
          nationality: 'Korean',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/4CE8A33A-7F51-49A5-9865-15B03A85D3CE-533x800.jpeg',
        },
        {
          idName: 5,
          stageName: 'Hyein (혜인)',
          birthName: 'Lee Hyein (이혜인)',
          birthday: 'April 21, 2008',
          zodiacSign: 'Taurus',
          chineseZodiacSign: 'Rat',
          height: '170 cm',
          weight: '',
          bloodType: 'O',
          mbtiType: ' INFP (was ENFP)',
          nationality: 'Korean',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/993DF58B-E0FB-40A9-8FCD-40B04844F017-533x800.jpeg',
        }
      ]
    },
    {
      id: 2,
      name: 'Blackpink',
      type: 'Girl Group',
      fandomName: 'Blink',
      dateDebut: 'October 23, 2018',
      urlImg: 'https://i.pinimg.com/originals/00/5b/36/005b36c78f2ba0585416fccd55d58439.jpg',
      profile: [
        {
          idName: 6,
          stageName: 'Jisoo (지수)',
          birthName: 'Kim Jisoo (김지수)',
          birthday: 'January 3, 1995',
          zodiacSign: 'Capricorn',
          chineseZodiacSign: 'Dog',
          height: '162 cm ',
          weight: '44 kg (97 lbs)',
          bloodType: 'A',
          mbtiType: 'INFJ (Her previous result was ESTP)',
          nationality: 'Korean',
          img: 'https://static1.purebreak.com.br/articles/5/10/02/45/@/405024-blackpink-confira-4-vezes-que-jisoo-foi-diapo-2.jpg',
        },
        {
          idName: 7,
          stageName: 'Jennie (제니)',
          birthName: 'Kim Jennie (김제니)',
          birthday: 'January 16, 1996',
          zodiacSign: 'Capricorn',
          chineseZodiacSign: 'Pig',
          height: '163 cm',
          weight: '45 kg (99 lbs)',
          bloodType: 'B',
          mbtiType: 'INFP',
          nationality: 'Korean',
          img: 'https://static.wikia.nocookie.net/blinks/images/e/ec/Jennie_Born_Pink_concept_photo_1.jpeg/revision/latest?cb=20220905150129',
        },
        {
          idName: 8,
          stageName: 'Rosé (로제)',
          birthName: 'Roseanne Park',
          birthday: 'February 11, 1997',
          zodiacSign: ' Aquarius',
          chineseZodiacSign: 'Ox',
          height: '168.7 cm ',
          weight: '44 kg (97 lbs)',
          bloodType: 'B',
          mbtiType: 'ENFP',
          nationality: 'Korean-Australian',
          img: 'https://stylecaster.com/wp-content/uploads/2021/04/Rose-Gone-Music-Video.png',
        },
        {
          idName: 9,
          stageName: 'Lisa (리사)',
          birthName: 'ranpriya Manoban (ปราณปริยา มโนบาล), legalized to Lalisa Manoban (ลลิสา มโนบาล)',
          birthday: 'March 27, 1997',
          zodiacSign: 'Aries',
          chineseZodiacSign: 'Ox',
          height: '166.5 cm ',
          weight: '44.7 kg (98.5 lbs)',
          bloodType: 'O',
          mbtiType: 'ISFP (Her previous result was ESFJ)',
          nationality: 'Korean',
          img: 'https://kprofiles.com/wp-content/uploads/2022/07/4CE8A33A-7F51-49A5-9865-15B03A85D3CE-533x800.jpeg',
        }
      ]
    },
    {
      id: 3,
      name: '(G)i-dle',
      type: 'Girl Group',
      fandomName: 'Neverland',
      dateDebut: 'May 2nd, 2018',
      urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%28G%29I-dle_logo.svg/2560px-%28G%29I-dle_logo.svg.png',
      profile: [
        {
          idName: 10,
          stageName: 'Soyeon (소연)',
          birthName: 'Jeon So Yeon (전소연)',
          birthday: 'Jeon So Yeon (전소연)',
          zodiacSign: 'Virgo',
          chineseZodiacSign: '',
          height: '157 cm',
          weight: ' 44 kg (97 lbs)',
          bloodType: 'B',
          mbtiType: 'INTJ (Her previous result was INTP)',
          nationality: 'Korean',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-05G1Y31mBwStlNePiH1K1ziQXfu5_nKlw&usqp=CAU',
        },
        {
          idName: 11,
          stageName: 'Miyeon (미연)',
          birthName: 'Cho Mi Yeon (조미연) ',
          birthday: 'January 31, 1997',
          zodiacSign: 'Aquarius',
          chineseZodiacSign: '',
          height: '161 cm',
          weight: '45 kg (99 lbs)',
          bloodType: 'B',
          mbtiType: 'ENFP',
          nationality: 'Korean',
          img: 'https://6.viki.io/image/d72fdff6ba694c728b56b77ec0545a04/dummy.jpeg?s=900x600&e=t',
        },
        {
          idName: 12,
          stageName: 'Minnie (민니)',
          birthName: 'Nicha Yontararak (ณิชา ยนตรรักษ์)',
          birthday: 'October 23, 1997',
          zodiacSign: 'ibra-Scorpio Cusp',
          chineseZodiacSign: '',
          height: '167 cm',
          weight: '48 kg (105 lbs)',
          bloodType: 'O',
          mbtiType: 'ENFJ',
          nationality: 'Thai',
          img: 'https://www.korebu.com/wp-content/uploads/2021/01/minnie.jpg',
        },
        {
          idName: 13,
          stageName: 'Soojin (수진)',
          birthName: 'Seo Su-jin (서수진)',
          birthday: 'March 9, 1998',
          zodiacSign: 'Pisces',
          chineseZodiacSign: '',
          height: '163.8 cm ',
          weight: '43 kg (94 lbs)',
          bloodType: 'O',
          mbtiType: 'ISFP',
          nationality: 'Korean',
          img: 'https://6.viki.io/image/df537c1e07db447188d13fc939df3ffc/dummy.jpeg?s=900x600&e=t',
        },
        {
          idName: 14,
          stageName: 'Yuqi (우기)',
          birthName: 'Song Yu Qi (宋雨琦/송우기) ',
          birthday: 'September 23, 1999',
          zodiacSign: 'Libra',
          chineseZodiacSign: '',
          height: '163 cm',
          weight: '47 kg (103 lbs)',
          bloodType: 'O',
          mbtiType: 'ESFJ (Her previous result was ENFJ)',
          nationality: 'Chinese',
          img: 'https://kpopping.com/documents/df/1/1440/G-I-DLE-Yuqi-for-ELLE-Korea-Magazine-July-2022-Issue-documents-2(1).jpeg?v=c7f9c',
        },
        {
          idName: 15,
          stageName: 'Shuhua (슈화)',
          birthName: 'Yeh Shuhua (葉舒華) ',
          birthday: 'January 6, 2000',
          zodiacSign: 'Capricorn',
          chineseZodiacSign: '',
          height: '161 cm',
          weight: '45 kg (99 lbs)',
          bloodType: 'A',
          mbtiType: 'INFP',
          nationality: 'Taiwanese',
          img: 'https://0.soompi.io/wp-content/uploads/2022/10/28110900/Shuhua-1.jpeg',
        }
      ]
    },
    {
      id: 4,
      name: 'XG',
      type: 'Girl Group',
      fandomName: 'Alphaz',
      dateDebut: 'March 18, 2022',
      urlImg: 'https://pbs.twimg.com/profile_images/1610924024091267073/UpPO8LMM_400x400.jpg',
      profile: [
        {
          idName: 16,
          stageName: 'Jurin (樹林/주린)',
          birthName: 'Asaya Jurin (朝谷樹林/아사야 주린) ',
          birthday: 'June 19, 2002',
          zodiacSign: 'Gemini',
          chineseZodiacSign: '',
          height: '158 cm',
          weight: '',
          bloodType: 'A',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://static.wikia.nocookie.net/xg-music/images/f/f7/XG_Jurin_Shooting_Star_teaser_photo_%282%29.jpg/revision/latest/scale-to-width-down/250?cb=20230106024425',
        },
        {
          idName: 17,
          stageName: 'Chisa (ちさ/치사)',
          birthName: 'Kondou Chisa (今度 ちさ / 콘도 치사)',
          birthday: 'January 17, 2002',
          zodiacSign: 'Capricorn',
          chineseZodiacSign: '',
          height: '157 cm',
          weight: '',
          bloodType: '',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://assets.mycast.io/actor_images/actor-kondo-chisa-657075_large.jpg?1674057249',
        },
        {
          idName: 18,
          stageName: 'https://assets.mycast.io/actor_images/actor-kondo-chisa-657075_large.jpg?1674057249',
          birthName: 'Sohara Hinata (宗原ひなた / 소하라 히나타)',
          birthday: 'June 11, 2002',
          zodiacSign: 'Gemini',
          chineseZodiacSign: '',
          height: '157 cm ',
          weight: '',
          bloodType: '',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://love4everkm.files.wordpress.com/2022/02/hinata-3-1.jpg',
        },
        {
          idName: 19,
          stageName: 'Harvey (ハービー/하비)',
          birthName: 'Amy Jannet Harvey (ハーヴィー瑛美 /  에이미 자넷 하비)',
          birthday: 'December 18, 2002',
          zodiacSign: 'Sagittarius',
          chineseZodiacSign: '',
          height: '160 cm',
          weight: '',
          bloodType: '',
          mbtiType: '',
          nationality: 'Japanese-Australian',
          img: 'https://kpopinfo114.files.wordpress.com/2023/01/xg-harvey-970620376-e1674918964439.jpg',
        },
        {
          idName: 20,
          stageName: 'Juria (ジュリア/쥬리아)',
          birthName: 'Ueda Juria (上田ジュリア/ 우에다 쥬리아), formerly ',
          birthday: 'November 28, 2004',
          zodiacSign: 'Sagittarius',
          chineseZodiacSign: '',
          height: '',
          weight: '',
          bloodType: 'O',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://i0.wp.com/asiaon.com.br/wp-content/uploads/2023/01/JURIA-Blue-Hair-FIN.png?resize=539%2C809&ssl=1',
        },
        {
          idName: 21,
          stageName: 'Maya (マヤ/마야)',
          birthName: 'Kawachi Maya (河地マヤ / 카와치 마야)',
          birthday: 'August 10, 2005',
          zodiacSign: 'Leo',
          chineseZodiacSign: '',
          height: ' 156 cm',
          weight: '',
          bloodType: '',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://kpopjuice.com/img?url=https://img.imageimg.net/artist/xg/img/member_1002402.png',
        },
        {
          idName: 22,
          stageName: 'Cocona (ココナ/코코나)',
          birthName: 'Akiyama Kokona (秋山ここな / 아키야마 코코나) ',
          birthday: 'December 6, 2005',
          zodiacSign: 'Sagittarius',
          chineseZodiacSign: '',
          height: '',
          weight: '',
          bloodType: '',
          mbtiType: '',
          nationality: 'Japanese',
          img: 'https://kpopping.com/documents/d7/1/Cocona-fullBodyPicture(2).webp?v=88e9a',
        },
      ]
    },
  ]

  setGroup(allGroup)
}

