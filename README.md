Digitaalinen Linnunpönttö

Linnunpönttöön asennetussa Raspberry Pi:ssä käytettävä ohjelmisto, joka kerää ilmasto dataa RuuviTag laitteen avulla pöntöstä jossa on myös youtube livestreamiin valmiit upotukset.


**Asennusohjeet**

Tarvittavat ohjelmistot:

Node

npm

Visual Studio Code

Raspivid


**Käyttöohjeet**

Ensin hae projekti github repositoriosta ja aja komento npm install.

(Jos, sivustoa käynnistettäessä npm startilla se ei käynnisty vaan antaa jonkun alla olevan virheen, niin alla on myös korjaus tilanteeseen:

Tulee virhettä, että kaksi pakettia eivät asentuneet vaikka npm install käsky on annettu, asenna ne yksitellen erikseen

npm install react-icons
npm install styled-components


Tulee virhe, että firewatcher on ylittynyt niin suorita seuraava käsky Raspberryn pi:n omaan terminaaliin

sudo sysctl -w fs.inotify.max_user_watches=100000


Tulee virhe, kun yrittää alempana suorittaa käskyn: node Ruuvi.js. Tällöin suorita Raspberry pi:n omassa terminaalissa seuraava käsky

sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)

)


Sen jälkeen navigoi projektin kansioon jonka nimi on “Ruuvi”, siellä on sisällä javascript tiedosto nimeltä “Ruuvi.js”. 

Tässä käynnistetään datan kerääminen ruuvitagistä ja tallennetaan aina viimeisin tieto ruuvidata.json-tiedostoon korvaten aikaisempi mittausdata.
Paina oikealla hiiren painikkeella Ruuvi-kansiosta ja valitse “Open in integrated terminal” 
Ja siihen komento: node Ruuvi.js

Tässä käynnistetään palvelin joka hakee koko ajan tallennetun datan ruuvidata.json tiedostosta.
Sen jälkeen uudestaan RUUVI kansiota oikealla hiiren painikkeella “open in integrated terminal” 
Ja siihen komento: npx json-server --port=3001 --watch ruuvidata.json

Sen jälkeen avataan kolmas erillinen terminaali projektin juuren missä  ja syötetään komento: npm start 

Sivusto käynnistyy ja ensimmäisellä välilehdellä vihreällä alueella näkyy ruuvidatan mittaustiedot


**Youtube streamaus ohjeet**

Saadaksesi streamin näkyviin, täytyy ensimmäiseksi tehdä YouTube-tili. Tähän löydät erinomaiset ohjeet seuraavasta linkistä.

https://www.makeuseof.com/tag/live-stream-youtube-raspberry-pi/

Tässä artikkelissa esitettyyn komentoon täytyy vaihtaa avconv käskyyn ffmpeg:

raspivid -o - -t 0 -vf -hf -fps 30 -b 6000000 | ffmpeg -re -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 -i /dev/zero -f h264 -i - -vcodec copy -acodec aac -ab 128k -g 50 -strict experimental -f flv rtmp://a.rtmp.youtube.com/live2/[your-secret-key-here]
