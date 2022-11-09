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
        createCard ('23/11', 'quarta', 
        createGame ('marrocos', '7:00', 'croacia') +
        createGame ('alemanha', '10:00', 'japao') +
        createGame ('costarica', '13:00', 'espanha') +
        createGame ('belgica', '16:00', 'canada')
        ) +
        createCard('24/11', 'quinta', 
          createGame ('suica', '7:00', 'cameroon') +
          createGame ('uruguay', '10:00', 'coreasul') +
          createGame ('portugal', '13:00', 'gana') +
          createGame('brazil', '16:00', 'serbia') 
        ) +
        createCard('25/11', 'sexta', 
          createGame ('gales', '7:00', 'iran') +
          createGame ('qatar', '10:00', 'senegal') +
          createGame ('netherlands', '13:00', 'ecuador') +
          createGame('england', '16:00', 'usa')
        ) +
        createCard('26/11', 'sábado', 
          createGame ('tunisia', '7:00', 'australia') +
          createGame ('polonia', '10:00', 'arabiasaudita') +
          createGame ('franca', '13:00', 'dinamarca') +
          createGame('argentina', '16:00', 'mexico')
        ) 