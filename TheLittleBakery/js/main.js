const countdown = document.querySelector('.countdown');

const launchDate = new Date('Sep 1, 2021 10:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Distance from now to the launch date
  const distance = launchDate - now;

  //   Time calc
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours < 10 ? '0' + hours : hours}<span>Hours</span></div>
  <div>${mins < 10 ? '0' + mins : mins}<span>Minutes</span></div>
  <div>${seconds < 10 ? '0' + seconds : seconds}<span>Seconds</span></div>
  `;

  //   If launch date passed
  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = '#cc6588';
    countdown.innerHTML = 'Opened!';
  }
}, 1000);
