// index.js
import { registerBlockType } from '@wordpress/blocks';
import SwiperCard from './swiper-card';
import './swiper-card.css';

registerBlockType('plugin/swiper-cards', {
    edit: () => (<SwiperCard />),
    save: () => (<SwiperCard />),
});