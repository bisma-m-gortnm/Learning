const arr = [{
  'title': "some title",
  'channel_id': '123we',
  'options': [{
    'channel_id': 'abc',
    'image': 'http://asdasd.com/all-inclusive-block-img.jpg',
    'title': 'All-Inclusive',
    'options': [{
      'channel_id': 'dsa2',
      'title': 'Some Recommends',
      'options': [{
        'image': 'http://www.asdasd.com',
        'title': 'Sandals',
        'id': 1,
        'content': {
          //...
        }
      }]
    }]
  }]
}]

const customFilter = (object, key, value) => {
  if (Array.isArray(object)) {
    for (const obj of object) {
      const result = customFilter(obj, key, value);
      if (result) {
        return obj;
      }
    }
  } else {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return object;
    }

    for (const k of Object.keys(object)) {
      if (typeof object[k] === "object") {
        const o = customFilter(object[k], key, value);
        if (o !== null && typeof o !== 'undefined')
          return o;
      }
    }

    return null;
  }
}

console.log(customFilter(arr, 'id', 1))