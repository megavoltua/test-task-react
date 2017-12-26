import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';
import imageSquare from './square.png';
import imageRooms from './rooms.png';

class InfoBlock extends Component {
    render() {
        const props = this.props;
        const price = Math.floor(props.price / 100).toLocaleString();
        const priceCents = (props.price % 100).toString().padStart(2, '0');
        const pricePerMeter = Math.floor(props.pricePerMeter / 100).toLocaleString();
        const pricePerMeterCents = (props.pricePerMeter % 100).toString().padStart(2, '0');

        return (
            <div className={classnames('info-block')}>
                <div className={classnames('image')}/>
                <div className={classnames('info')}>
                    <div className={classnames('address')}>{props.address}</div>
                    <div className={classnames('title')}>{props.title}</div>
                </div>
                <div className={classnames('discount')}>{props.discount}<sup>%</sup></div>
                <div className={classnames('price')}>
                    <div className={classnames('main')}>&euro; {price}<sup>{priceCents}</sup></div>
                    <div className={classnames('per-square')}>&euro; {pricePerMeter}<sup>{pricePerMeterCents}</sup> / m<sup>2</sup></div>
                </div>
                <div className={classnames('dimensions')}>
                    <div className={classnames('details')}>
                        <img src={imageSquare}/>
                        <div className={classnames('details-value')}>
                            <span className={classnames('value')}>{props.priceSquare}</span> m<sup>2</sup>
                        </div>
                    </div>
                    <div className={classnames('details')}>
                        <img src={imageRooms}/>
                        <div className={classnames('details-value')}>
                            <span className={classnames('value')}>{props.rooms}</span> zimmer
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoBlock;