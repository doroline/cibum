import styled from 'styled-components';
const Wrapper = styled.div`
   .App {
  text-align: center;
}
.pulsanteMenu {
    border: none!important;
    position: relative!important;
    left: 93%!important;
    top: 10px!important;
}
.App-logo {
  height: 150px;
  pointer-events: none;
}
.App-logo-react {
  height: 100px;
  pointer-events: none;
}
.testoWhite{
  color: white;
  font-size: 15px;
  margin-top: -15px;
}
#titolo1{
  border:1px solid white;
  padding: 10px;
  border-radius: 0px 0px 20px;
}
footer{
  background-color: rgb(131, 20, 20);
  color: white;
  padding: 20px 0px;
}
.btn{
  background-color: #88461d;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

.btn2{
    color: white;
    /* padding: 10px 20px; */
    cursor: pointer;
    border-radius: 28px;
    width: 100px;
    display: inline-block;
    margin: 10px;
    padding: 10px 0px;

}
.MuiGrid-spacing-xs-2{
  width: 300px!important;
}
.MuiBottomNavigation-root {
  width: 100%!important;
  background: #831413!important;
}
.MuiBottomNavigationAction-root {
  color: rgb(255 255 255 / 54%)!important;
}
#cambioColori{
  background: black;
  width: 100%;
  font-size: 13px;
  position: absolute;
  top:0px;
  color: white;
  height: 40px;
  padding-top: 8px;
}
.btn3{
  color: black;
  /* padding: 10px 20px; */
  cursor: pointer;
  border-radius: 28px;
  width: auto;
  display: inline-block;
  margin: 10px;
  padding: 10px 12px;
  border: none;
}
.btn-grey{
  background: #484848;
  margin-right: 5px!important;
}
.paragrafo{
  width: 80%;
    margin: auto;
    font-size: 18px;
    border: 1px solid white;
    padding: 10px;
}
.campiTesto {
  width: 70px;
  height: 22px;
  border: none;
  margin-right: 5px;
  margin-left: 5px;
}
li {
  list-style-type: none;
}
footer{
  min-height: 5vh;
}
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
  animation: App-logo-spin  1s ease-out;
  }
}

.App-header {
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

.App-link {
  color: white;
  text-decoration: none;
  background-color: #88461d;
  padding: 10px 30px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: bold;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`
export default Wrapper;