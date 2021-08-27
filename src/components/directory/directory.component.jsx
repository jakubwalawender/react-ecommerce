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
                id: 1,
                linkUrl: 'hats'
            }, {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/6044261/pexels-photo-6044261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2,
                linkUrl: 'hats'
            }, {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/5088874/pexels-photo-5088874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                linkUrl: 'hats'
            }, {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/6836005/pexels-photo-6836005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 4,
                size: 'large',
                linkUrl: 'hats'
            }, {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 5,
                size: 'large',
                linkUrl: 'hats'
            }]
        }

    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;