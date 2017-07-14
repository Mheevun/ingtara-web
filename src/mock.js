export const METER_TYPE = {
    ELECTRIC: "Electric",
    WATER: "Water"
}
export const CONTRACT_TYPE = {
    MONTHLY: "Monthly",
    DAILY: "Daily"
}
export const ITEM_TYPE = {
    ROOM: "Room",
    SPACE: "Space"
}

export default {
    "items":{
        "item1": {
            "type" : ITEM_TYPE.ROOM,
            "name": "301",
            "floor": "3",
            "electricMeter": {"meter1": true},
            "waterMeter": {"meter2": true},
            "contract": "contract1"
        },
        "item2": {
            "type" : ITEM_TYPE.SPACE,
            "name": "Rim Num",
            "floor": "1",
            "electricMeter": {"meter3": true, "meter4": true},
            "waterMeter": {"meter5": true},
        }
    },
    "contracts": {
        "contract1": {
            "type": CONTRACT_TYPE.MONTHLY,
            "room": "room1", //../items/rooms/room1
            "startAt": "1452488445471",
            "endAt": "1452488545471",
            "contractor": {"contractor1":true}
        },
        "contract2": {
            "type": CONTRACT_TYPE.MONTHLY,
            "space": "space1",
            "startAt": "1452488445471",
            "endAt": "1452488545471",
            "contractor": {"contractor2":true}
        }
    },
    "meters": {
        "room1": {
            "meter1": {
                "type": METER_TYPE.ELECTRIC,
            },
            "meter2": {
                "type": METER_TYPE.WATER,
            }
        }

    },
    "contractors": {
        "contractor1": {
            "name": "Alice",
            "email": "xxx@xx.com",
        },
        "contractor2": {
            "name": "Bob",
            "email": "xxx@xx.com",
        }
    },
    "meterLogs": {
        "log1": {
            "meter": "meter1",
            "month": "February",
            "modified": "1452488445471",
            "unit": "1234"
        },
        "log2": {
            "meter": "meter1",
            "month": "January",
            "modified": "1452488445471",
            "unit": "1234"
        },
        "log3": {
            "meter": "meter2",
            "month": "February",
            "modified": "1452488445471",
            "unit": "1234"
        }
    }
}