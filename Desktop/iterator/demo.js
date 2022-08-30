const list = {
    value: {
        name: "bisma"
    },
    next: {
        value: {
            city: "srinagar"
        },
          next: {
                value: {
                    lane: "humza"
                }
            },
        next: {
            value: {
                street: "soura"
            },
          
            next: {
                value: {
                    lane:"humza"
                },
            }
        }
    }
};

const get_keys = ({ value, next }) =>
    next ? [value, ...get_keys(next)] : [value];

console.log(get_keys(list));