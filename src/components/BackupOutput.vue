<table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
  <tr>
    <td style="font-size:0px;">
      <img v-if="image !== ''" :src="image || rick" border="0" style="padding-top: 8px;" width="100" height="100">
      <img v-else :src="rick" border="0" style="padding-top: 8px;" width="100" height="100">
    </td>
    <td style="padding-left:10px;">
      <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>,
      <span style="color: #78909c;">{{ title || "Inventor" }}</span>
      <br>
      <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a> <span v-if="telephone2" style="color:#999;"> | </span>
      <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a>
      <br>
      <span>{{ license }}</span>
    </td>
  </tr>
</table>



<div id="source-wrapper" ref="sourceWrapper"><table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;"> <tr> <td style="font-size:0px;"> <img v-if="logoCheckbox" src="https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png" border="0" style="padding-top: 8px;" width="100"> </td> <td style="padding-left:10px;"> <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>, <span style="color: #78909c;">{{ title || "Inventor" }}</span> <br> <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if="telephone2" style="color:#999;"> | </span> <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a> <br> <span v-if="email!==''"> <a tabindex="-1" :href="emailLink" style="color:#1f96f2;"> {{ email }}</a> <br> </span> <span v-if="website!==''"> <a tabindex="-1" :href="website" style="color:#1f96f2;">Website</a> <br> </span> <span v-if="license !== ''">License #{{ license }}</span> </td> </tr> </table></div><!-- #source-wrapper -->


<div id="source-wrapper" ref="sourceWrapper">
    <table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
        <tr>
            <td style="font-size:0px;"> <img v-if="logoCheckbox" src="https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png" border="0" style="padding-top: 8px;" width="100"> </td>
            <td style="padding-left:10px;"> <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>, <span style="color: #78909c;">{{ title || "Inventor" }}</span>
                <br> <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if="telephone2" style="color:#999;"> | </span> <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a>
                <br> <span v-if="email!==''"> <a tabindex="-1" :href="emailLink" style="color:#1f96f2;"> {{ email }}</a> </span>
                <br> <span v-if="facebook!==''"> <a tabindex="-1" :href="facebook" style="color:#1f96f2;"> Facebook</a> </span>
                <br> <span v-if="linkedin!==''"> <a tabindex="-1" :href="linkedin" style="color:#1f96f2;"> LinkedIn</a> </span>
                <br> <span v-if="twitter!==''"> <a tabindex="-1" :href="twitter" style="color:#1f96f2;"> Twitter</a> </span>
                <br> <span v-if="youtube!==''"> <a tabindex="-1" :href="youtube" style="color:#1f96f2;"> YouTube</a> </span>
                <br> <span v-if="website!==''"> <a tabindex="-1" :href="website" style="color:#1f96f2;">Website</a> <br> </span> <span v-if="license !== ''">License #{{ license }}</span> </td>
        </tr>
    </table>
</div>
<!-- #source-wrapper -->




<div id=source-wrapper ref=sourceWrapper><table cellpadding=0 cellspacing=0 id=source style=font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#37474f;text-align:left;line-height:20px><tr><td style=font-size:0><img border=0 src=https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png style=padding-top:8px v-if=logoCheckbox width=100><td style=padding-left:10px><span style=font-weight:700>{{ name || "Rick Sanchez" }}</span>, <span style=color:#78909c>{{ title || "Inventor" }}</span><br><a :href=tel1 style=color:#1f96f2 tabindex=-1>{{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if=telephone2 style=color:#999> | </span><a :href=tel2 style=color:#1f96f2 tabindex=-1>{{ telephone2 }}</a><br><span v-if="email!==''"><a :href=emailLink style=color:#1f96f2 tabindex=-1>{{ email }}</a><br><span v-if="facebook!==''"><a :href=facebook style=color:#1f96f2 tabindex=-1>Facebook</a><br><span v-if="linkedin!==''"><a :href=linkedin style=color:#1f96f2 tabindex=-1>LinkedIn</a><br><span v-if="twitter!==''"><a :href=twitter style=color:#1f96f2 tabindex=-1>Twitter</a><br><span v-if="youtube!==''"><a :href=youtube style=color:#1f96f2 tabindex=-1>YouTube</a><br></span><span v-if="website!==''"><a :href=website style=color:#1f96f2 tabindex=-1>Website</a><br></span><span v-if="license !== ''">License #{{ license }}</span></table></div>



<div id="source-wrapper" ref="sourceWrapper">
  <table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
    <tr>
      <td style="font-size:0px;">
        <img v-if="logoCheckbox" src="https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png" border="0" style="padding-top: 8px;" width="100">
      </td> <td style="padding-left:10px;"> <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>, <span style="color: #78909c;">{{ title || "Inventor" }}</span> <br> <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if="telephone2" style="color:#999;"> | </span> <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a> <br> <span v-if="email!==''"> <a tabindex="-1" :href="emailLink" style="color:#1f96f2;"> {{ email }}</a> <br> </span> <span v-if="website!==''"> <a tabindex="-1" :href="website" style="color:#1f96f2;">Website</a> <br> </span> <span v-if="license !== ''">License #{{ license }}</span> </td> </tr> </table></div><!-- #source-wrapper -->













      <div id="source-wrapper" ref="sourceWrapper">
          <table id="source" cellpadding="0" cellspacing="0" style="font-family:Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
              <tr>
                  <td style="font-size:0px;"> <img v-if="logoCheckbox" src="https://agencies.connectsai.com/wp-content/uploads/sites/44/2018/04/FOY-Temp-Logo.png" border="0" style="padding-top: 8px;" width="100"> </td>
                  <td style="padding-left:10px;"> <span style="font-weight: bold;">{{ name || "Rick Sanchez" }}</span>, <span style="color: #78909c;">{{ title || "Inventor" }}</span>
                      <br> <a tabindex="-1" :href="tel1" style="color:#1f96f2;"> {{ telephone1 || "+137 Earth 1 415 555 5555" }}</a><span v-if="telephone2" style="color:#999;"> | </span> <a tabindex="-1" :href="tel2" style="color:#1f96f2;"> {{ telephone2 }}</a>
                      <br> <span v-if="email!==''"> <a tabindex="-1" :href="emailLink" style="color:#1f96f2;"> {{ email }}</a> </span>
                      <br> <span v-if="website!==''"> <a tabindex="-1" :href="website" style="color:#1f96f2;">Website</a> <br> </span>
                      <br> <span v-if="linkedin!==''"> <a tabindex="-1" :href="linkedin" style="color:#1f96f2;">LinkedIn</a> <br> </span>
                      <br> <span v-if="facebook!==''"> <a tabindex="-1" :href="facebook" style="color:#1f96f2;">Facebook</a> <br> </span>
                      <br> <span v-if="twitter!==''"> <a tabindex="-1" :href="twitter" style="color:#1f96f2;">Twitter</a> <br> </span>
                      <br> <span v-if="youtube!==''"> <a tabindex="-1" :href="youtube" style="color:#1f96f2;">YouTube</a> <br> </span>
                      <span v-if="license !== ''">License #{{ license }}</span>
                  </td>
              </tr>
          </table>
      </div>
      <!-- #source-wrapper -->
