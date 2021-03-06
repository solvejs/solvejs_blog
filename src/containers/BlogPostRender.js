import React, { Component, Fragment } from 'react';
import {posts} from '../db/posts';
// import {adImages} from '../db/images/ads/adImages';

export default class Card extends Component {
    constructor(props) {
        super(props);
            this.state = {
                /* full: false,
                selectedCard: '', */
            }
            this.handleClickFullSize = this.handleClickFullSize.bind(this);
            this.handleParagraphAd = this.handleParagraphAd.bind(this);
        }
    handleClickFullSize(event) {
        this.setState({
            full: !this.state.full,
            selectedCard: event.target.parentElement.parentElement.id, 
        });
        console.log(event.target.parentElement.parentElement.id, 'Card.js <> event target event')
    }
    handleParagraphAd() {
        let adImg = document.createElement('img');
        // adImg.width = 300; // removed '300px' as needs # only or nothing
        // let imageTest = import('../../public/images/ads/demo_ad.png');
        let fullAdParagraph1 = document.querySelector('div.full-size p:nth-child(3)');
        let fullAdParagraph2 = document.querySelector('div.full-size p:nth-child(7)'); // will revisit after higher priority items
        adImg.src = '../public/images/ads/demo_ad.png';
        adImg.alt = 'did not load did not load did not load did not load did not load ';
        adImg.classList.add('ad');
        // fullAdParagraph1.innerHTML.includes(adImg) ? null : 
        // ternary no longer needed here > moved to componentDidUpdate
        // fullAdParagraph1.appendChild(document.createElement('div'));
        let adDiv = document.createElement('div');
        fullAdParagraph1.appendChild(adDiv).appendChild(adImg);
        // fullAdParagraph2.appendChild(adDiv).appendChild(adImg);
    }
    componentDidUpdate(prevProps) {
        if(prevProps != this.props.run) { // prevent multiple calls with prevProps in componentDidUpdate
            console.log('Card <> CompDidMount');
            {this.props.activeCard === this.props.id ? () => this.handleParagraphAd() : null} // moved ternary operator here to prevent componentdidupdate loop
            
        }
    }
    render() {
        // set comment for replaceSpace until links resolve on click
        let replaceSpace = `${this.props.title.replace(/\?/gi, '').trim().replace(/ /gi, '-')}`;
        return (
            <div key={this.props.id} id={this.props.id} className={this.props.activeCard === this.props.id ? 'full-size' : 'card-size'}>
                    <h1 className='title' id={this.props.id+'null'} onClick={this.props.click} ><a href={'#'+this.props.id/* replaceSpace item.title.replace(/ /g, '-') */ }>{this.props.title}</a>
</h1>                    <span className='author-bio'>{this.props.writer}</span>
                    {/* <a href={replaceSpace item.title.replace(/ /g, '-') </div>}><img className='featured-image' src={this.props.image} width='60px' alt='image did not load' onClick={this.props.click} /></a> */}
                    <div className='blog-text' dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                    
                </div>)
    }
}
export function CardFull(props) {
    return (
        <div key={props.id} id={props.id} className='full-size'>
                <h1 className='title' id={props.id+'null'} onClick={props.click} ><a href={'#'+props.id /* replaceSpace item.title.replace(/ /g, '-') */}>{props.title} </a></h1>
                <span className='author-bio'>{props.writer}</span>
                {/* <a href={replaceSpace item.title.replace(/ /g, '-') </div>}><img className='featured-image' src={props.image} width='60px' alt='image did not load' onClick={props.click} /></a> */}
                <div className='blog-text' dangerouslySetInnerHTML={{__html: props.text}}></div>
                
            </div>)
}