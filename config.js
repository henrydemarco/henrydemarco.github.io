var config = {
    style: 'mapbox://styles/henrydemarco/cl007r5cq006614qv4q6fqw5b',
    accessToken: 'pk.eyJ1IjoiaGVucnlkZW1hcmNvIiwiYSI6ImNreTI5MmJhejBhb3IydW50OWljMmJrbzQifQ.H3yOJpf8uf_RspT_MfndoA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Berkeley, 94700',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'identifier1',
            alignment: 'right',
            hidden: false,
            title: 'Occupy San Francisco',
            image: 'Images/SF_DSLR.jpeg',
            audio:  'https://www.allaboutbirds.org/guide/assets/sound/549157.mp3',
            description: 'When Occupy came to San Francisco in 2011, Mike Zint was living in Golden Gate Park. He got word about the good trouble brewing in the Financial District, and moved to the epicenter of that dissent. Cities across the country were in the midst of the same tumult –– citizens were angry about the corruption, the recession, the foreclosures, and the crippling debt. Tent cities bloomed quickly and they offered shelter, food, and porta potties. In a city notable for its numerous anti-homeless laws, Occupy San Francisco was a respite for its unhoused, as well as an opportunity to make change.',
            location: {
                center: [-122.39549, 37.79286],
                zoom: 14,
                pitch: 70,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'identifier_2',
            alignment: 'left',
            hidden: false,
            title: 'Occupy San Francisco',
            image: 'Images/SF_Film.jpg',
            audio:  'audio here',
            description: 'James Cartmill met Mike Zint at the Federal Reserve Bank of San Francisco, one of the main strategic outposts of Occupy SF. To James, Mike Zint was a “true hero,” a captain of Occupy who honed his skills as a political strategist and activist in one of the most zealous occupations in the country. James remembers Occupy SF as a concerted battle against the Federal Reserve and the manifold abuses of the American financial system. Through Occupy, participants created an organic, living alternative to the totalizing capitalist systems that defined American life. For the duration of these occupations, activists carved out spaces for protest and experimental living in the administrative centers of capitalist repression, places like Wall Street and San Francisco’s Financial District. Occupiers’ profound experiences inspired outgrowths into other movements and experiments.',

            location: {
                center: [-122.39647, 37.79367],
                zoom: 16,
                pitch: 70,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier_2',
            alignment: 'left',
            hidden: false,
            title: 'FTCFTH Founding',
            image: 'Images/james_smile.jpg',
            audio:  'Audio/James_Reason_for_FTCFTH.mp3',
            description: 'It was also at Occupy where Mike Zint met Sarah Menefee, poet and longtime organizer for the unhoused. The two first conceived of an organization called First They Came For The Homeless (FTCFTH) at the Starbucks on California and Drumm St. in San Francisco, where Menefee taught youth poetry workshops. The newly born group’s motto was clear: “Homeless, not helpless. Stop the war on the poor!” FTCFTH’s first event was an occupation in front of the Macy’s at Union Square, protesting ‘Sit/Lie,’ Section 168 of the San Francisco Police Code, the city’s Civil Sidewalk Ordinance. The ordinance makes it unlawful, with certain exceptions (like a baby in a stroller), to sit or lie on the City’s public sidewalks between 7 a.m. and 11 p.m. “Public if you’re rich,” says the flier that Mike distributed. “The commons belongs to all!”',

            location: {
                center: [-122.39647, 37.79367],
                zoom: 16,
                pitch: 70,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier_2_2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'Images/sunset_120mm.jpg',
            audio:  '',
            description: 'Unhoused people had been effectively ‘occupying’ cities like San Francisco long before the encampments at Wall Street; they had extensive experience dealing with police, with NIMBYs, and with punitive systems. Suddenly, San Francisco’s homeless found college students, activists, housed people, in their ranks, camping in solidarity on public space. Through Occupy, an experience of poverty in San Francisco included all those whose bedrolls were raided by the police as they slept in front of the Fed. Occupy lived on public land, and the movement asked: what is a park, a Federal Reserve, a sidewalk, if not for the people?',

            location: {
                center: [-122.39647, 37.79367],
                zoom: 12,
                pitch: 70,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id_2',
            alignment: 'left',
            hidden: false,
            title: 'Occupy East Bay',
            image: 'Images/fort_not_here.jpg',
            audio:  '',
            description: 'Occupy San Francisco was far from the only occupation in the Bay Area. Occupy Oakland was a massive movement with tens of thousands of participants, and its own distinct forms of radical, anti-capitalist politics. There was also Occupy Berkeley, which was much smaller, about 100 tents in front of Martin Luther King Jr. Civic Center Park constituted its main encampment. Occupy Cal was UC Berkeley’s own campus-driven movement, more concerned about the labor inequalities affecting the education system. Even San Jose had its own Occupy. Occupy Oakland converged with First They Came for the Homeless in dramatic fashion in the years following the (approximate) end of the Occupy movement, when multiple groups came together to protest the proposed sale of the historic Berkeley Main Post Office.',
            location: {
                center: [-122.27814, 37.86665],
                zoom: 12,
                pitch: 50,
                bearing: 170
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_2',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Sale',
            image: 'Gotta find a picture for this...',
            audio: 'Audio/Tony_BPOD.mp3 (does not yet exit)',
            description: 'On June 25, 2012, Berkeleyside reported that the United States Postal Service was planning to sell the historic Berkeley Main Post Office on Allston Way. USPS intended to shift core responsibilities to the existing Berkeley Destination Delivery Unit, and pursue a new location in downtown Berkeley for retail operations. Around the same time, USPS had listed dozens of historic post offices for sale, citing operating deficits. Despite the concerted efforts of local groups across the country, several historic post offices had already been sold. The prospects of protecting Berkeley’s Main Post Office looked grim, especially given the fact that the planned sale was being categorized as “relocation” as opposed to “closure,” which further limited legal possibilities for halting the process. When the Berkeley public learned of the Postal Service’s intentions, an organization called Save the Berkeley Post Office quickly formed to resist the planned sale. In February of 2013, when USPS representatives met with the Berkeley public regarding the planned sale, they encountered an outpouring of public resistance, including a large rally. The Berkeley City Council also passed a resolution in March of 2013 calling on USPS to postpone the sale for a year. A year later, USPS announced that they were moving forward with the sale.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 16,
                pitch: 75,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_3',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: 'Images/flower_with_petals.jpg',
            audio: 'Audio/Tony_BPOD.mp3 (does not yet exit)',
            description: 'By May, several of the groups involved in efforts to protect the Post Office, and resist privatization more broadly, came together to form a coalition called the Berkeley Post Office Defenders (BPOD “pronounced bee-pod”). The group’s members included members of Strike Debt Bay Area, Occupy Oakland, and Save the Berkeley Post Office. The coalition announced their “Direct Defense of the Berkeley Post Office" on July 26, 2013. Protesters from the coalition set up information tables and tents at the Post Office, inviting the public to engage in dialogue. For those involved in the resistance, what was at stake extended far beyond one post office: this was about combating austerity, about refusing to sit idly while public resources were shorn away in the name of ‘cutting operational costs.’ Many worried that these sorts of sell-offs would constitute the start of the privatization of the US Postal Service. BPOD’s timeline was explicit from the start: the protest would end when the sale was reversed, and no earlier.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 16,
                pitch: 75,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Staples Defense',
            image: '',
            audio:  'https://www.allaboutbirds.org/guide/assets/sound/549157.mp3',
            description: 'Meanwhile, Mike Zint built a lean-to against the Staples on Shattuck to protest the outsourcing of US Postal Service duties to Staples. Soon, others joined in. His group was an early incarnation of First They Came for the Homeless, and its first organized action since its inception in 2011. The Downtown Berkeley Staples was part of a pilot program to offload USPS duties to Staples, another corner cut in the sweeping austerity of the Obama administration. If successful, the program could enable USPS to cut costs by passing off key responsibilities to Staples workers, whose undervalued labor was more cost-effective than that of unionized postal workers. The Staples occupation existed as a 24/7 protest against the pilot program, as well as a way to further inform the public of the plan to sell the post office on Allston Way.',
            location: {
                center: [-122.26813, 37.86637],
                zoom: 15,
                pitch: 70,
                bearing: 85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Post Office Occupation',
            image: 'Images/000063280002.jpg',
            audio: 'Audio/Sam_Interview_Q5.mp3',
            description: 'During Mike Zint’s time outside the Shattuck Avenue Staples, he met like-minded organizers involved in the ongoing post office defense. BPOD’s mission aligned with that of FTCFTH, so collaboration between the two groups came naturally. Zint’s camp moved to the Main Post Office at Allston Way to contribute to the defense through an occupation — Mike’s specialty. The sale was still set to proceed in 2014, so that November, BPOD and FTCFTH began an active, prolonged camp in the spirit of Occupy, drawing in homeless activists and calling on former Occupiers. And, as with previous occupations, their residency was a prime opportunity to highlight the criminalization of homelessness more broadly. Tents provided not only shelter — they were also a technique of public assembly. ',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 16,
                pitch: 75,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_2',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: '',
            audio: '',
            description: 'The Main Post Office building was one of several historic buildings protected by an overlay ordinance in 2014. This was just one of many efforts by the city to prevent the sale. The City of Berkeley took USPS to court in 2015, a measure to stop the relocation of its services (and the first step of a sale), but the case was dismissed. Then, in 2016, USPS brought suit against the City of Berkeley, claiming that those 2014 zoning changes were unconstitutional. All the while, BPOD and FTCFTH continued their occupation. The encampment persisted in front of the Berkeley Main Post Office for 17 months. Throughout their lengthy tenure at the post office, occupiers weathered rainstorms, endured sustained harassment by Postal Police officers, and planted a community garden, which they christened the Garden of Common Good.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 16,
                pitch: 75,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_4',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: '',
            audio: '',
            description: 'Hudson McDonald, a Berkeley developer that had been working to purchase the post office, was ultimately unable to reach an agreement with USPS, and the sale did not proceed. USPS removed the post office from its commercial listings in 2015, but the agency would not yet concede that the planned sale was permanently canceled.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 16,
                pitch: 75,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_5',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: 'Images/spring_flowers.jpg',
            audio: '',
            description: 'The camp was evicted in April of 2016, nearly a year and a half after its inception. During the eviction, Berkeley Police Department officers and USPS Inspection Service members (Postal Police) issued citations and seized possessions from protesters, and the area in which occupiers had been residing was fenced off. Two years later, the trial over Berkeley’s zoning changes began. By May of 2018, the saga concluded, as U.S. District Court Judge William Alsup ruled that Berkeley had not acted unconstitutionally in its creation of the Civic Center Overlay. Though USPS could technically still legally sell the building, the site remains a post office today, and the overlay is still in effect. Judge Alsup’s decision was never appealed.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 13,
                pitch: 60,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier_6',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: 'Images/dimitri_35mm.jpg',
            audio: '',
            description: 'First They Came for the Homeless members and supporters remember the post office occupation as an important victory and a vital part of the organization’s history. As with earlier and later occupations, the post office defense involved many flashpoint clashes with police and agitators. Dimitri, a Post Office Occupier and member of FTCFTH, remembers a day when he was maced while protecting camp from an agitator. For all the support that the occupation received, they also received their fair share of criticism and ambivalence. Maintaining camp order and solidarity were necessary and ongoing struggles, especially in the pursuit of a positive public image. Despite these hurdles, the occupiers’ goals were realized in the halting of the Post Office sale. The Post Office Occupation was a powerful, highly visible statement that laid necessary groundwork for the eventual establishment of the Here / There camp.',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 13,
                pitch: 60,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'identifier_3_2',
            alignment: 'right',
            hidden: false,
            title: 'Liberty City',
            image: '',
            audio: '',
            description: 'It was Tuesday night, November 17, 2015. People had been holding vigil outside Old City Hall since 6 a.m. on Monday, fasting and “sleeping out” in solidarity with the homeless. The camp was a new venture of FTCFTH, occurring concurrently with the ongoing Post Office Occupation. They called themselves Liberty City. 30 people had marched from Liberty City to Longfellow Middle School, where they joined the queue of people waiting their turn at the mic. That night, Vice Mayor Linda Maio was bringing forth Item 28, a proposal to “Improve Conditions on our Community Sidewalks.” If instituted, the ordinances would prohibit people from having more than two square feet of personal possessions on sidewalks from 7 a.m. to 10 p.m. Not two-by-two square feet, but two square feet. Item 28 would also outlaw laying down inside planter beds or on planter walls. Those with shopping carts would be forced to move belongings to a new block every hour, and those who failed to comply with these restrictions could face a steep fine.',
            location: {
                center: [-122.27317, 37.86924],
                zoom: 16,
                pitch: 75,
                bearing: -98
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
                id: 'identifier2',
                alignment: 'right',
                hidden: false,
                title: 'City Council Meeting at Longfellow - Preliminary Vote',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'One notable inclusion in the proposal was an ordinance prohibiting public urination and defecation, crimes that were already well established in county and statewide code. These additions were entirely redundant — the statewide code against public urination was enacted in 1872. Some homeless advocates speculated that their inclusion was meant to bolster popular support for the proposal and discredit detractors. By including these restrictions in the proposal, supporters could make homeless advocates working to block the action appear to be acting in favor of allowing public defecation and urination. By manipulating optics in this manner, supporters of the proposal could shift the conversation away from the material concerns of unhoused people (such as the severe lack of public bathrooms in Berkeley) and towards more general, popular appeals to public ‘cleanliness.’ The new ordinances would be enforced upon the installation of an alternative storage option: 50 lockers, for Berkeley’s unhoused population of nearly 1,000. The total estimated cost of implementing the ordinances came up to $300,000 per year. After four hours of fervent testimony from the public, the council held a preliminary vote at 12:30 am. They voted to pass, 6-3.',
                location: {
                    center: [-122.27833, 37.85861],
                    zoom: 15,
                    pitch: 50,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier_3',
                alignment: 'right',
                hidden: false,
                title: 'Liberty City',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'As with previous FTCFTH camps, Liberty City abided by the values of consensus and sobriety established during Occupy: the camp enforced rules including no drugs, no alcohol, and no violence. During the occupation, camp members worked to maintain an orderly community and ousted members who violated their behavioral standards. Their protest persisted after the city council’s preliminary vote as a way to resist the new ordinances, which protesters felt would further criminalize homelessness in the city. On November 24, the camp received a cease and desist order from the City of Berkeley, ordering all those camped near Old City Hall to disband.',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 16,
                    pitch: 75,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier_3_2',
                alignment: 'right',
                hidden: false,
                title: 'Liberty City',
                image: 'Images/paul_120mm.jpg',
                audio: 'Audio/Paul_KernalsofHereThere.mp3 (does not exist yet)',
                description: 'Paul Kealoha Blake recalls the role of the post office and Civic Center occupations in uniting and strengthening early FTCFTH organizers. “First They Came for the Homeless, which was Mike’s group, was a no-nonsense group. I mean, yeah, you can climb up on trees and do whatever you want, but Mike Zint was no-nonsense,” says Blake. “It was First They Came for the Homeless before it was the Here / There encampment. They booted everyone off of the post office steps —great time, incidentally, all of these times were great times —kicked everyone off, and the kernels of Here / There began percolating up.”',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 16,
                    pitch: 75,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier2_2',
                alignment: 'right',
                hidden: false,
                title: 'City Council Meeting at Longfellow - Final Vote',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'At the City Council meeting on December 1, members of the public lined up at the mic, many using their allotted one minute to oppose an ordinance they considered cruel and punitive to their city’s homeless. The auditorium of Longfellow Middle School was crowded, and as the night wore on, the energy became volatile. Maio grew increasingly impatient with the dissenting citizens. A vote to extend the meeting to 11:30 p.m. did not pass, and Councilman Kriss Worthington had the floor. Maio interrupted, accusing him of running down the clock to avoid a vote. This brought the crowd to a fever pitch.',
                location: {
                    center: [-122.27833, 37.85861],
                    zoom: 15,
                    pitch: 50,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier2_3',
                alignment: 'right',
                hidden: false,
                title: 'City Council Meeting at Longfellow - Final Vote',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'A member of the crowd took to the mic. “It is a violation of the California Brown Act, to deny people the right to speak,” JP Massar said, citing the legislation that ensures citizens their right to participate in local governments. Maio continued to speak over him, calling for a vote. Massar then repeated his mantra. “You have the right to clear the room, but you do not have the right to deny people the right to speak,” he said, his voice bellowing over the soundsystem. The council passed the ordinance. Berkeley police evicted the residents of Liberty City three days later.',
                location: {
                    center: [-122.27833, 37.85861],
                    zoom: 15,
                    pitch: 50,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier2_4',
                alignment: 'right',
                hidden: false,
                title: 'City Council Meeting at Longfellow - Final Vote',
                image: '',
                audio: 'yay',
                description: 'Maio’s ordinance was adopted, but the policy was never enforced because the lockers were never made available. Providing lockers was the responsibility of the City Manager – to some, this fallthrough suggests that perhaps the City Council passed this ordinance only under pressure and in the heat of the moment. Another possibility is that the ordinance was simply too broad to allow for effective enforcement: constantly policing the exact geometric bounds of every unhoused person’s possessions in Berkeley is a massive, costly, and ultimately impossible project.',
                location: {
                    center: [-122.27833, 37.85861],
                    zoom: 15,
                    pitch: 50,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier2_5',
                alignment: 'right',
                hidden: false,
                title: 'A New Mayor',
                image: 'Images/campanile_fog.jpg',
                audio: 'yay',
                description: 'Then, in November 2016, Berkeley elected a new mayor, Jesse Arreguín — he had voted against Maio’s sidewalk ordinance as a Councilmember, campaigned against the criminalization of homelessness, and promised progressive solutions to the issues at large. In 2018, nearly three years after the adoption of the ordinances, Arreguín’s administration outsourced the implementation of lockers at the Veteran Memorial Building, each nine cubic feet, each accessible from 8 a.m. to 4 p.m. during the week, and 8 a.m. to 2 p.m. on the weekends. There were 58 lockers total, and the endeavor cost $50,000.',
                location: {
                    center: [-122.27185, 37.87014],
                    zoom: 14,
                    pitch: 50,
                    bearing: -98
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier4',
                alignment: 'left',
                hidden: false,
                title: 'The Hub',
                image: './path/to/image/source.png',
                audio: '',
                description: 'In October of 2016, Mike and company were in front of the Starbucks on Shattuck. The City of Berkeley had redesigned its homeless services to a bottleneck: the Berkeley Food & Housing Project, known as “the Hub.” The Hub was the new one-stop shop for all homeless services. For individual agencies, this meant that offering services without referral from the Hub would threaten their access to necessary funding. For people needing services, it meant bureaucracy, and the end of receiving services day-of. Dan had met a disabled woman who had lost her housing and her ID, and took her to the new Hub –– it was his first time there, and he was shocked at how unhelpful they were. The Hub rejected her, and she slept outside for several nights.',
                location: {
                    center: [-122.26821, 37.86879],
                    zoom: 15,
                    pitch: 60,
                    bearing: 30
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier5',
                alignment: 'left',
                hidden: false,
                title: 'Coordinated Entry',
                image: './path/to/image/source.png',
                audio: 'Audio/Dan_CoordinatedEntry.mp3',
                description: 'Under the prior system, you could try multiple locations around the city. If refused at one, you could try somewhere else. Places could often get people in on their day of need, and you could call around and find someone who might fit you in. It was more of a human configuration: one developed friendly relationships with intake people at various places and they were a familiar face willing to help out when someone needed a bed for a night. But the Coordinated-Entry system changed all of this.',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier5_2',
                alignment: 'left',
                hidden: false,
                title: 'Coordinated Entry',
                image: './path/to/image/source.png',
                audio: 'Audio/Dan_PoorTour_Start.mp3',
                description: 'Dan, who was previously unhoused himself, had been planning various sleep outs with unhoused people for years as a means of protest and community building. He was an organizer of ‘Arnieville,’ a 2010 protest against Arnold Schwarzenegger’s proposal to slash funding for in-house disability services. He founded the Disabled People Outside Project to address these kinds of injustices –– he runs the project to this day. For years, he stockpiled tents, stoves, and other equipment necessary for outdoor living, which he planned to use to support a longer, more mobile sleep-out. What he saw at the Hub left him angry, and gave him the extra push he needed to work towards a vision he’d been brewing for years.',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier4_2_2',
                alignment: 'left',
                hidden: false,
                title: 'The Hub',
                image: './path/to/image/source.png',
                audio: 'Audio/Ben_the_Hub.mp3',
                description: 'Dan ran into Mike Zint in front of the Starbucks on Shattuck Avenue when Dan was returning to the Hub that day, and the two hatched a plan to stage ‘The Poor Tour,’ a long-term touring parade to protest the state of homeless services and the criminalization of homelessness in Berkeley. Then, The Poor Tour began in earnest. Their first stop was the Hub. Dan, Mike, Sarah Menafee, James Cartmill, and Michelle Lot met at Starbucks to discuss strategy and locations. The group made their camp as visible as possible, displaying signs with slogans like “Snubbed by the Hub!” There, others joined the group, growing its strength and numbers. “Not too long after I joined the encampment, we were raided by the police,” says Benjamin Royer, a disabled member of FTCFTH. “And then we kind of went onto what was called The Poor Tour. Police raid after police raid after police raid.” The eviction at the Hub was the first of many.',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier6',
                alignment: 'left',
                hidden: false,
                title: 'Location #2',
                image: 'Images/ben_120mm_2.jpg',
                audio: 'Audio/Ben_Kits.mp3 (does not yet exist)',
                description: 'Ben Royer remembers the treatment FTCFTH received during The Poor Tour well: the evictions were disruptive and destabilizing, and resulted in members losing important belongings. The solution Ben came up with was to create mobile kits with only the bare necessary supplies. For Ben, these kits were a strategic adaptation to the constant evictions.',
                location: {
                    center: [-122.26819, 37.86873],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier7',
                alignment: 'left',
                hidden: false,
                title: 'Third Poor Tour Location',
                image: 'Images/james_35mm_1.jpg',
                audio: 'Audio/James_MikeZint_PoorTour.mp3',
                description: 'For many members of FTCFTH, The Poor Tour was a time when Mike Zint proved himself as a strategist. James Cartmill remembers Mike’s leadership as an invaluable factor in focusing the mission of The Poor Tour.',
                location: {
                    center: [-122.2679, 37.85837],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier8',
                alignment: 'left',
                hidden: false,
                title: 'Fourth Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'Audio/Dan_PoorTourProgress.mp3',
                description: 'Third Poor Tour Eviction',
                location: {
                    center: [-122.26711, 37.86032],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier9',
                alignment: 'left',
                hidden: false,
                title: 'Fifth Poor Tour Location',
                image: 'Images/paul_35mm_1.jpg',
                audio: 'Audio/Paul_KernelsofHereThere.mp3 (does not exist yet)',
                description: 'Community supporters like Paul Blake and Barbara Brust formed lasting bonds with members of FTCFTH through their involvement in The Poor Tour.',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier10',
                alignment: 'left',
                hidden: false,
                title: 'Sixth Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Fifth Poor Tour Eviction',
                location: {
                    center: [-122.27162, 37.86938],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier11',
                alignment: 'left',
                hidden: false,
                title: 'Seventh Poor Tour Location',
                image: 'Images/tony_120mm_1.jpg',
                audio: 'Audio/Tony_PoorTour.mp3 (does not exist yet)',
                description: 'Tony was one of the many supporters, providing aid in the most direct ways possible, showing up in his truck at early morning evictions to help FTCFTH members protect their property from seizure.',
                location: {
                    center: [-122.27045, 37.86905],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier12',
                alignment: 'left',
                hidden: false,
                title: '8th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '7th Poor Tour Eviction',
                location: {
                    center: [-122.27162, 37.86938],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier13',
                alignment: 'left',
                hidden: false,
                title: '9th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_PoorTourRaids.mp3 (does not yet exist)',
                description: 'For Tony, observing these evictions and providing support greatly contributed to his understanding of what groups like FTCFTH were up against, and how far the City of Berkeley was willing to go to criminalize homelessness and erase visible poverty: “I witnessed many of these incidents, which were to me kind of frightening, the intensity of it. And I am coming from a home — I know I am going home to a bed. To see people struggle to hold on to their possessions and to see someone in exodus…it happened to Mike Zint, where they took his medicine —his inhalers—he had lung issues; that is almost like a death sentence.”',
                location: {
                    center: [-122.27055, 37.86998],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier14',
                alignment: 'left',
                hidden: false,
                title: '10th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'According to a Berkeleyside article published in 2017 community supporter Leah Simon-Weisberg paid to rent portable bathrooms for FTCFTH when the group was camped out on a street median near Berkeley Bowl. After just a few days, the camp was evicted once more, and lost access to the bathroom.',
                location: {
                    center: [-122.26791, 37.85749],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier15',
                alignment: 'left',
                hidden: false,
                title: '11th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Over and over, the police evicted camps, often descending on FTCFTH in the early hours of the morning. Multiple members and supporters shared their experiences of these “raids,” recalling the disorientation and panic they felt as a result of these eviction tactics. Again and again, camps were flipped through, possessions were seized, and activists were forced to start from scratch in a new location. Community supporters were woken up in the early hours of the morning by alerts from campers, and would rush to the site of the eviction to monitor police and assist with packing and preserving possessions. At every stop, Dan and other supporters were there to provide new tents and stoves to replace the items seized in the raids.',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier16',
                alignment: 'left',
                hidden: false,
                title: '12th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '11th Poor Tour Eviction',
                location: {
                    center: [-122.28655, 37.86977],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier17',
                alignment: 'left',
                hidden: false,
                title: '13th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Many on The Poor Tour remember this time as a crucible in which the values of FTCFTH were forged and strengthened through extreme adversity. As with previous FTCFTH and Occupy settlements, the camps served not only to cast a blinding spotlight on the conditions of being unhoused in Berkeley, but also to offer an intentional community of solidarity and self-determination to those experiencing homelessness. The camps were highly visible, made more visible by colorful signs. They were hard to ignore, by design.',
                location: {
                    center: [-122.2705, 37.88191],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier18',
                alignment: 'left',
                hidden: false,
                title: '14th Poor Tour Location',
                image: 'Images/fire_trails_sunset.jpg',
                audio: 'Audio/Dan_PT_Achievements.mp3 (gotta do)',
                description: 'In the end, FTCFTH camps on The Poor Tour were evicted at least 14 times. With every eviction, members of FTCFTH lost vital, life-sustaining medicine and possessions. But, as many have pointed out, The Poor Tour was also a victory, in many senses. For one, their size and support effectively exhausted enforcement. During the tour, many unhoused people gained shelter, community, and the opportunity to make a statement. “The one thing that the Poor Tour did do, that makes me feel good, is that I know there are people alive today that wouldn’t be alive if it wasn’t for the fact that they could get a little bit of shelter,” said Dan. “And there’s people who are sane that wouldn’t be sane if they weren’t allowed to get a little bit of privacy in their tents, and that means a lot to me.”',
                location: {
                    center: [-122.26828, 37.85653],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_2',
                alignment: 'left',
                hidden: false,
                title: 'Final Stop',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'The last stop on The Poor Tour was the Here / There Sculpture near the border of Oakland and Berkeley. Here, FTCFTH found a community willing to welcome them and offer them support in their pursuit of independent stability. FTCFTH settled in the Lorin District, a historically non-white community in South Berkeley, setting up a camp near the sculpture on Adeline Street. That camp would come to be known by the same name as the sculpture: Here / There. There were many, many other important participants in The Poor Tour who were unfortunately not able to be contacted and included here, given the constraints of this project. Their voices live on in the manifold articles and blog posts written about The Poor Tour, many of which are included in this website’s media archive.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 16,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier19',
                alignment: 'left',
                hidden: false,
                title: 'Huichin - Land of the Chochenyo Ohlone',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Before European contact, the Chochenyo speaking Ohlone people lived on the Huichin territory we now know as Berkeley. In 1820, Luís María Peralta, a sergeant of the Spanish Army and an administrator of Native American removal, received a land grant of 44,800 acres from California’s last Spanish Governor, Pablo Vicente de Solá. The Peralta Grant —one of the largest Spanish land grants— was a gift in recognition of the soldier’s years of long service guarding missions, fighting Native Americans, and keeping ledgers of cattle. The grant stretched from the El Cerrito Creek to the San Leandro Creek, which encompasses six and a half cities today, including Berkeley. From 1769 to 1821, California was a Spanish colony, and Peralta’s land grant was one of around twenty land grants made to individuals. California then became an independent nation of Mexico from 1821 to 1846. During this time, Mexico issued some six to eight hundred grants. The legal claims to land held by rancheros like the Peraltas were tenuous, by the time California was transferred to the United States in 1848. The same year, gold was discovered in the Sierras. New neighbors, squatters, cattle rustlers, and developers were hungry to settle, and new laws made it easier to lay claim to the Peraltas’ land. Newcomers flooded through Oakland on the newly completed Transcontinental Railroad. The family fought squatters all the way to the Supreme Court, but legal fees forced the Peraltas to sell more land; by 1877, they had lost almost all of the original 44,800 acres. ',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 10.25,
                    pitch: 0,
                    bearing: 0
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier20',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'In 1876, Governor Leland Stanford and real estate developer Francis Kittredge Shattuck bought a right-of-way to allow a steam train spur line from Central Pacific Railway in Oakland to Adeline Street and Stanford Avenue, ending at Shattuck and University. The spur line effectively stitched Oakland to Berkeley, by way of Lorin Station on Adeline and Alcatraz. Lorin emerged in the 1880s as an admired village of Victorian houses on Oakland’s border; when it was annexed in 1892, this area of South Berkeley came to be known as the Lorin District. This is the neighborhood where FTCFTH put down its roots. The Here / There camp today stands near Old Lorin Station. ',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 15,
                    pitch: 60,
                    bearing: -85
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier20_1',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'From 1910-1970, approximately six million Black people moved out of the American South to the north, midwest, and west, to pursue educational and economic opportunities and to escape from the mounting violence of Jim Crow. The Great Migration is one of the largest movements of any group in American history, and can be understood in two waves. The First Great Migration (1910-1940) was a relocation to the north and midwest; as industrial jobs were left vacant during the first world war, Black populations joined the non-agricultural labor supply. Although migrants moved to escape from racial hostility, they were met by similar prejudices and tensions in their new communities, from white people who were furious with the changing demographics. The Second Great Migration (1940-1970), people moved further north, but also west. Black people who migrated after World War II were met with organized pushback from the white localities, who had begun to implement discriminatory and segregationist practices.',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 13,
                    pitch: 60,
                    bearing: -85
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier20_2',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'In Berkeley, MLK Jr. Way was the line that divided the red from the rest. Redlining inscribed racist notions in space, classifying non-white neighborhoods as ‘hazardous’ and effectively legalizing discriminatory lending practices. Redlining was only one of many legal and financial implements that contributed to segregation in US cities and produced geographies of difference in which non-white residents were exploited, denied services, and shut out of opportunities for wealth creation. This is the necessary context for understanding Lorin, a vibrant, historically non-white community that lay south of the literal red line that was once Grove Street.',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 14,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier21',
                alignment: 'left',
                hidden: false,
                title: 'Grove Street',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'In 1984, Grove Street, a central artery of Berkeley, was renamed Martin Luther King Jr. Way. Grove Street had been understood in this city as an unofficial line of segregation, but New Deal era loaning practices had made such a line official. Under Roosevelt, the Home Owners’ Loan Corporation (HOLC) was created to provide affordable mortgages in the wake of the Depression. HOLC needed to assure banks, however, that borrowers would not default. The organization drew up lending security maps of major American cities, supposedly for banks to assess lending risks. In reality, the maps produced were informed by the demographics of different neighborhoods, with the various ‘grades’ being encoded with an area’s racial makeup. The maps separated cities into four grades: A as “best,” B as “desirable,” C as “declining,” and D as “hazardous.” The best areas were green, the most hazardous areas were red.',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 14,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23',
                alignment: 'left',
                hidden: false,
                title: 'The Lorin District',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Thousands of Black people moved to Berkeley in the 1940s. Many newly settled Black Berkeleyans worked in shipyards in Richmond as part of the burgeoning wartime defense industry. White property owners in Berkeley worked tirelessly to exclude the city’s non-white residents from housing opportunities, petitioning the city council to implement racial zoning laws. The Berkeley Realty Board was a favorite instrument of financial discrimination: the board supported the creation of neighborhood covenants that excluded would-be non-white home buyers, particularly Black and Asian people. Also worth noting is that Berkeley was the birthplace of single-family zoning, a practice that began in the city’s Elmwood neighborhood in 1916 with the explicit intention of preventing a Black-owned dance hall from entering the neighborhood. Given this history of racist geographies, the Lorin District was one of the few areas in Berkeley where Black and Asian residents could live. Prior to the start of the second world war, the neighborhood had a large population of Black and Japanese residents, but the US policy of Japanese internment further shifted the area’s demographics, as many former Japanese residents lost their homes and businesses.',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23_2',
                alignment: 'left',
                hidden: false,
                title: 'The Lorin District',
                image: 'Images/miss_richie_120mm.jpg',
                audio: 'Audio/MissRichie_ArrivalinLorin.mp3',
                description: 'This is, of course, only a bare account of the Lorin District’s long and storied history. Those best able to speak about the neighborhood’s history are those who call it home. Miss Richie Smith, a retired Head Start teacher, Lorin resident since 1949, and beloved community leader (sometimes called ‘the Mayor of South Berkeley’) remembers her experiences when she first came to Lorin. “I arrived here in 1949. I attended school here, received my education here. And I married, produced a family. I am a retired head start teacher, and I have been doing community work early on, because when I arrived here in ‘49, this was the only place that people of my hue and color could find a place to live . . . But this place was populated with people of color, right where we’re sitting in this block, was populated with doctors, lawyers, realtors, and a whole array of business people of color.”',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23_3',
                alignment: 'left',
                hidden: false,
                title: 'The Lorin District',
                image: './path/to/image/source.png',
                audio: 'Audio/MissRichie_RedandBlackLine.mp3',
                description: '“This busiest intersection up here at Adeline, which was Grove, was an invisible red and black line, so that people of color could only live in this area,” says Miss Richie, gesturing towards the divergence of MLK Jr. Way and Shattuck. “And the way that some made it across this invisible line was that they were a nanny, a housekeeper, a gardener of some Caucasian person. And when they shared their concerns of trying to purchase a home that they had found across this invisible red and black line, they shared that they could not get together with a creditor or bank that would loan them the money. So the employer stepped in, made the deal, and they made the payment to that person and when it was paid off, they placed it in their name. That is how some people of color made it across the line into the better communities and neighborhoods. Those were some of the experiences that I had and recall.”',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier22',
                alignment: 'left',
                hidden: false,
                title: 'Old Wells Fargo',
                image: './path/to/image/source.png',
                audio: 'Audio/MissRichie_OldLorinBusinesses.mp3',
                description: 'The Lorin District was filled with prosperous black-owned businesses that attracted residents from all over the Bay. “Well, we had three or four supermarkets in this area,” Miss Richie remembers. “We had a variety store. The building on the corner there, the hair braiding shop, was an Afro-American Rexall drug store. Across the street light, now that’s a bar, that was Wells Fargo Bank. Up on the next corner was Bank of America. We had all of these entities here in the neighborhood. People would come here and stay all day, shopping and partaking of what we had here.”',
                location: {
                    center: [-122.27177, 37.84885],
                    zoom: 16,
                    pitch: 60,
                    bearing: -35
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23_4',
                alignment: 'left',
                hidden: false,
                title: 'The Lorin District',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_Neighborhood.mp3 (does not exist yet)',
                description: '“This neighborhood had a huge impact on me and in how I view neighborhoods. We moved into this house in 1980 and it was a black community — primarily black, but also other people of color and a working class community,” says Tony Wilkinson. Tony and his wife Margy moved to Lorin in 1980. They gradually learned more about the area’s history from their neighbors. “It is a community with a rich history, it was redlined, held back, held down, and definanced… But in spite of that, this community has been able to thrive and be a beloved community.” Miss Richie played a pivotal role in introducing Tony to the people and organizations that make Lorin.',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier20_3',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'There is some debate over the origin of the name “Lorin,” which, according to a historical plaque in the area, referred to the rail station at Adeline and Alcatraz. A visit to the Berkeley Historical Society revealed that the first known use of “Lorin” as a designation for this area was on an application to the federal government in 1882 proposing a post office in the area that would be called “Lorin.” There’s also a rough verification of the geographic position of the Lorin Post Office, with details such as “3 miles from said nearest creek [never named], on the east side of it.” This document dates back to 1888, and confirms that the name “Lorin” was accepted by the United States Post Office Department (the predecessor to USPS). The original application, attached below, curiously features the name “Garfield" crossed out and replaced with “Lorin.” Who replaced the original “Garfield” remains a mystery with much speculation.',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 15,
                    pitch: 60,
                    bearing: -85
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23_5',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline',
                image: './path/to/image/source.png',
                audio: 'Audio/MissRichie_FriendsofAdeline.mp3',
                description: 'In addition to the ongoing histories of redlining, disinvestment, and other racist policies discussed by Tony and Miss Richie, the Lorin District has long been a center of community resiliency, solidarity, and activism. As Miss Richie stated, some Black residents of Lorin held property for their Japanese neighbors during internment, safeguarding these homes until their neighbors were able to return. More recently, a group of South Berkeley neighbors came together to form Friends of Adeline, an organization that, from their own words, works “to affect change so that our neighborhood is an inclusive and just place for all people.” Some of Friends of Adeline’s goals include working to exert local self-determination over the future of the neighborhood, advocating for the construction of affordable housing in the neighborhood, demanding infrastructural improvements and investments geared towards all members of the community, resisting gentrification, and fighting for the ‘right to return’ for people of color pushed out of the neighborhood by uneven development and racist policies. “The Friends of Adeline, it is a mixed group. Age-wise, professional-wise, race-wise. And the concern of a harmonious healthy community,” says Miss Richie, a leading member of the organization. “We speak for and support individuals, human beings, that are having difficulty in surviving in this community. And speak up, and meet with people that are having difficulty when we find it out.”',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier24',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Begins',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_FriendsofAdelineStart.mp3 (does not exist yet)',
                description: 'The Friends of Adeline pinpoints its beginnings to an announcement from the city in 2015. “The city put out a call, an announcement that they were going to do this project to address housing, that this transit hub here was a prime place to do housing and solve the housing issue and revitalize the neighborhood,” recalls Tony. “So Margy and I went to the meeting; it was right down the block at the Senior Center and we knew a few people, but most people we did not know, and it seemed like some people were there with their laptops interested in real estate and then there were some people just from the community.”',
                location: {
                    center: [-122.27291, 37.85436],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier24_2',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Begins',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'It was an alarming evaluation of the place he and Margy called home. “It was a pretty well attended conversation. But when the city economic development people were describing the project, the way they talked about the existing community,” says Tony. “It was more about ‘all the exciting things we are gonna do!’ and not what we are drawing from, not ‘what is the history of this community’ and ‘what are its needs’ and ‘what are its aspirations’ but as an opportunity for new people to come in and new buildings. So that was disturbing. When they came to describe what was existing there, there was nothing very positive to talk about for them. They did not see anything of much value.”',
                location: {
                    center: [-122.27291, 37.85436],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier24_3',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Begins',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_Mayor_and_Max_Anderson.mp3 (does not exist yet)',
                description: 'During the meeting, Tony remembers one woman who got up and said something to the effect of, “Gentrification’s been happening and a lot of families have been pushed out. How’s this project going to address the needs of Black families to remain in South Berkeley, to have a place in South Berkeley or to come back?” The mayor said something about how his hands were tied, how he couldn’t control rents or prices of housing or land. Then, by several accounts of those present at that fateful meeting, he said, “We would love for you to stay. But if you can’t, maybe you’d be happier somewhere else.” That was the beginning and end of the response to the question of pushout ––the callousness sent shockwaves. But then Councilmember Max Anderson suggested that the frustrated community members take action independently to develop a vision of their needs, which they could then present to the city. Max even suggested they come up with a name for their group, something like, ‘Friends of Adeline.’',
                location: {
                    center: [-122.27291, 37.85436],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier25',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Meeting - South Berkeley Community Church',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_FriendsofAdeline3.mp3 (does not exist yet)',
                description: 'By the time the meeting concluded, attendees from the neighborhood knew that they needed an organization. They weren’t ready to leave the Senior Center, and were upset about what they had just heard. They began to have small gatherings, then several bigger meetings at the South Berkeley Community Church, at which over 100 people came and had conversations in small groups about housing, about cultural issues, about the right to return, about repairing the city’s neglect. The group began to envision a mission statement for their community. Then, the city came forward with a new budget. The Friends of Adeline got a hold of it and did an analysis –– they found that two thirds of the cuts to the old budget were directly solely at the nonprofits that serve their South Berkeley community.',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier25_2',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Meeting - South Berkeley Community Church',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_FriendsofAdeline4.mp3 (does not exist yet)',
                description: '"Friends of Adeline, when we saw what they were doing to the budget, it really revealed that the intention of the city was not honorable, was exploitative, and was the opposite of renewal, it is removal, it is part of a pushing people out,” says Tony. The group insisted that the discussion of the city’s budget should not be in a small room, but accessible to the public that it affected. They made a flier with pictures of young people from Youth Spirit Artworks sitting in front of the Malcolm X mosaic they had completed, and a question on top: ‘Is Berkeley’s Budget Racist?’ The flier talked about the cuts, those affected by the cuts, and invited people to come and speak up for their community at the Longfellow middle school auditorium. Young people, organizers, business owners, people all around the neighborhood packed into the auditorium, and all eyes were looking down on the mayor and the council. At one point, a woman chastised the mayor for looking at his phone when the young people were speaking, and the crowd applauded. The people were alert, listening, watching.',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier25_3',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Meeting - South Berkeley Community Church',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_Project_Halted.mp3 (does not exist yet)',
                description: 'The Friends of Adeline mounted a successful defense. “At some point, the project was stopped in the middle of the process, they [the city] took a timeout, they fired the company that was working on outreach, and they said ‘oh they were not getting their stuff in on-time,’” says Tony. “But I think what they were worried about was, they wer not getting the results that they were buying. They were spending a lot of money, a $175,000 grant to have this study, and it was coming out all wrong, so they just stopped it and dismissed this thing, and then tried to figure out how to restart it.”',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 16,
                    pitch: 30,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier26',
                alignment: 'left',
                hidden: false,
                title: 'Neighborhood Groups',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Friends of Adeline is one of many community groups in Lorin, including Youth Spirit Artworks, the Drop-In Center, Lifelong Medical/Dental, Easy Does It, and Healthy Black Families, and many others. The resistance against the Adeline Corridor Plan continues today. Friends of Adeline is calling for the City of Berkeley to revise its Adeline plan by ensuring a guaranteed future for the Ashby flea market at the Ashby BART site, funding and a site for the African American Holistic Resource Center, and 100% affordable housing at Ashby BART.',
                location: {
                    center: [-122.2702, 37.85283],
                    zoom: 14,
                    pitch: 60,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier26_2',
                alignment: 'left',
                hidden: false,
                title: 'Lorin Today',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Despite the harm done to this neighborhood by decades of racist policy and the incursion of gentrification, a strong spirit of mutual aid lives on here. Although longtime residents of Lorin are contending with considerable threats, their response has not been to resort to paranoia or NIMBY-ism. Far from it: many Lorin residents and community groups welcomed FTCFTH and supported the development of the Here / There camp. The fact that a community long denied resources and targeted with predatory ‘revitalization’ policies would extend support to a group of unhoused activists speaks to the incredible resiliency and generosity of Lorin and those who call it home.',
                location: {
                    center: [-122.2702, 37.85283],
                    zoom: 14,
                    pitch: 60,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27',
                alignment: 'left',
                hidden: false,
                title: 'Here There Begins',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_FTCFTH_move_to_Lorin.mp3',
                description: '“It is almost like they are moving South as they get rousted and I think they ended up in South Berkeley because they ended up in a community,” says Tony, of the Poor Tour’s trajectory. “You ended up in a black community where poverty was always present, a lack of resources…was not seen as a moral failure but as something that needs to be worked on.”',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 60,
                    bearing: 40
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27',
                alignment: 'left',
                hidden: false,
                title: 'Here There Begins',
                image: './path/to/image/source.png',
                audio: 'Audio/MissRichie_HereThereSetup.mp3',
                description: 'As The Poor Tour came to an end in January of 2017, FTCFTH entered a community willing to extend support and compassion. Miss Richie proposed that the camp seek solace in Lorin. “Complaints of the powers that be that are in North Berkeley, the hills, and what have you: they don’t want this kind of living in their community,” she remembers. “So I met up when they were moving them out, and they used to do this at night, so I suggested that they move to Here and There. And that is what they did, they quietly set up camp there.”',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 60,
                    bearing: 40
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_2_2',
                alignment: 'left',
                hidden: false,
                title: 'Here There Begins',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '“People like Miss Richie, Christina Murphy, Willie Phillips, Edy Boone, Elaine Bloom…people in the community in that rough history in the community did not see FTCFTH as ‘others,’” says Tony. “This is not the ‘others’ they saw them as. In a way, it’s like, this is a neighborhood, these are neighbors, these are people struggling with some issues and they need help and as long as they saw themselves as part of the bigger community and had felt the respect, and worked with the community, then they were part of the community.”',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 60,
                    bearing: 40
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_3',
                alignment: 'left',
                hidden: false,
                title: 'Here There Begins',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'The location near the intersection of Alcatraz and Adeline proved fertile ground for the establishment of the Here / There camp. This area had trees and a lawn, making it clearly safer and more habitable than the sidewalks and street corners where FTCFTH camped during The Poor Tour. The camp took its name from the art installation at the site where they settled, a massive sculpture of steel that read “HERE” and “THERE,” denoting the boundary between Berkeley and Oakland. According to the official City of Berkeley press release, “the sculptured letters form a poetic message of hello and goodbye and provide a sense of place,” and contribute to “the literary and narrative history of Berkeley.”',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 15,
                    pitch: 60,
                    bearing: 40
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_4',
                alignment: 'left',
                hidden: false,
                title: 'Original Here / There Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '“HERETHERE” was designed by local Bay Area artists Steve Gillman and Katherine Keefer. The sculpture is made of eight-foot tall powder-coated steel plate letters. Steve and Katherine were selected to create this art installation after the Berkeley Civic Arts Commission put out a call for art project submissions “appropriate for the grassy lawn near where the BART tracks go underground in Berkeley.” For years, “HERETHERE” provided a clear marker that one was entering or leaving Berkeley. The site of the installation was pre-selected when the call for artwork went out.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 90,
                    bearing: 10
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_5',
                alignment: 'left',
                hidden: false,
                title: 'Original Here / There Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'The sculpture was intended to serve as a welcome to those coming to Berkeley, yet FTCFTH arrived at this camp after months of forceful evictions by the City of Berkeley that had communicated the opposite message. FTCFTH had to fight to remain in Berkeley at all, and their creation of a camp at this chosen gateway site had a clear symbolic resonance. Their occupation of the site was tongue in cheek — they were visual reminders of the city’s hypocrisy. Look, they said. Berkeley advertises compassion while pursuing policy that accomplishes the opposite.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 90,
                    bearing: 10
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27_6',
                alignment: 'left',
                hidden: false,
                title: 'Original Here / There Location',
                image: './path/to/image/source.png',
                audio: 'Audio/Tony_Intentional_Community.mp3',
                description: 'They were on BART property now, and the raids had stopped. They could stay for more than a few nights, and the camp began to envision permanence. Zint had long pushed for the city to create a sanctioned encampment site, and here was an opportunity to show proof of that possibility. The camp focused on making an exemplary space for stability and self-advocacy. “It was an intentional community, they had rules: there is no alcohol, no heavy drugs, and also a kind of social contract where you helped each other and you also worked with the community,” says Tony. “One thing Mike Zint always talked about — was that stability is the first, number one thing for when you find yourself without a home, without a space, without a shelter. You have to establish stability, so that you can catch your breath, be calm, and make good decisions about what is going to happen.” The camp stressed responsibility and cleanliness, earning it the support of other community members and the attention of local and national media outlets.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 90,
                    bearing: 10
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier28',
                alignment: 'left',
                hidden: false,
                title: 'Sweet Adeline Bakeshop',
                image: 'Images/amanda_1.jpg',
                audio: 'Audio/Amanda_NonConcensus.mp3',
                description: 'Not everyone in the neighborhood was initially enthusiastic about the arrival of FTCFTH. Some business owners and employees worried the new arrivals would have a negative impact on commerce. Amanda Ruth-Chouinard, current owner and former employee of beloved local cafe and bakeshop Sweet Adeline, remembers concern in the shop when FTCFTH moved in.',
                location: {
                    center: [-122.27223, 37.8476],
                    zoom: 16,
                    pitch: 60,
                    bearing: 90
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier28_2',
                alignment: 'left',
                hidden: false,
                title: 'Sweet Adeline Bakeshop',
                image: '',
                audio: 'Audio/Amanda_HereThereArrival.mp3',
                description: '“So I remember the first day that they moved in. I don’t remember talking to anyone specifically from the camp at that point, I just remember being like, Whoa, this is happening! And being kind of alarmed, a lot of co-workers and us were like, This isn’t going to be good for business, there’s tents across the street,” says Amanda. “But you kind of realize this is saying something: they have to live in those tents across the street. This is saying something about our economy and the times . . . And it’s not like they would come in and use our bathroom and not buy anything: they would buy a lot of stuff every day!”',
                location: {
                    center: [-122.27223, 37.8476],
                    zoom: 16,
                    pitch: 60,
                    bearing: 90
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier28_3',
                alignment: 'left',
                hidden: false,
                title: 'Sweet Adeline Bakeshop',
                image: './path/to/image/source.png',
                audio: 'Audio/Leslie_CampSupporters.mp3',
                description: 'Over time, Sweet Adeline would become one of the camp’s largest community supporters, along with groups like Friends of Adeline. When asked about organizations that aided Here / There, former camp members Leslie and Tim remembered several important advocates, including Sweet Adeline, Youth Spirit Artworks, Friends of Adeline, and Lifelong Medical Care.',
                location: {
                    center: [-122.27223, 37.8476],
                    zoom: 16,
                    pitch: 60,
                    bearing: 90
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier28_4',
                alignment: 'left',
                hidden: false,
                title: 'Sweet Adeline Bakeshop',
                image: './path/to/image/source.png',
                audio: 'Audio/James_CampSupporters.mp3',
                description: '“They hooked us up, and then people that were customers of Sweet Adeline would throw in like $100, or 50 bucks, and say, this is for coffee for the camp.” says James Cartmill. “And so, you know, camp was not real big, and we would have two or three days with coffee, we could just go over and get it from them, and that was great, because it was the community supporting the community supporting the community, because the money basically just came back around.”',
                location: {
                    center: [-122.27223, 37.8476],
                    zoom: 16,
                    pitch: 60,
                    bearing: 90
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier29',
                alignment: 'left',
                hidden: false,
                title: 'Camp Infrastructure',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Over the following months, the support of groups like Friends of Adeline, Consider the Homeless!, Sweet Adeline, Youth Spirit Artworks, and Lifelong, in addition to networks of neighbors, would prove vital to the camp’s longevity. Though any camp must necessarily fight for its survival and resist the ever-present threat of eviction, the relative stability found at the Here / There sight allowed FTCFTH to undertake more ambitious governance and infrastructural projects.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier30',
                alignment: 'right',
                hidden: false,
                title: 'H/T Eviction: Unaffiliated Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Second camp where an eviction notice was posted',
                location: {
                    center: [-122.2709, 37.84806],
                    zoom: 18,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier31',
                alignment: 'right',
                hidden: false,
                title: 'Fence Installed',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 18,
                    pitch: 75,
                    bearing: 30
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier32',
                alignment: 'left',
                hidden: false,
                title: 'Old City Hall Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 18,
                    pitch: 75,
                    bearing: -94
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier33',
                alignment: 'right',
                hidden: false,
                title: 'City Council Passes Sidewalk Ban Pt.2',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27088, 37.86946],
                    zoom: 17,
                    pitch: 65,
                    bearing: -96
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier34',
                alignment: 'left',
                hidden: false,
                title: 'Aquatic Park Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.29568, 37.85009],
                    zoom: 15.5,
                    pitch: 65,
                    bearing: -100
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier35',
                alignment: 'right',
                hidden: false,
                title: 'Here / There Camp (new location)',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27144, 37.8478],
                    zoom: 16,
                    pitch: 65,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier36',
                alignment: 'right',
                hidden: false,
                title: 'Expressions Gallery',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.26801, 37.85521],
                    zoom: 16,
                    pitch: 65,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier37',
                alignment: 'right',
                hidden: false,
                title: 'The Camp Garden',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27136, 37.84788],
                    zoom: 18,
                    pitch: 65,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier38',
                alignment: 'right',
                hidden: false,
                title: 'Ben Bartlett Bathroom Meeting',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 17,
                    pitch: 70,
                    bearing: 75
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier39',
                alignment: 'right',
                hidden: false,
                title: 'South Berkeley Public Bathroom Opens',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27085, 37.84843],
                    zoom: 17,
                    pitch: 30,
                    bearing: -190
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier40',
                alignment: 'left',
                hidden: false,
                title: 'Second Camp Bathroom',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27136, 37.84822],
                    zoom: 17,
                    pitch: 30,
                    bearing: -190
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
    ]
};
var feature = features[0];
