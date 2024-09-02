

import { podcasts } from './data.js';
import { PodcastRenderer } from './podcastRenderer.js';
import { SpotifyConnector } from './spotifyConnector.js';

class App {
    constructor() {
        this.podcastRenderer = new PodcastRenderer(podcasts);
        this.spotifyConnector = new SpotifyConnector();
        this.init();
    }

    init() {
        this.podcastRenderer.render();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('filterInput').addEventListener('input', this.handleFilter.bind(this));
        document.getElementById('spotifyConnect').addEventListener('click', this.handleSpotifyConnect.bind(this));
        document.getElementById('podcastList').addEventListener('click', this.handlePodcastActions.bind(this));
    }

    handleFilter(event) {
        const filterValue = event.target.value.toLowerCase();
        const filteredPodcasts = podcasts.filter(podcast => 
            podcast.title.toLowerCase().includes(filterValue) || 
            podcast.description.toLowerCase().includes(filterValue) ||
            podcast.category.toLowerCase().includes(filterValue)
        );
        this.podcastRenderer.render(filteredPodcasts);
    }

    handleSpotifyConnect() {
        this.spotifyConnector.toggleConnection();
    }

    handlePodcastActions(event) {
        const target = event.target;
        if (target.classList.contains('favorite-button')) {
            const podcastTitle = target.closest('.podcast').querySelector('h2').textContent;
            this.addToFavorites(podcastTitle);
        } else if (target.classList.contains('spotify-listen-button')) {
            const podcastTitle = target.closest('.podcast').querySelector('h2').textContent;
            this.openInSpotify(podcastTitle);
        }
    }

    addToFavorites(title) {
        alert(`Added "${title}" to your favorites!`);
    }

    openInSpotify(title) {
        const podcast = podcasts.find(p => p.title === title);
        if (podcast && this.spotifyConnector.isConnected) {
            window.open(podcast.spotifyUrl, '_blank');
        } else if (!this.spotifyConnector.isConnected) {
            alert('Please connect to Spotify first!');
        }
    }
}

new App();

export const podcasts = [
    {
        title: "Science Friday",
        description: "The source for all things science and technology in your feed each week.",
        category: "Science",
        spotifyUrl: "https://open.spotify.com/show/2pkXVOXYQdkoFGZOz5W2oH"
    },
    {
        title: "Hidden Brain",
        description: "Explores the unconscious patterns that drive human behavior and questions that lie at the heart of our complex and changing world.",
        category: "Psychology",
        spotifyUrl: "https://open.spotify.com/show/20Gf4IAauFrfj7RBkjcWxh"
    },
    {
        title: "Ologies",
        description: "A comedic science podcast where the host interviews different experts in various scientific fields.",
        category: "Science",
        spotifyUrl: "https://open.spotify.com/show/5nvRkVMH58SelKZYZFZx1S"
    },
    {
        title: "Invisibilia",
        description: "Explores the invisible forces that shape human behavior — ideas, beliefs, assumptions and emotions.",
        category: "Psychology",
        spotifyUrl: "https://open.spotify.com/show/20Gf4IAauFrfj7RBkjcWxh"
    },
    {
        title: "StarTalk Radio",
        description: "A podcast on space, science, and popular culture, hosted by renowned astrophysicist Neil deGrasse Tyson.",
        category: "Science",
        spotifyUrl: "https://open.spotify.com/show/1jD9Saf5o6U2OMtrqJOiIw"
    }
];

podcastRenderer.js

export class PodcastRenderer {
    constructor(podcasts) {
        this.podcasts = podcasts;
        this.podcastList = document.getElementById('podcastList');
        this.template = document.getElementById('podcastTemplate');
    }

    render(podcastsToRender = this.podcasts) {
        this.podcastList.innerHTML = '';
        podcastsToRender.forEach(podcast => {
            const podcastElement = this.createPodcastElement(podcast);
            this.podcastList.appendChild(podcastElement);
        });
    }

    createPodcastElement(podcast) {
        const element = this.template.content.cloneNode(true);
        element.querySelector('h2').textContent = podcast.title;
        element.querySelector('.category').textContent = `Category: ${podcast.category}`;
        element.querySelector('.description').textContent = podcast.description;
        return element;
    }
}

spotifyConnector.js

export class SpotifyConnector {
    constructor() {
        this.isConnected = false;
        this.connectButton = document.getElementById('spotifyConnect');
    }

    toggleConnection() {
        if (!this.isConnected) {
            this.connect();
        } else {
            this.disconnect();
        }
    }

    connect() {
        // Simulating Spotify connection
        setTimeout(() => {
            this.isConnected = true;
            this.updateButtonState();
            alert('Successfully connected to Spotify!');
        }, 1000);
    }

    disconnect() {
        this.isConnected = false;
        this.updateButtonState();
        alert('Disconnected from Spotify.');
    }

    updateButtonState() {
        if (this.isConnected) {
            this.connectButton.textContent = 'Connected to Spotify';
            this.connectButton.classList.add('connected');
        } else {
            this.connectButton.innerHTML = '<i class="fab fa-spotify"></i> Connect to Spotify';
            this.connectButton.classList.remove('connected');
        }
    }
}