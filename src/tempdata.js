const tempData = [
  { name: 'Einundfünfzig',
    snippet_text: undefined,
    snippet_image_url: undefined,
    url: 'http://www.yelp.com/biz/einundf%C3%BCnfzig-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Haifisch Club',
    snippet_text: 'Absolutely one of my favorite places in Cologne!\n1st because is one of those places where they get to know you and you\'ll get a really nice feeling of...',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/bhX5TB3ZDyMt0Rxe-BWtQg/ms.jpg',
    url: 'http://www.yelp.com/biz/haifisch-club-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Die Wohngemeinschaft',
    snippet_text: 'It\'s great when you just want to meet a friend in the late afternoon for a chai latte or beers, but not as pleasant if you go in the late evening on the...',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/8bFsXTikndKDf86pva06cQ/ms.jpg',
    url: 'http://www.yelp.com/biz/die-wohngemeinschaft-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Seiberts',
    snippet_text: 'Toller Laden. Fairer Preis (gehört zu den teuersten in Köln -aber berechtigt). \n\nPunkt.\nJa, alles zum Punkt gebracht, wenn man weiß was man eigentlich...',
    snippet_image_url: 'http://s3-media3.fl.yelpcdn.com/photo/FgEH0U_QNKXZK6b7PXrr7w/ms.jpg',
    url: 'http://www.yelp.com/biz/seiberts-classic-bar-und-liquid-kitchen-k%C3%B6ln-2?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Ona Mor',
    snippet_text: 'We came here for the first time for Valentine\'s Day and bought the special Valentines package, and we of course had high expectations due to the rave...',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/oA5tDwM-IpsmHqc36EXYzQ/ms.jpg',
    url: 'http://www.yelp.com/biz/ona-mor-k%C3%B6ln-2?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Kölschbar',
    snippet_text: undefined,
    snippet_image_url: undefined,
    url: 'http://www.yelp.com/biz/k%C3%B6lschbar-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Stiefel',
    snippet_text: 'I loved this bar. When I wandered in here with the motley crew that I was with I felt like I was at any of my favorite bars on 2nd Ave in NYC.\n\nGraffiti on...',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/NMsBI6HwDyAvBKrnW9zwNg/ms.jpg',
    url: 'http://www.yelp.com/biz/stiefel-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Shepheard',
    snippet_text: 'Definitely the best bar in cologne and one of the best bars you could find anywhere. The barkeeper knows his sh*t! He can give recommendations based on the...',
    snippet_image_url: 'https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/189f2ca1fe8c/assets/img/default_avatars/user_medium_square.png',
    url: 'http://www.yelp.com/biz/shepheard-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Bar Boogaloo',
    snippet_text: undefined,
    snippet_image_url: undefined,
    url: 'http://www.yelp.com/biz/bar-boogaloo-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Barracuda Bar',
    snippet_text: 'I like this place! It\'s really hard to come by a nice dance place where there\'s decent music and the crowd is cool but this bar does a good job of all of that.',
    snippet_image_url: 'http://s3-media1.fl.yelpcdn.com/photo/OxITZJc2YGLwDg7mdBUj-g/ms.jpg',
    url: 'http://www.yelp.com/biz/barracuda-bar-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Scheinbar',
    snippet_text: undefined,
    snippet_image_url: undefined,
    url: 'http://www.yelp.com/biz/scheinbar-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Sonic Ballroom',
    snippet_text: 'Punk\'s not dead!',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/O0VDJHcRZJn13WXgnGLZsg/ms.jpg',
    url: 'http://www.yelp.com/biz/sonic-ballroom-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Icebar',
    snippet_text: 'My wife and I visited Germany last week and stayed at the Hilton (wonderful rooms and service) and were fortunate enough to be there one night the Ice Bar...',
    snippet_image_url: 'http://s3-media3.fl.yelpcdn.com/photo/tyt0lw_jHvotLM3O7wVRZA/ms.jpg',
    url: 'http://www.yelp.com/biz/icebar-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'The Corkonian',
    snippet_text: 'Mad house. Filled with drunken Irish customers, and crazy Irish staff. The guys behind the bar are excellent, encouraging drunken nonsense by pouring free...',
    snippet_image_url: 'http://s3-media4.fl.yelpcdn.com/photo/RCrvQ8ZkyGNIlnDo_SeHzw/ms.jpg',
    url: 'http://www.yelp.com/biz/the-corkonian-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Barrios',
    snippet_text: 'We had a very nice evening in a crowdy bar with a lot of salsa rythm while talking was still no problem. We had the brownie which we can really recommend.',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/Muzp-pqAiAT8fEQtQ8143w/ms.jpg',
    url: 'http://www.yelp.com/biz/barrios-k%C3%B6ln-2?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Tankstelle',
    snippet_text: 'Friendly bar staff, nice crowd and good beerwhat more can you ask for on a friday night? I really enjoyed it there, although i could do with slightly less...',
    snippet_image_url: 'http://s3-media4.fl.yelpcdn.com/photo/8ygKcjPoWelytYAeztpDmQ/ms.jpg',
    url: 'http://www.yelp.com/biz/tankstelle-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Zwoeinz',
    snippet_text: 'Come to zwoeinz if you\'re looking for a small cocktail bar right in the middle of Cologne\'s major party district (between Zulpicher Str and Luxemburger Str)...',
    snippet_image_url: 'http://s3-media3.fl.yelpcdn.com/photo/rtQjOQTZ_5TM2RkOlfBq0g/ms.jpg',
    url: 'http://www.yelp.com/biz/zwoeinz-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Underground',
    snippet_text: 'good location & music, cheap prizes and party until the morning',
    snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/KibosQ6sbpEbmYdQC04mpw/ms.jpg',
    url: 'http://www.yelp.com/biz/underground-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Heimathirsch',
    snippet_text: undefined,
    snippet_image_url: undefined,
    url: 'http://www.yelp.com/biz/heimathirsch-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' },
  { name: 'Sixpack',
    snippet_text: 'A buddy of mine introduced the Sixpack as "a huge variety of national and international beer".\n\n\n But after we got there I was a little disappointed of the...',
    snippet_image_url: 'http://s3-media3.fl.yelpcdn.com/photo/TW5w4YhM3vrOiOamT2jflw/ms.jpg',
    url: 'http://www.yelp.com/biz/sixpack-k%C3%B6ln?adjust_creative=msWtN9DyS4T7CEfJyeZ0Gw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=msWtN9DyS4T7CEfJyeZ0Gw' 
  } ]

  export default tempData