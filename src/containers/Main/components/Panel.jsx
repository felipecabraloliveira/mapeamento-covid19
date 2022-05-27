import React, { memo } from 'react';
import COUNTRIES from '../../../commons/constants/countries';
import { Button, Card, MenuItem, Select, Typography } from '../../../components';
import { CardPanelContentStyled, DivStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  // const { cases, recovered, deaths, todayCases, todayDeaths } = data
  const { recovered } = data


  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://felipecabraloliveira.github.io/mapeamento-covid19/'
    })
  }
  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h4" component="p" color="primary">COVID19</Typography>
          <Typography variant="h5" component="p" color="primary">América do Sul</Typography>
          <Typography variant="body2" component="p" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        <DivStyled>
          {navigatorHasShare ? renderShareButton : renderCopyButton}
        </DivStyled>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);