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
