import React from 'react'

const Navbar = () => {
  return (
    <><div className = "header">
      <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand">

            <img src="https://c4.wallpaperflare.com/wallpaper/84/210/523/multiple-display-marvel-comics-dc-comics-spider-man-wallpaper-preview.jpg" width="45" alt="" class="d-inline-block align-middle mr-2"></img>
            <span class="text-uppercase font-weight-bold">AnimePlanet</span>
          </a>

          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
        </div>
      </nav>
    </div> 
    </>
  );
}

export default Navbar
