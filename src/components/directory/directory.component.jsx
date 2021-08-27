import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/704857/pexels-photo-704857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1
            }, {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/6044261/pexels-photo-6044261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2
            }, {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/5088874/pexels-photo-5088874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3
            }, {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/6836005/pexels-photo-6836005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 4,
                size: 'large',
            }, {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 5,
                size: 'large',
            }]
        }

    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;