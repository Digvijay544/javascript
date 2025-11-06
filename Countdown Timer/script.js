function startCountdown() {
  const endDateInput = document.getElementById("endDate").value;

  if (!endDateInput) {
    document.getElementById("countdown").innerHTML =
      "Please select a valid date and time.";
    return;
  }

  const endDate = new Date(endDateInput).getTime();

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Countdown Expired!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}
