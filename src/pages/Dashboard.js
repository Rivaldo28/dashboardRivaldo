import React from 'react';
import { Grid } from '@material-ui/core';
import { mackeStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CardsHeader from '../components/CardsHearder';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics'
import TabelaMaterial from '../components/TabelaMaterial';
import GeoLocation from '../components/GeoLocation'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  iconos: {
    color: '#FFF'
  },
  container: {
    paddingTop: '40px',
    alignItems: 'center'
  },
  containerGrafica: {
    marginTop: '40px'
  },
  containerTabela: {
    marginTop: '40px'
  }
}));

const data = [
  {
    agenda:
      "Saiba como renda vem crescendo || Ganhos futuros || Em 2021 palestra",
    fecha: "31 junho de 2021",
    data: 32,

  },
  {
    agenda:
      "Conferencia || Testes unitários || Seguimento e crescimento",
    fecha: "25 junho de 2021",
    data: 5,

  },
  {
    agenda:
      "Vendas || Construindo renda passiva || Renda Extra",
    fecha: "10 julho de 2021",
    data: 10,
  },
];

function Dashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>


        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<HomeIcon className={classes.iconos} />} titulo="VENDAS" texto="Entradas" color="rgba(248,80,50,1)" font="white" />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<AddShoppingCartIcon className={classes.iconos} />} titulo="GANHOS" texto="Entradas" color="rgba(248,80,50,1)" font="white" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<MonetizationOnIcon className={classes.iconos} />} titulo="LUCRO" texto="R$ 12.000,00" color="rgba(248,80,50,1)" font="white" />
        </Grid>

        <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="ENTRADAS" texto="692" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="GANHOS NA SEMANA" texto="R$ 111,15" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="HORAS" texto="48hrs" />

          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="PORCENTAGEM" texto="100%" />

          </Grid>
        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1} ></Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
          <Graphics />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <GeoLocation />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <h1>Seja Bem Vindo</h1>
          <h4>Rivaldo Souza</h4>
        </Grid>
        <Grid item xs={12} className={classes.containerTabela}>
          <TabelaMaterial data={data} />
        </Grid>

      </Grid>
    </div>
  );
}
export default Dashboard;