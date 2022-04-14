import React from 'react'
import '../App.css'
import raspi from './raspberry.png'
import kamera from './raspberry_camera.png'
import ruuvi from './ruuvitag.png'

const Esittely = () => {
    return (
        <div className='esittelyteksti'>
            <div>
                <h4>Projektissa käytettävä laitteisto</h4>
                <div className='laitteisto'>
                <div><p>Sovellus pyörii <a href='https://www.raspberrypi.com/'>Raspberry Pi</a> 4 -tietokoneella, jossa käyttöjärjestelmänä toimii Raspian.<img src={raspi}/></p></div>
                <div><p>Kuvaamisen hoitaa Raspberry Pi Camera V2.<img src={kamera}/></p></div>
                <div><p>Ilmastodatan keräämisen hoitaa <a href='https://ruuvi.com/fi/'>RuuviTag</a> anturi<img src={ruuvi}/></p></div>
                </div>
                </div>
            <div className='projektiryhmä'>
                <h4>Projektiryhmä</h4>
                <p>Projektiryhmä koostuu Metropolian Ammattikorkeakoulun neljännen vuoden ohjelmistotuotannon opiskelijoista.</p>
            </div>
        </div>
    )

}

export default Esittely