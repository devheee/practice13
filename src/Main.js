import React from 'react';
import { FullPage, Slide } from 'react-full-page';

export default class FullPageExample extends React.Component {
    render() {
        return (
            <FullPage controls>
                <Slide>
                    <figure className='mainimg'>
                        <img src={process.env.PUBLIC_URL + '/img/main01.jpg'} alt="" />
                    </figure>
                </Slide>
                <Slide>
                    <figure className='mainimg'>
                        <a href=""><img src={process.env.PUBLIC_URL + '/img/main02.jpg'} alt="" />
                        </a>
                    </figure>
                </Slide>
                <Slide>
                    <figure className='mainimg'>
                        <a href=""><img src={process.env.PUBLIC_URL + '/img/main03.jpg'} alt="" />
                        </a>
                    </figure>
                </Slide>
            </FullPage>
        );
    }
}

