const fileId = "1wj9xM1_7L4vI0zG_6sENn2V58KHifHaG";  // din Google Drive-fil-ID
const apiKey = "AIzaSyDlPK8WkSWpaoIQ4MX-tR8MYYkSESZExAg";              // din Google API-nøkkel

fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`)
  .then(response => response.text())
  .then(text => {
    const uteAvDrift = text.trim().toLowerCase() === "true";

    const meldingEl = document.getElementById("melding");
    const bildeEl = document.getElementById("bilde");

    if (uteAvDrift) {
      meldingEl.textContent = "😢 Jepp – Randsfjordferja er ute av drift.";
      meldingEl.classList.add("ikke-drift");
      bildeEl.src = "uteavdrift.png";
      bildeEl.alt = "Ferja er ute av drift";
    } else {
      meldingEl.textContent = "😊 Neida, Randsfjordferja er i drift!";
      meldingEl.classList.add("drift");
      bildeEl.src = "idrift.png";
      bildeEl.alt = "Ferja er i drift";
    }
  })
  .catch(error => {
    console.error("Kunne ikke hente ferjestatus:", error);
  });
