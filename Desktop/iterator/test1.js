let data =
 [
    {
        username: {
            name: "hello"
        }
    },
    {
        address: {
         city: "srinagar "
        }
    },
    {
         street: {
            name: "humza street"
        }
    },
    {
        "testingNewValue": {
            "xp-op-as": "value for testing"
        },
        "locationField": {
            "en-US": {
                "lat": 19.28563,
                "lon": 72.8691
            }
        }
    }
]
const value = data.map(el=>
  Object.fromEntries(Object.entries(el).map(([k, v]) => [k, Object.values(v)[0]]))
);
console.log(value);