import React from 'react'

export default function Card(props) {

    console.log(props)

    return(
        <div className='card'>
            <section className='card--image'>
                <img src={`/images/${props.item.image}`} alt="Mt Kenya" className='card--image'/>
            </section>
            <section className='card--text'>
                <span className='location'>
                    <img src={'/images/location.png'} alt='location' className='location--logo' />
                    <h6 className='location--title'>{props.item.location}</h6>
                    <a href={props.item.googleMapsUrl} rel='noreferrer' target={'_blank'} className='location--link gray'>View on Google maps</a>
                </span>
                <h3 className='card--title'>{props.item.title}</h3>
                <h4 className='card--date'>{props.item.startDate} - {props.item.endDate}</h4>
                <p className='location--info'>{props.item.description}</p>
            </section>
        </div>
    )
}