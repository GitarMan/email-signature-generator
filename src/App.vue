<template>
  <div id="app">
    <h1>Email Signature Creator</h1>
    <div class="creator">
      <section>
        <div class="creator__input">
          <h2>Input</h2>
          <form>
            <input
              v-model="name"
              placeholder="Name"
              autocomplete="new-name" />
            <input
              v-model="title"
              placeholder="Title"
              autocomplete="new-title" />
            <input
              v-model="license"
              placeholder="License Number"
              autocomplete="license-number" />
            <input
              v-model="addressLine1"
              placeholder="Address Line 1"
              autocomplete="addressLine1" />
            <input
              v-model="addressLine2"
              placeholder="Address Line 2"
              autocomplete="addressLine2" />
            <input
              v-model="city"
              placeholder="City"
              autocomplete="city" />
            <input
              v-model="state"
              placeholder="State"
              autocomplete="state" />
            <input
              v-model="zipcode"
              placeholder="Zip Code"
              autocomplete="zipcode" />
            <input
              v-model="telephone1"
              placeholder="Phone"
              autocomplete="new-phone1" />
            <input
              v-model="telephone2"
              placeholder="Phone 2"
              autocomplete="new-phone2" />
            <input
              v-model="email"
              placeholder="Email"
              autocomplete="email" />
            <input
              v-model="website"
              placeholder="Website"
              autocomplete="website" />
            <input
              v-model="facebook"
              placeholder="Facebook"
              autocomplete="facebook" />
            <input
              v-model="linkedin"
              placeholder="LinkedIn"
              autocomplete="linkedin" />
            <input
              v-model="twitter"
              placeholder="Twitter"
              autocomplete="twitter" />
            <input
              v-model="youtube"
              placeholder="YouTube"
              autocomplete="youtube" />
            <input
              id="logo-checkbox"
              type="checkbox"
              v-model="logoCheckbox" />
            <label for="logo-checkbox">Display Logo</label>
          </form>
        </div>
        <div class="creator__output">
          <h2>Output</h2>
          <div class="creator__source">

            <div id="source-wrapper" ref="sourceWrapper">
                <table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
                    <tr>
                        <td style="font-size:0px;"> <img v-if="logoCheckbox" src="https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png" border="0" style="padding-top: 8px;" width="100"> </td>
                        <td style="padding-left:10px;">
                            <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>, <span style="color: #78909c;">{{ title || "Inventor" }}</span>
                            <span v-if="license !== ''"> <br>License #{{ license }}</span>
                            <span v-if="addressLine1 !== ''"> <br>{{ addressLine1 }}</span>
                            <span v-if="addressLine2 !== ''"> <br>{{ addressLine2 }}</span>
                            <span v-if="city !== ''"> <br>{{ city }}</span><span v-if="state !== ''">, {{ state }}</span><span v-if="zipcode !== ''"> {{ zipcode }}</span>
                            <br> <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if="telephone2" style="color:#999;"> | </span> <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a>
                            <span v-if="email!==''"> <br> <a tabindex="-1" :href="emailLink" style="color:#1f96f2;"> {{ email }}</a> </span>
                            <br> <span v-if="website!==''" style="color:#999;"> • <a tabindex="-1" :href="checkHttp(website)" style="color:#1f96f2;">Website</a> </span>
                            <span v-if="facebook!==''" style="color:#999;"> • <a tabindex="-1" :href="checkHttp(facebook)" style="color:#1f96f2;">Facebook</a> </span>
                            <span v-if="linkedin!==''" style="color:#999;"> • <a tabindex="-1" :href="checkHttp(linkedin)" style="color:#1f96f2;">LinkedIn</a> </span>
                            <span v-if="twitter!==''" style="color:#999;"> • <a tabindex="-1" :href="checkHttp(twitter)" style="color:#1f96f2;">Twitter</a> </span>
                            <span v-if="youtube!==''" style="color:#999;"> • <a tabindex="-1" :href="checkHttp(youtube)" style="color:#1f96f2;">YouTube</a> </span>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- #source-wrapper -->

            <div id="raw-html">
              <hr>
              <strong>Raw HTML:</strong>
              <textarea id="raw-html-text" rows="8" cols="80" readonly></textarea>
            </div>

          </div>
        </div>
        <div class="creator__copy">
          <h2>Actions</h2>
          <button id="js-copy" ref="copy" class="js-copy" data-clipboard-target="#source">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z"/>
              <path d="M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/>
            </svg>
            <span>Copy with Styles</span>
            <span class="feedback__text">Copied!</span>
          </button>
          <button id="js-copy-src" ref="copySrc" class="js-copy-src" data-clipboard-target="#source">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M22 3v21h-20v-21h4.667l-2.667 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 15h10v1h-10v-1zm0-1h10v-1h-10v1zm0-2h10v-1h-10v1zm0-2h10v-1h-10v1z"/>
              <path d="M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/>
            </svg>
            <span>Copy Raw HTML</span>
            <span class="feedback__text">Copied!</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>


<style lang="scss">


$green:   #369662;
$purple:  #6D64E8;
$blue:    #1f96f2;
$black:   #37474f;
$grey:    #78909c;
$copy:    #2c3e50;


$mobile: 320px;
$tablet: 740px;
$desktop: 980px;
$wide: 1300px;



html {
  height: 100%;
  box-sizing: content-box;
  *, *:before, *:after { box-sizing: inherit; }
}

body {
  margin: 0;
  padding: 0;
  background: #eee;
}

#app {
  font-family: 'Avenirblack','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $copy;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-weight: 500;
  color: $black;
  font-size: 1rem;

  @media (min-width: $tablet) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
}

h2 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: $black;
  position: absolute;
  top: -1rem;
  left: 0.5rem;
  b { color: $purple; }
  @media (min-width: $tablet) {
    left: -1px;
    &::before {
      counter-increment: steps;
      content: "" counter(steps) ". ";
      color: $purple;
      font-weight: 500;
    }
  }
}


.creator {
  width: 100%;
  margin: 0 auto 88px;
  counter-reset: steps;

  @media (min-width: $tablet) {
    width: 90%;
    max-width: 1024px;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    @media (min-width: $tablet) {
      margin-bottom: 2rem;
    }
  }

  section > div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #fff;
    padding: 0.5rem;

    @media (min-width: $tablet) {
      position: relative;
      padding: 0.75rem;
    }
  }

  &__input {
    position: relative;
    margin-bottom: 2rem;
    &:last-of-type {
      margin-bottom: 0;
    }

    @media (min-width: $tablet) {
      flex: 0 10rem;
      margin-right: 2rem;
      margin-bottom: 0;
    }

    form {
      width: 100%;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      font-size: 0.75rem;
      margin-bottom: 12px;
      &:last-child { margin-bottom: 0; }
    }
    input[type='checkbox'] { width: auto; }
  }

  &__output {
    flex: 1;

    @media (max-width: $tablet) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      margin-bottom: 0;
      h2 { display: none; }
    }

    .creator__source {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      #source,
      #raw-html {
        margin: 10px;
      }
      #source {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }

  &__source {
    box-sizing: border-box;
    border: 2px dashed rgba(#444, 0.75);
    height: 100%;
    display: flex;
    position: relative;
    > div { margin: auto; }
  }

  &__copy {
    margin-left: 2rem;
    position: relative;
    flex: 0 200px;
    @media (min-width: $tablet) {
      height: 12rem;
    }
  }

  &__copy {
    display: flex;
    flex-flow: row wrap;

    @media (min-width: $tablet) {
      flex: 0 10rem;
      margin-right: 2rem;
    }

    button {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      cursor: pointer;
      margin: 0;
      background: #eee;
      border: none;
      width: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border: 1px solid $green;
      border-radius: 2px;
      transition: box-shadow 0.2s ease;
      padding: 1rem 0;
      &:first-of-type { margin-bottom: 1rem; }
      svg, span { flex: 0 100%; }
      span { margin-top: 8px; line-height: 1rem; }
      path { fill: $green; transition: opacity 0.3s ease; }
      path:last-child { opacity: 0; }
      .feedback__text { line-height: 1rem; display: none; }
      &.feedback path:first-child { opacity: 0; }
      &.feedback path:last-child { opacity: 1; }
      &.feedback > span { display: none; }
      &.feedback > span.feedback__text { display: initial; }
      &:focus { outline: none; }
      &:active {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 1px rgba(0, 0, 0, 0.04);
        path { fill: darken(#369662, 10%); }
      }
    }
  }
}

</style>


<script>

export default {
  data() {
    return {
      rick: require('./assets/Rick_Sanchez.png'),
      name: "",
      title: "",
      email: "",
      telephone1: "",
      telephone2: "",
      image: "",
      imageHref: "",
      license: "",
      logoCheckbox: "true",
      email: "",
      website: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: ""
    };
  },
  methods: {
    checkHttp: function(url) {
      url = url.startsWith("http://") || url.startsWith("https://") ? url : "http://" + url;
      return url;
    }
  },
  computed: {
    tel1() {
      return `tel:${this.telephone1.replace(/ /g, "").replace(/\D/g, "")}`;
    },
    tel2() {
      return `tel:${this.telephone2.replace(/ /g, "").replace(/\D/g, "")}`;
    },
    emailLink() {
      return 'mailto:' + this.email;
    }
  },
  updated: function () {
    this.$nextTick(function () {
      var html = document.getElementById('source-wrapper').innerHTML;
      document.getElementById('raw-html-text').innerHTML = html;
    })
  },
  mounted() {
    var html = document.getElementById('source-wrapper').innerHTML;
    document.getElementById('raw-html-text').innerHTML = html;
  }
}
</script>
