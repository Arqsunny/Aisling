var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.2880877932946042,
        "pitch": -0.06895549741196838,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -0.7050754816121358,
          "pitch": -0.07757301631931668,
          "rotation": 1.5707963267948966,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.3228678123577087,
        "pitch": 0.04134229293859626,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 2.643122303695363,
          "pitch": 0.04019083100836873,
          "rotation": 0,
          "target": "0-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.2677503487314379,
        "pitch": 0.46370300228369565,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 0.2032054675805881,
          "pitch": 0.11450576039569782,
          "rotation": 1.5707963267948966,
          "target": "0-exterior"
        },
        {
          "yaw": -0.694474102078928,
          "pitch": 0.06619223737992819,
          "rotation": 4.71238898038469,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.927991410931069,
          "pitch": 0.04915945178730041,
          "rotation": 0,
          "target": "8-patio"
        },
        {
          "yaw": -1.825567308741057,
          "pitch": 0.011290820119967293,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -1.7151643394720182,
          "pitch": 0.004118365838760241,
          "rotation": 1.5707963267948966,
          "target": "5-bedroom1"
        },
        {
          "yaw": -1.9503338162475288,
          "pitch": 0.0010057134567134085,
          "rotation": 4.71238898038469,
          "target": "4-bath-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.14077363260633646,
        "pitch": 0.08469986798210805,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 0.17515699327332968,
          "pitch": 0.06443221645428387,
          "rotation": 0,
          "target": "2-livingroom"
        },
        {
          "yaw": 0.924187862290303,
          "pitch": 0.017166136791495035,
          "rotation": 0,
          "target": "4-bath-1"
        },
        {
          "yaw": -0.5640765426696017,
          "pitch": 0.04590873575968146,
          "rotation": 4.71238898038469,
          "target": "5-bedroom1"
        },
        {
          "yaw": 1.8437619419697446,
          "pitch": -0.23619330244062908,
          "rotation": 1.5707963267948966,
          "target": "7-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bath-1",
      "name": "Bath 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.03799320119844651,
        "pitch": -0.1185195184154928,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 2.918907324398937,
          "pitch": 0.161158342585086,
          "rotation": 0,
          "target": "5-bedroom1"
        },
        {
          "yaw": 2.572118633936185,
          "pitch": -0.009109698117136134,
          "rotation": 4.71238898038469,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.2924162927752736,
        "pitch": 0.2004390262356246,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -1.0669857569258294,
          "pitch": 0.11541181562703784,
          "rotation": 0,
          "target": "4-bath-1"
        },
        {
          "yaw": -1.2912338626803148,
          "pitch": 0.04091820503742838,
          "rotation": 4.71238898038469,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bath-2",
      "name": "Bath 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.234585578628871,
        "pitch": 0.060693454944757974,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 0.4342266297880961,
          "pitch": 0.09462180159753153,
          "rotation": 0,
          "target": "7-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom2",
      "name": "bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8623889576242076,
        "pitch": 0.17826158045754603,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -1.8330549430733214,
          "pitch": 0.188856100182754,
          "rotation": 10.210176124166829,
          "target": "3-hall"
        },
        {
          "yaw": 1.387128699943954,
          "pitch": 0.2959636392198295,
          "rotation": 0,
          "target": "6-bath-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-patio",
      "name": "patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8656309910722157,
          "pitch": -0.008258683101473707,
          "rotation": 0,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
