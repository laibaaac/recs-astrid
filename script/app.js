document.addEventListener('DOMContentLoaded', () => {
    const podcasts = [
        {
            title: "Rotten Mango",
            description: "Rotten Mango is a true crime podcast that focuses on storytelling with a purpose. We believe storytelling is one of the few things that brings people together from all walks of life.Storytelling helps us feel connected, related, and feel empathy for one another.We want to shed light on international stories that are lesser known, as we believe every story is worth telling.",
            category: "True Crime",
            spotifyUrl: "https://open.spotify.com/show/2DZwvzn6Z3xCFZrwZGDrbj?si=dbabcef6b88d427d"
        },
        {
            title: "How i build this",
            description: "Guy Raz interviews the world’s best-known entrepreneurs to learn how they built their iconic brands.",
            category: "Business",
            spotifyUrl: "https://open.spotify.com/show/6E709HRH7XaiZrMfgtNCun?si=1747a33d91cd412a"
        },
        {
            title: "Where Should We Begin? with Esther Perel",
            description: "Every Monday morning step into the office of iconic psychotherapist Esther Perel and listen in as real people in search of insight bare the raw, intimate, and profound details of their stories.",
            category: "Mental Health",
            spotifyUrl: "https://open.spotify.com/show/3fKOTwtnX5oZLaiNntKWAV?si=22de9eeb5ec64f50"
        },
        {
            title: "Today, Explained",
            description: "Today, Explained is Vox's daily news explainer podcast. Hosts Sean Rameswar and Noel King will guide you through the most important stories of the day.",
            category: "News",
            spotifyUrl: "https://open.spotify.com/show/3pXx5SXzXwJxnf4A5pWN2A?si=4b906f297ad44feb"
        },
        {
            title: "Adult ISH",
            description: "Adult ISH is an award-winning advice, storytelling, and culture podcast, hosted by Oakland-based Nyge Turner and Atlanta-based Dominique “Dom” French. BIPOC creators in their 20s, French and Turner don’t sugarcoat anything. Dive into a weekly mix of thoughtful conversations, immersive personal stories, and practical tips from charismatic special guests and beloved friends. With humor and heart, Nyge and Dom tackle each and every “adult” subject they can get their hands on. Destination: growth! Adult ISH is a production of YR Media and is distributed by Radiotopia from PRX.",
            category: "Culture & Society",
            spotifyUrl: "https://open.spotify.com/show/3k49pbImMDnhNA4xK8tfVT?si=f74615717d024876"
        },
        {
            title: "Wait Wait... Don't Tell Me!",
            description: "NPR's weekly news quiz hosted by Peter Sagal. Have a laugh and test your knowledge with today's funniest comedians and a celebrity guest. Hate free content? Try a subscription to Wait Wait... Don't Tell Me!+. Your subscription supports public radio and unlocks fun bonus episodes along with sponsor-free listening. Learn more at https://plus.npr.org/waitwait",
            category: "News",
            spotifyUrl: "https://open.spotify.com/show/0dWpNy3iA6Mm3xYaHB2Zi9?si=d0ee83eae1314183"
        },
        {
            title: "99% Invisible",
            description: "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.",
            category: "Design",
            spotifyUrl: "https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM?si=b8e2700c613241f3"
        },
        {
            title: "Becoming Wise",
            description: "The Becoming Wise podcast offers depth and discovery in the time it takes to make a cup of tea. Each episode is curated from hundreds of big conversations with wise and graceful lives. Reset your day. Replenish your sense of yourself and the world. On Being Studios is the producer of On Being, This Movie Changed Me, and more to come. Krista Tippett is the author of the New York Times bestselling Becoming Wise: An Inquiry into the Mystery and Art of Living. President Obama honored her with the National Humanities Medal for thoughtfully delving into the mysteries of human existence.",
            category: "Personal stories",
            spotifyUrl: "https://open.spotify.com/show/6ezfhYghdoIdOZFvduL3bQ?si=3ea5c23fd8e145f7"
        },
        {
            title: "The NoSleep Podcast",
            description: "The NoSleep Podcast is a multi-award winning anthology series of original horror stories, with rich atmospheric music to enhance the frightening tales.",
            category: "Horror",
            spotifyUrl: "https://open.spotify.com/show/5XhS5WBxLYgN3S9KhEyrrF?si=79dd6c34fd0d480f"
        },
        {
            title: "sommar & vinter i p1",
            description: "Sveriges största podd med personliga berättelser som definierar vår tid. Ansvarig utgivare: Karin Lindblom.",
            category: "Society & Culture",
            spotifyUrl: "https://open.spotify.com/show/5bkofphbE7YjGZSdPWj9x0?si=aea86997f2d84081"
        },
        {
            title: "Swedish innovation",
            description: "Exporting Swedish Unicornness. No buzzwords. Just real life stories with Sweden's most innovative thinkers and doers.",
            category: "Society & Culture",
            spotifyUrl: "https://open.spotify.com/show/3wFFEahsOOs9jmbCRGotff?si=5ce87adbfe684ed8"
        },
        {
            title: "Ska vi fika?",
            description: "Välkommen to “Ska vi fika?”. Grab a cup of coffee and join Vivian and Nicole while they are having fika, trying typical fika sweets and sharing their experiences in Sweden as European Solidarity Corps volunteers. They will talk about what it’s like living abroad in a new country, share anecdotes from their daily lives as volunteers and try to explain cultural differences. Whether you want to learn more about European volunteering and how it works or just simply like listening to stories from their Sweden adventure: Get cozy and Enjoy! With the support of Europe Direct Fyrbodal and Eurodesk.",
            category: "Personal stories",
            spotifyUrl: "https://open.spotify.com/show/1t4woQjGyQta30eeT3Oj0H?si=93b77d0393d04095"
        },
        {
            title: "Framgångspodden",
            description: "Nordens största intervjupodd. Träffar de mest framgångsrika personerna, entreprenörer, idrottsprofiler och artister. Ni får höra deras spännande och inspirerande resor från hur allt började till idag. Värdefulla nycklar, rutiner och tips blandat med underhållning och spännande historier.",
            category: "Careers",
            spotifyUrl: "https://open.spotify.com/show/6hxzWUMAgz1elzMJf7p0og?si=0359906f3aaf40d7"
        },
        {
            title: "Busy, Yet Pretty",
            description: "Welcome to the Busy, Yet Pretty podcast. Are you busy, setting goals and achieving your dream life? Yet, incorporating pretty things into your busy life such as style, skincare, perfume & lipgloss? Your host Jadyn Hailey is here to talk all about maintaining a Busy, Yet Pretty lifestyle. On this podcast, Jadyn covers fashion, wellness, living a lifestyle and creating your dream life. Get your almond milk matcha latte and tune in every Monday!",
            category: "Self-improvement",
            spotifyUrl: "https://open.spotify.com/show/7btKvH09RNjyacYLIU0zZm?si=c4b24b633e1a4c6d"
        },
        {
            title: "We Can Do Hard Things",
            description: "Life is freaking hard. We are all doing hard things every single day – things like loving and losing; caring for children and parents; forging and ending friendships; battling addiction, illness, and loneliness; struggling in our jobs, our marriages, and our divorces; setting boundaries; and fighting for equality, purpose, freedom, joy, and peace. On We Can Do Hard Things, Glennon Doyle, author of UNTAMED; her wife Abby Wambach; and her sister Amanda Doyle do the only thing they’ve found that has ever made life easier: Drop the fake and talk honestly about the hard things including sex, gender, parenting, blended families, bodies, anxiety, addiction, justice, boundaries, fun, quitting, overwhelm . . . all of it. We laugh and cry and help each other carry the hard so we can all live a little bit lighter and braver, free-er, less alone.",
            category: "Self-improvement",
            spotifyUrl: "https://open.spotify.com/show/0eFL5HJejQHZrdgAFdPnOm?si=deac027cd449420b"
        },
        {
            title: "Terrible, Thanks For Asking",
            description: "It's a question we ask (and get asked) all the time: “How are you?” And normally we just respond with “Fine!” even if we’re totally dying inside, so everyone can go about their day. But it’s not always all that fine, is it? “Terrible, Thanks For Asking” is a show by author Nora McInerny that lets real people get real honest about how they’re really doing. It’s sometimes sad, sometimes funny, and almost always both.",
            category: "Personal stories",
            spotifyUrl: "https://open.spotify.com/show/5UTjOFnLWvTKPcLhbPBgk0?si=6f5aee99c5ad4099"
        },
        {
            title: "Hard Fork",
            description: "“Hard Fork” is a show about the future that’s already here. Each week, journalists Kevin Roose and Casey Newton explore and make sense of the latest in the rapidly changing world of tech.",
            category: "Culture & Society",
            spotifyUrl: "https://open.spotify.com/show/44fllCS2FTFr2x2kjP9xeT?si=742daf47a82e431a"
        }
    ];

    class PodcastRenderer {
        constructor(podcasts) {
            this.podcasts = podcasts;
            this.podcastList = document.getElementById('podcastList');
            this.template = document.getElementById('podcastTemplate');
        }

        render(podcastsToRender) {
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
            element.querySelector('.spotify-listen-button').addEventListener('click', () => {
                window.open(podcast.spotifyUrl, '_blank');
            });
            return element;
        }
    }

    class App {
        constructor() {
            this.podcastRenderer = new PodcastRenderer(podcasts);
            this.init();
        }

        init() {
            this.setupEventListeners();
        }

        setupEventListeners() {
            document.getElementById('randomButton').addEventListener('click', this.handleRandomButton.bind(this));
        }

        handleRandomButton() {
            const randomPodcast = this.getRandomPodcast();
            this.podcastRenderer.render([randomPodcast]);
        }

        getRandomPodcast() {
            const randomIndex = Math.floor(Math.random() * podcasts.length);
            return podcasts[randomIndex];
        }
    }

    new App();
});
