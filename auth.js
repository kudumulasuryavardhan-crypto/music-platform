import { signInWithEmailAndPassword, signOut, onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "dashboard.html")
    .catch(e => error.textContent = e.message);
};

window.logout = () => signOut(auth);

onAuthStateChanged(auth, user => {
  if (!user && location.pathname.includes("dashboard")) {
    location.href = "login.html";
  }
});