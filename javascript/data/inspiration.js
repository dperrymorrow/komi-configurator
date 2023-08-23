const images = [
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/365092628_1256712115008125_6931245844945026315_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=NDEeOTN2dYwAX9kgQ0M&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE2NDQ1OTUyODgzMzkzNzQxMw%3D%3D.2-ccb7-5&oh=00_AfDhikzYlef6BTHY5OUXrjJHQNuwxcumVz-1Ys6Nh6y92w&oe=64EC35A7&_nc_sid=ee9879",
    caption: "Smoke & Teal",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/366143355_640021957878061_971272897072120390_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=eJ546pWxvC4AX_Ls1dJ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE2NDQ1OTUyODU3MzcxMTY2Nw%3D%3D.2-ccb7-5&oh=00_AfARU6sDF_WsdnKyQ08d39yO2Oq-SgPal5TxKN4yzR2-Sg&oe=64EBB6E8&_nc_sid=ee9879",
    caption: "Smoke & Teal with velcro",
    tags: ["clamshell"],
  },

  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/352675015_225317376974124_2696118685405381509_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=8qV-Ku2qPI8AX91LS2i&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzEyMzA3NzIxODk0NDM4MjE3MQ%3D%3D.2-ccb7-5&oh=00_AfBhKUxgl5rhOkHyVahfZo6lFHLC-BjTg-k1mKG12bMvrw&oe=64EAFE0F&_nc_sid=b41fef",
    caption: "Floro Pink Interior",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345449393_750042893512569_7830351349539960823_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=_WzkoOlb4kQAX93vdnn&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODM1MDM1MzQ5NDM2NDk3NQ%3D%3D.2-ccb7-5&oh=00_AfBV7tqvBDeSn7lE0n93RPAJDri3j1ZLrhVQTIr-I_wtnw&oe=64EB41A2&_nc_sid=b41fef",
    caption: "Teal & Smoke",
    tags: ["clamshell", "teal", "smoke"],
  },

  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/345261171_274090471634138_3960463955755999428_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aRIdzwozxWgAX9Xjzur&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5ODM1MDM1MzYyMDMyMDAxMQ%3D%3D.2-ccb7-5&oh=00_AfDAgjIjXByfM2PKECRnfztLyMd2wHJ9bjKRQ3_USK3Spg&oe=64EBBB62&_nc_sid=b41fef",
    caption: "Interiors",
    tags: ["clamshell"],
  },

  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340148045_5765990160196548_2153075531498703318_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=5ZE4sYIDJ2UAX-i2RL1&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTY5NTAzNjQ4NA%3D%3D.2-ccb7-5&oh=00_AfAcr-iSQxAdRdM7v5gebSdbNKVIjoiovsI0dTH6dL_Y_g&oe=64EAB963&_nc_sid=b41fef",
    caption: "Sunflower & Olive Drab",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340185908_906368390635657_235018691483768326_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=JyIpHcXUfPkAX-IZ6oj&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTUwMjA3NzMwMA%3D%3D.2-ccb7-5&oh=00_AfAzAaVqjJxFkFls_BGZyMq6EWA8YVxlEYXHE4CgMIo_Zg&oe=64EC074C&_nc_sid=b41fef",
    caption: "Blue Camo & Light Gray",
    tags: ["clamshell"],
  },

  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340322432_599310802256951_1568266017641403660_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=lj85mnj6VFMAX_GGjEi&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTUwMTg5NDE2OA%3D%3D.2-ccb7-5&oh=00_AfD0joyNbEphdqGXCD9RuBpsAjbR6wLD8T1dSRQFEfRWyQ&oe=64EB9BD6&_nc_sid=b41fef",
    caption: "Burgundy & Sunflower",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340018688_1962168814131969_3229289620766373558_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ZDdjf0H-cuAAX_Rf_OC&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTYzNjE0MjE2OQ%3D%3D.2-ccb7-5&oh=00_AfAWcXNHCj3NeK2IxRkqDxlEw4qUaWQdIXpGIpU3NgKmGw&oe=64EA6B46&_nc_sid=b41fef",
    caption: "Olive Drab & Sunflower",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340177150_765963374968489_1773475556824435030_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Yw5CelZWJ9wAX-8v9uI&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTczNjkyOTQzMg%3D%3D.2-ccb7-5&oh=00_AfDCqNV5JArsxjeGoPGPDJsC4VfOphhzRGEv3-6F2-kVpg&oe=64EB1444&_nc_sid=b41fef",
    caption: "Blue Camo & Light Gray",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340023160_776712703804632_2155421797897643825_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=pyvei07qQ3MAX9CNx-j&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTUwMjAxODM4NQ%3D%3D.2-ccb7-5&oh=00_AfDLYG6VvzRYuRDu5ZmwotZbPjXl4iQiuIwk5rc9pFVrbg&oe=64EB443E&_nc_sid=b41fef",
    caption: "Blue Camo & Light Gray & Turquoise",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/339978305_226242363393875_2091275579307534649_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=7j_SvJVHT14AX-2dngq&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTQ5MzYzMDI3NA%3D%3D.2-ccb7-5&oh=00_AfCnKgpuFHKuWt6OZUNUKoQIaPYkAP318KCp_bgpGrIVUg&oe=64EBF026&_nc_sid=b41fef",
    caption: "Burgundy & Sunflower",
    tags: ["clamshell"],
  },
  {
    src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/340010798_1320679855178419_3021093215321969122_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=mEbfc9CONbMAX9PZyUd&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3NTg4MTk3OTYxOTMxNzU5OA%3D%3D.2-ccb7-5&oh=00_AfBichZ1v6igN3hw-EaHchrzMj59hRtOB3Yc-tnRKDlweA&oe=64EB6AB2&_nc_sid=b41fef",
    caption: "Assorted Styles",
    tags: ["clamshell"],
  },
];

export default {
  findImagesForTag(tag) {
    console.log(tag);
    return images.filter(({ tags }) => tags.includes(tag));
  },
  images,
};
