import bandieraIt from '../assets/bandiera-it.png';
import bandieraEn from '../assets/bandiera-en.png';
import bandieraEs from '../assets/bandiera-es.png';

function Bandiere() {
        const imgBandieraIt = () => {
            return (
                <img src={bandieraIt} alt="bandieraIt"/>
            );
          }
          const imgBandieraEn = () => {
            return (
                <img src={bandieraEn} alt="bandieraIt"/>
            );
        }
            const imgBandieraEs = () => {
                return (
                    <img src={bandieraEs} alt="bandieraIt"/>
                );
          }
 
  }
  
  export default Bandiere;