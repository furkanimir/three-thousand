import React from 'react'
import './KelimeKarti.css';




const KelimeKarti = () => {
    return (
        <div className='Kart' style={{
            backgroundImage: "linear-gradient( #189B44, #A0115D)",
            // color: "darkred",
        }}>
            <div className='Kart-Icerisi'>
                <p className='Kelime-Baslik'>Ferrari</p>
                <p className='Kelime-Icerik'>Naber la</p>
                <p className='Kelime-Ornek'> Lorem la xdxd 123 qwe </p>
            </div>
            <p>ppp</p>
        </div>

        
    )
}

export default KelimeKarti