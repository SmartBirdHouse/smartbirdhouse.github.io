//Haetaan bluetoothilla ruuvitag ja tallennetaan sen tuottama data
//JSON-muodossa tiedostoon. 
//Skripti käynnistetään käskyllä 'node Ruuvi.js'

const ruuvi = require('node-ruuvitag');
 
ruuvi.on('found', tag => {
  console.log('Found RuuviTag, id: ' + tag.id);
  tag.on('updated', data => {
    const ruuvidata = ("{"+'"ruuvidata"'+":"+"["+
      JSON.stringify(data, null, '\t')+"]"+"}");
      console.log(ruuvidata)

      fs = require('fs');
fs.writeFile('ruuvidata.json', ruuvidata, function (err) {
  if (err) return console.log(err);

});
  });
});
 
ruuvi.on('warning', message => {
  console.error(new Error(message));
});