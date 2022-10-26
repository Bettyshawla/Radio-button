/*
1. Create a new HTML/CSS/JS replLinks to an external site.Links to an external site. page and complete the following in your .js file
2. Give it a property called stations and make the value an array of station objects
3. Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
4. Song object should have two properties: title and artist
5. Create a currentStation property on your radio object
6. Create a method on your radio object that changes the station. 
7. When the station is changed, pick a song from that station console.log("Now Playing:" + song.title + "by" + song.artist)
*/

const radio = {
    currentStation: 0,
    stations: [
      {
        name: "92.9",
        songs: [
          {
            title: "Somebody That I used to know",
            artist: "Gotye"
          },
          {
            title: "Drunk in love",
            artist: "Beyonce"
          }
        ]
      },
      {
        name: "97.9",
        songs: [
          {
            title: "444",
            artist: 'Jay Z'
          },
          {
            title: 'WAKA WAKA',
            artist: "Shakira"
          }
        ]
      },
      {
        name: "99.7",
        songs: [
          {
            title: "Last friday night",
            artist: 'Katty Perry'
          },
          {
            title: 'Umbrella',
            artist: "Rihanna"
          }
        ]
      },
    ],
    
    changeStation: () => {
      let newStation 
      
      if (radio.currentStation === radio.stations.length - 1) {
        radio.currentStation = 0
        newStation = radio.stations[radio.currentStation]
       
      } else {
        radio.currentStation += 1
        newStation = radio.stations[radio.currentStation]
      }
      
      const song = newStation.songs[Math.floor(Math.random() * newStation.songs.length)]

  // const result = `Station: ${newStation.name} | Now Playing: ${song.title} by ${song.artist}`
  let stationEl = document.querySelector('#station')
  stationEl.textContent = `${newStation.name}`;
  
  let songEl = document.querySelector('#Song')
  songEl.textContent = `${song.title} by ${song.artist}`

  console.log(`Station: ${newStation.name} | Now Playing: ${song.title} by ${song.artist}`)
    }

  }

let changeButton = document.querySelector('.btn')
changeButton.addEventListener('click', radio.changeStation)