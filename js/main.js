class MyHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
  <header>
    <!-- Nav Section -->
    <i class="fa-solid fa-bars" id="burger" onclick="openNav()"></i>
    <i class="fa-solid fa-xmark" id="closeBurger" onclick="closeNav()"></i>
    <nav class="navbar">
      <a id="logo" href="./Home.html"><img src="../logos/logo-original-white.png" /></a>
      <div class="navitems">
        <a class="active" href="Home.html"><i class="fa fa-fw fa-home"></i>
          <p>Home</p>
        </a>
        <a href="https://rules.animeparlour.xyz/" target="_blank"><i class="fa-solid fa-gavel"></i>
          <p>Server Rules</p>
        </a>
        <a href="/pages/stafflist.html"><i class="fa-solid fa-list"></i>
          <p>Staff List</p>
        </a>
        <a href="/pages/FAQ.html"><i class="fa-solid fa-circle-question"></i>
          <p>FAQ</p>
        </a>
        <a href="https://top.gg/servers/737651436220842034" target="_blank"><i
            class="fa-solid fa-circle-dollar-to-slot"></i>
          <p>upvote us</p>
        </a>
        </a>
      </div>
    </nav>
  </header>
  `
    }
}

customElements.define("my-header", MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
    <h2 id="conv">Join a Conversation. Over 35.000 Members</h2>
    <section>
    <div id="socialmedia">
      <h3>social Media</h3>
      <a href="https://www.instagram.com/anime_parlour/" target="_blank">Instagarm</a>
      <a href="https://discord.com/invite/life" target="_blank">Discord</a>
    </div>
    <div id="appeals">
      <h3>appeals</h3>
      <a href="https://discord.gg/EqXamkrHP9" target="_blank">Appeal your ban</a>
    </div>
    <div id="help">
      <h3>help</h3>
      <a href="https://rules.animeparlour.xyz/" target="_blank">server rules</a>
      <a href="/pages/stafflist.html" target="_blank">Staff List</a>
    </div>
    <div id="contact">
      <h3>contact</h3>
      <a>Email</a>
    </div>
  </section>
  </footer>
  `
    }
}

customElements.define("my-footer", MyFooter)