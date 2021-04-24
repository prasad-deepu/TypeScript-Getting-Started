function startGame() {

    let PlayerName: string |undefined = getInputValue('playername')
    //PlayerName = undefined;
    logPlayer(PlayerName);
    postScore(100,PlayerName);
    //var messageElement = document.getElementById('messages');
    //messageElement!.innerText = 'Welcome to MultiMath! Starting game now...';
}

function logPlayer(name: string = "renuka"): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {

    const inputElement :HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === ''){
        return undefined;
    }
    else {
        return inputElement.value;
    }

}

function postScore(score: number ,playerName?: string): void {
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText =`${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);