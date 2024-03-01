import React from 'react';
import * as C from './styles';
import image from '../../assets/img/kisspng-chart-finance-control-bar-chart-5b0438420d0808.9861240515270032020534-removebg-preview.png';

const Index = () => {
    return (
        <div>
            <C.Container>
                <C.Area>
                    <C.FirstColumn>
                        <img src={image} />
                    </C.FirstColumn>

                    <C.SecondColumn>
                        <h2>testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h2>
                    </C.SecondColumn>
                </C.Area>
            </C.Container>
        </div>
    )
}

export default Index;