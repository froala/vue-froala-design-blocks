<template>
<div id="app">
  <section class="fdb-block" style="background-image: url(assets/imgs/alt_wide_1.svg);">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-12 col-sm-10 col-md-8 text-center text-sm-left">
          <h1>Froala Design Blocks</h1>
          <p class="h3">Over 170 responsive design blocks ready to be used in your web or mobile apps. All blocks are based on the Bootstrap Library, and they are the building blocks for beautiful websites.</p>
          <p class="mt-4">
            <a class="btn btn-dark mr-3 mr-sm-0" href="https://github.com/froala/design-blocks"><i class="fab fa-github"></i> Github Docs</a>
            <a class="btn btn-primary ml-sm-3 mr-3 mr-sm-0 mt-3 mt-sm-0" href="https://froala.com/design-blocks#playground">Official Website</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="fdb-block p-2" id="navigator">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md">
        <button class="navbar-toggler mr-auto ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav0">
          <nav class="m-auto">
            <router-link to="/call-to-action" class="btn btn-outline-primary m-1">Call To Action</router-link>
            <router-link to="/contacts" class="btn btn-outline-primary m-1">Contents</router-link>
            <router-link to="/contents" class="btn btn-outline-primary m-1">Contacts</router-link>
            <router-link to="/features" class="btn btn-outline-primary m-1">Features</router-link>
            <router-link to="/footers" class="btn btn-outline-primary m-1">Footers</router-link>
            <router-link to="/forms" class="btn btn-outline-primary m-1">Forms</router-link>
            <router-link to="/headers" class="btn btn-outline-primary m-1">Headers</router-link>
            <router-link to="/pricings" class="btn btn-outline-primary m-1">Pricings</router-link>
            <router-link to="/teams" class="btn btn-outline-primary m-1">Teams</router-link>
            <router-link to="/testimonials" class="btn btn-outline-primary m-1">Testimonials</router-link>
          </nav>
        </div>
      </nav>
    </div>
  </section>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
</template>

<style>
#navigator {
  position: sticky;
  top: 0;
  z-index: 1000;
}

#navigator .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 720px) {
  #navigator {
    border-bottom: 1px solid #ccc;
  }
}

#navigator a {
  font-size: 14px;
}

#navigator + section {
  padding: 250px 0;
}
</style>