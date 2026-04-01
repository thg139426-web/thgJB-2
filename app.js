function installJB() {
  alert("THGJB installation started 🔥");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW registered"))
    .catch(err => console.log(err));
}
