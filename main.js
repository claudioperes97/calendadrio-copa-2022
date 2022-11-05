function createGame (player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}">
    </li>
  `
}

let delay = -0.1;
function createCard (date, day, games) {
  delay = delay + 0.1;
  return `
    <div class="card" style= "animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                
                <ul>
                ${games}                    
                </ul>
            </div>
  `
}

document.querySelector('#cards').innerHTML = 
        createCard ('20/11', 'Domingo',
          createGame ('qatar', '13:00', 'ecuador')
        ) +
        createCard('21/11', 'segunda', 
        createGame('england', '10:00', 'iran') +
        createGame ('senegal', '13:00', 'netherlands') +
        createGame ('usa', '16:00', 'gales')
        ) +
        createCard ('22/11', 'terça', 
        createGame ('argentina', '7:00', 'arabiasaudita') +
        createGame ('dinamarca', '10:00', 'tunisia') +
        createGame ('mexico', '13:00', 'polonia') +
        createGame ('franca', '16:00', 'australia')
        ) +
        createCard('24/11', 'quinta', 
          createGame('brazil', '16:00', 'serbia') +
          createGame ('hungary', '13:00', 'argentina')
        ) +
        createCard('28/11', 'segunda', 
          createGame ('switzerland', '13:00', 'brazil') +
          createGame ('portugal', '16:00', 'uruguay')
        ) +
        createCard('02/12', 'sexta', 
          createGame ('brazil', '16:00', 'cameroon')
        )