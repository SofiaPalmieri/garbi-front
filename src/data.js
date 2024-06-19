 const data= [
    ["Ash, green", 43.6495364521731, -79.41618733111581],
    ["Birch, white", 43.8037189558964, -79.3545349538418],
    ["Maple, Manitoba", 43.6776251576906, -79.2760802497644],
    ["Elm, American 'Valley Forge'", 43.7436916067803, -79.4252057780298],
    ["Spruce, Colorado blue", 43.733888921533, -79.3153757933933],
    ["Maple, Norway 'Schwedler'", 43.7132521970695, -79.5517852249759],
    ["Mulberry, white", 43.7582445715909, -79.37784831953951],
    ["Elm, Siberian", 43.6924692344483, -79.4792948383182],
    ["Kentucky coffee", 43.7579181701515, -79.5695018286236],
    ["Katsura, Japanese", 43.646809759809, -79.45258974840542],
    ["Elm, American", 43.73559764660771, -79.4000834768246],
   
    
  ];

  const redData=[
    ["Maple, Norway", 43.6717940983563, -79.28312281638772],
    ["Oak, white", 43.705484262474, -79.5178284396172],
    ["Honey locust, 'Skyline'", 43.6616682848291, -79.5697277859886],
    ["Walnut, black", 43.7274487960523, -79.3975528221359],
    ["Maple, Norway", 43.6925567264301, -79.4349956679899],
    ["Maple, Manitoba", 43.786840388051004, -79.1546922075637],
    ["Maple, Freeman 'Autumn Blaze'", 43.7026413502175, -79.3765840238831],
    ["Maple, silver", 43.7493149875177, -79.331364610784],
    ["Linden", 43.7230403273013, -79.3991290518129],
    ["Maple, Norway", 43.8147046315825, -79.2165211897526],
    ["Horsechestnut", 43.7141250143013, -79.4121426520126],
  ];

export const trees = data.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng }),
  }));

  export const redTrees = redData.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng }),
  }));