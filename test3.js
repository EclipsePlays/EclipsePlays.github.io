
function calculateTimeElapsed() {
    const startDate = new Date('2006-04-19');
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


    document.getElementById('timeElapsed').innerText = 
    `${daysElapsed} total days`;
}
