function computerPlay()
    {
        let choices = ['Rock', 'Paper', 'Scissors']
        let randomChoice = [Math.floor(Math.random() * choices.length)];
        return choices[randomChoice];
    }

    function playRound(playerSelection, computerSelection)
    {
        computerSelection = computerSelection.toLowerCase();

        if(playerSelection===computerSelection)
        {
            return 'Draw.';
        }

        if(playerSelection==='rock')
        {
            switch(computerSelection)
            {
                case 'paper':
                    return 'You lose. Paper beats rock.';
                
                case 'scissors':
                    return 'You win! Rock beats scissors.';
            }
        }

        if (playerSelection==='paper')
        {
            switch(computerSelection)
            {
                case 'rock':
                    return 'You win! Paper beats rock.';
                
                case 'scissors':
                    return 'You lose. Scissors beats paper.';
            }
        }

        if (playerSelection==='scissors')
        {
            switch(computerSelection)
            {
                case 'rock':
                    return 'You lose. Rock beats scissors.';
                
                case 'paper':
                    return 'You win! Scissors beats paper.';
            }
        }
    }

    function game()
    {
        let roundCount = 1;
        let playerScore = 0;
        let computerScore = 0;
        while (roundCount<6)
        {
            let playerSelection = prompt('Type rock, paper or scissors')
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')
            {
                let computerSelection = computerPlay();
                let round = playRound(playerSelection, computerSelection);
                if(round.slice(4,5)==='l')
                {
                    ++computerScore;
                }
                else if(round.slice(4,5)==='w')
                {
                    ++playerScore;
                }
                roundCount++;
                alert('Round number: '+ (roundCount-1) + '\nComputer choose: '+ computerSelection + '\nResult:  ' +round + '\nYour Score: '+playerScore +'. Computer score: '+computerScore);
            }
            else
            {
                alert('Wrong input');
            }

            if(playerScore>computerScore && roundCount===6)
            {
                alert('Game ended. Result: You win!');
            }
            else if(playerScore===computerScore && roundCount===6)
            {
                alert('Game ended. Result: Draw.')
            }
            else if (roundCount===6)
            {
                alert('Game ended. Result: You lost :(')
            }
        }
    }