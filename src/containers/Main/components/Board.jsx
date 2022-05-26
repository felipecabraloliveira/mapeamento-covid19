import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, casesPerOneMillion, totalTests, testsPerOneMillion, deathsPerOneMillion } = data

  const getValue = (value) => value === undefined || value === null ? 0 : value.toLocaleString('pt-br')

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(cases)} label="Total de casos" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deaths)} label="Total de Óbitos" color="#000" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayCases)} label="Casos do dia" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayDeaths)} label="Óbitos do dia" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(casesPerOneMillion)} label="Casos por Milhão" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deathsPerOneMillion)} label="Mortes por Milhão" color="#1B1E23" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(totalTests)} label="Total de Testes" color="#008000" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(testsPerOneMillion)} label="Testes por Milhão" color="#87CEEB" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)