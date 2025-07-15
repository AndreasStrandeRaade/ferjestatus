// Sett inn din Google Drive file ID her 👇
const statusUrl = "https://drive.google.com/uc?export=download&id=1wj9xM1_7L4vI0zG_6sENn2V58KHifHaG";

fetch(statusUrl)
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    const uteAvDrift = lines[0].trim() === 'true';
    const tilleggsinfo = lines.slice(1).join('\n').trim();

    const meldingEl = document.getElementById('melding');
    const bildeEl = document.getElementById('bilde');
    const driftsEl = document.getElementById('driftsmelding');

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

    if (tilleggsinfo.length > 0) {
      driftsEl.textContent = tilleggsinfo;
    }
  })
  .catch(error => {
    console.error("Klarte ikke hente statusfil:", error);
    document.getElementById('melding').textContent = "⚠️ Klarte ikke hente ferjestatus.";
  });
