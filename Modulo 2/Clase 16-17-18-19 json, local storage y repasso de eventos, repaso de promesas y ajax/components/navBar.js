const header = document.querySelector('header');

const navBar = () => {
  const user = JSON.parse(localStorage.getItem('userLog'));
  const ADMIN_ROLE = 'ADMIN';
  return (header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
           ${
             user
               ? ''
               : `<li class="nav-item">
              <a class="nav-link" href="./login.html">Login</a>
            </li>`
           }
           ${
             user
               ? ''
               : `<li class="nav-item">
             <a class="nav-link" href="./register.html">Register</a>
           </li>`
           }
           ${
             user
               ? `<li class="nav-item">
              <a class="nav-link" href="#">${user.userName}</a>
            </li>`
               : ``
           }
           ${
             user && user.role === ADMIN_ROLE
               ? `<li class="nav-item">
             <a class="nav-link" href="#">Panel de administrador</a>
           </li>`
               : ``
           }
           ${
             user
               ? `<li class="nav-item">
             <button class="btn btn-dark btn-sm" onclick="localStorage.clear(), window.location.reload()">Cerrar sesion</button>
           </li>`
               : ``
           }
          </ul>
        </div>
      </div>
    </nav>`);
};

export default navBar;
