
import { Component } from "https://unpkg.com/preact?module";
import html from '/html.js';

export default class Video extends Component {
    componentDidMount() {
        import('http://unpkg.com/@vimeo/player?module').then(mod => this.setState({
            mod,
        }))
        .then(() => this.attachVideo())
    }

    attachVideo() {
        if (!this.videoContainer || !this.state.mod) {
            return;
        }

        const player = new this.state.mod.default(this.videoContainer, {
            id: 255370388,
            width: 640,
            autoplay: true
        });
    }

    handleVideoRef = (videoContainer) => {
        this.videoContainer = videoContainer
    }

    render() {
        return html`<div><div ref=${this.handleVideoRef}></div>${this.state.mod ? 'Loaded!' : 'Loading...'}</div>` 
    }

}