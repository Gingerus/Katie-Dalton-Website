const countdownDate = new Date("Sep 6, 2025 15:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  if (timeRemaining > 0)
    {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ('0' +minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ('0' +seconds).slice(-2);
    }
};

setInterval(updateCountdown, 1000);