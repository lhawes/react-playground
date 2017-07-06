'use strict';

import React from 'react';

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
            'https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg',
            'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg',
            'https://static.pexels.com/photos/89775/dog-hovawart-black-pet-89775.jpeg'
            ],
            currentImage: 0
        };
    }

    changeImage(next) {
        const newIndex = next ? this.state.currentImage + 1 : this.state.currentImage - 1;

        console.log('current Image: ', this.state.currentImage);

        if (newIndex === this.state.images.length) {
            this.setState({
                currentImage: 0
            });
        } else if (newIndex < 0) {
            this.setState({
                currentImage: this.state.images.length - 1
            });
        } else {
            this.setState({
                currentImage: newIndex
            });
        }
    }

    render() {
        const imageDisplayed = this.state.images[this.state.currentImage];
        console.log(imageDisplayed);
        return (
            <div>
            <Img src={imageDisplayed} />
            <Button changeImage={this.changeImage.bind(this)} />
            </div>
            );
    }
}

const Img = props => {
    return <image src={props.src} style={{maxWidth: "100%", maxHeight: "300px"}}/>
}

const Button = props => {
    return <div>
        <a href="#" style={{padding: "8px"}} onClick={() => props.changeImage(false)} >Previous</a>

        <a href="#" onClick={() => props.changeImage(true)} >Next</a>
    </div>
}

export default SlideShow;