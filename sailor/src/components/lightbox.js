import sailorMoon from "../images/Serena.jpg";
import sailorMars from "../images/Mars.jpg";
import sailorMercury from "../images/Mercury.jpg";
import sailorJupiter from "../images/Jupiter.jpg";
import sailorVenus from "../images/Venus.jpg";
import chibiUsa from "../images/Chibi.jpg";
import tuxedoMask from "../images/TuxedoMask.jpg";

function lightbox() {
<row>
    <col> <img src = {sailorMoon} alt = "Sailor Moon"/> </col>
    <col> <img src = {sailorMars} alt = "Sailor Mars"/> </col>
    <col> <img src = {sailorMercury} alt = "Sailor Mercury"/> </col>
    <col> <img src = {sailorJupiter} alt = "Sailor Jupiter"/> </col>
    <col> <img src = {sailorVenus} alt = "Sailor Venus"/> </col>
    <col> <img src = {chibiUsa} alt = "Chibi Usagi"/> </col>
    <col> <img src = {tuxedoMask} alt = "Tuxedo Mask"/> </col>
</row>
}

export default lightbox