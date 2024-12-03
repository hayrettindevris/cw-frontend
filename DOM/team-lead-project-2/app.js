      let firstScore = 0;
      let secondScore = 0;
      let targetScore = 0;
      
      const firstScoreElement = document.querySelector('.firstScore');
      const secondScoreElement = document.querySelector('.secondScore');
      const inputElement = document.querySelector('.input');
      const button1 = document.querySelector('.b1');
      const button2 = document.querySelector('.b2');
      const resetButton = document.querySelector('.b3');
      
      button1.onclick = function() {
        if (targetScore > 0) {
          firstScore = firstScore + 1;
          firstScoreElement.textContent = firstScore;
          
          if (firstScore >= targetScore) {
            alert('Player 1 wins!');
            button1.disabled = true;
            button2.disabled = true;
            firstScoreElement.classList.add('winner');
            secondScoreElement.classList.remove('winner');
          }
        }
      };
      
      button2.onclick = function() {
        if (targetScore > 0) {
          secondScore = secondScore + 1;
          secondScoreElement.textContent = secondScore;
          
          if (secondScore >= targetScore) {
            alert('Player 2 wins!');
            button1.disabled = true;
            button2.disabled = true;
            secondScoreElement.classList.add('winner');
            firstScoreElement.classList.remove('winner');
          }
        }
      };
      
      resetButton.onclick = function() {
        firstScore = 0;
        secondScore = 0;
        targetScore = 0;
        
        firstScoreElement.textContent = firstScore;
        secondScoreElement.textContent = secondScore;
        inputElement.value = '';
        
        button1.disabled = false;
        button2.disabled = false;
        
        firstScoreElement.classList.remove('winner');
        secondScoreElement.classList.remove('winner');
      };
      
      inputElement.oninput = function() {
        targetScore = parseInt(inputElement.value);
        
        if (isNaN(targetScore) || targetScore <= 0) {
          targetScore = 0;
        }
      };