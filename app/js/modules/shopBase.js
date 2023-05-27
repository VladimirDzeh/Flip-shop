// База данных магазина

const shopBase = {
    longboards: [
        {
            img: '../../images/long/long_1.webp',
            alt: 'Longboard Free Ride Cruiser',
            prodName: 'Free Ride Cruiser',
            dateAdded: '05.11.2022'
        },
        {
            img: '../../images/long/long_2.webp',
            alt: 'Longboard Dusters California Long Distance',
            prodName: 'Dusters California Long Distance',
            dateAdded: '23.10.2022'
        },
        {
            img: '../../images/long/long_3.webp',
            alt: 'Longboard Dusters California Cruiser',
            prodName: 'Dusters California Cruiser',
            dateAdded: '26.11.2022'
        },
        {
            img: '../../images/long/long_4.webp',
            alt: 'Longboard Dusters California Speedboard',
            prodName: 'Dusters California Speedboard',
            dateAdded: '05.11.2022'
        },
        {
            img: '../../images/long/long_5.webp',
            alt: 'Longboard Dusters California Speedboard',
            prodName: 'Dusters California Speedboard',
            dateAdded: '01.10.2022'
        },
        {
            img: '../../images/long/long_6.webp',
            alt: 'Longboard Dusters California Boardwalking',
            prodName: 'Dusters California Boardwalking',
            dateAdded: '23.10.2022'
        },
        {
            img: '../../images/long/long_7.webp',
            alt: 'Longboard Dusters Long Distance',
            prodName: 'Dusters Long Distance',
            dateAdded: '18.02.2023'
        },
        {
            img: '../../images/long/long_8.webp',
            alt: 'Longboard Dusters California Long Distance',
            prodName: 'Dusters California Long Distance',
            dateAdded: '08.03.2023'
        },
        {
            img: '../../images/long/long_9.webp',
            alt: 'Longboard Dusters California Dreaming Long Distance',
            prodName: 'Dusters California Dreaming Long Distance',
            dateAdded: '19.03.2023'
        },
        {
            img: '../../images/long/long_10.webp',
            alt: 'Longboard East Coast Long Distance',
            prodName: 'East Coast Long Distance',
            dateAdded: '22.05.2023'
        },
        {
            img: '../../images/long/long_11.webp',
            alt: 'Longboard East Coast Malibu Cruiser',
            prodName: 'East Coast Malibu Cruiser',
            dateAdded: '13.01.2023'
        },
        {
            img: '../../images/long/long_12.webp',
            alt: 'Longboard East Coast Pipeline Cruiser',
            prodName: 'East Coast Pipeline Cruiser',
            dateAdded: '11.04.2023'
        },
        {
            img: '../../images/long/long_13.webp',
            alt: 'Longboard Hawaii Style Long Distance',
            prodName: 'Hawaii Style Long Distance',
            dateAdded: '01.05.2023'
        },
        {
            img: '../../images/long/long_14.webp',
            alt: 'Longboard Plank Summer',
            prodName: 'Plank Summer',
            dateAdded: '07.02.2023'
        }
    ],
    skateboards: [
        {
            img: '../../images/skate/skate_1.webp',
            alt: 'Skateboard Snake White',
            prodName: 'Snake White',
            dateAdded: '03.11.2022'
        },
        {
            img: '../../images/skate/skate_2.webp',
            alt: 'Skateboard Snake Dark',
            prodName: 'Snake Dark',
            dateAdded: '28.11.2022'
        },
        {
            img: '../../images/skate/skate_3.webp',
            alt: 'Skateboard Your Superhero',
            prodName: 'Your Superhero',
            dateAdded: '21.03.2023'
        },
        {
            img: '../../images/skate/skate_4.webp',
            alt: 'Skateboard Daker Classic',
            prodName: 'Daker Classic',
            dateAdded: '10.05.2023'
        },
        {
            img: '../../images/skate/skate_5.webp',
            alt: 'Skateboard Termit Classic',
            prodName: 'Termit Classic',
            dateAdded: '15.04.2023'
        },
        {
            img: '../../images/skate/skate_6.webp',
            alt: 'Skateboard Ride Mistic',
            prodName: 'Ride Mistic',
            dateAdded: '10.01.2023'
        },
        {
            img: '../../images/skate/skate_7.webp',
            alt: 'Skateboard Ride Octopus',
            prodName: 'Ride Octopus',
            dateAdded: '10.09.2022'
        },
        {
            img: '../../images/skate/skate_8.webp',
            alt: 'Skateboard Explore',
            prodName: 'Explore',
            dateAdded: '13.02.2023'
        },
        {
            img: '../../images/skate/skate_9.webp',
            alt: 'Skateboard Plank Board Co',
            prodName: 'Plank Board Co',
            dateAdded: '20.03.2023'
        },
        {
            img: '../../images/skate/skate_10.webp',
            alt: 'Skateboard Footwork skate',
            prodName: 'Footwork skate',
            dateAdded: '11.03.2023'
        },
        {
            img: '../../images/skate/skate_11.webp',
            alt: 'Skateboard Powell Peralta',
            prodName: 'Powell Peralta',
            dateAdded: '29.04.2023'
        },
        {
            img: '../../images/skate/skate_12.webp',
            alt: 'Skateboard Powell Peralta',
            prodName: 'Powell Peralta',
            dateAdded: '20.01.2023'
        }
    ],
    pennyboards: [
        {
            img: '../../images/penny/penny_1.webp',
            alt: 'Pennyboard Atemi Blue',
            prodName: 'Atemi Blue',
            dateAdded: '29.04.2023'
        },
        {
            img: '../../images/penny/penny_2.webp',
            alt: 'Pennyboard Globo Light Turquoise',
            prodName: 'Globo Light Turquoise',
            dateAdded: '21.12.2022'
        },
        {
            img: '../../images/penny/penny_3.webp',
            alt: 'Pennyboard Globo Light Violet',
            prodName: 'Globo Light Violet',
            dateAdded: '02.04.2023'
        },
        {
            img: '../../images/penny/penny_4.webp',
            alt: 'Pennyboard Atemi Colorful',
            prodName: 'Atemi Colorful',
            dateAdded: '07.05.2023'
        },
        {
            img: '../../images/penny/penny_5.webp',
            alt: 'Pennyboard Penny Australia',
            prodName: 'Penny Australia',
            dateAdded: '02.11.2022'
        },
        {
            img: '../../images/penny/penny_6.webp',
            alt: 'Pennyboard Penny Australia Colorful',
            prodName: 'Penny Australia Colorful',
            dateAdded: '23.04.2023'
        },
        {
            img: '../../images/penny/penny_7.webp',
            alt: 'Pennyboard Penny Night',
            prodName: 'Penny Night',
            dateAdded: '27.02.2023'
        },
        {
            img: '../../images/penny/penny_8.webp',
            alt: 'Pennyboard Rose Man',
            prodName: 'Rose Man',
            dateAdded: '12.01.2023'
        },
        {
            img: '../../images/penny/penny_9.webp',
            alt: 'Pennyboard Penny Australia Yellow',
            prodName: 'Penny Australia Yellow',
            dateAdded: '23.04.2023'
        },
        {
            img: '../../images/penny/penny_10.webp',
            alt: 'Pennyboard Globo Pink',
            prodName: 'Globo Pink',
            dateAdded: '03.04.2023'
        },
        {
            img: '../../images/penny/penny_11.webp',
            alt: 'Pennyboard Globo Marvel',
            prodName: 'Globo Marvel',
            dateAdded: '01.02.2023'
        }
    ],
    fingerboards: [
        {
            img: '../../images/finger/finger_1.webp',
            alt: 'Fingerboard Jump Transformer',
            prodName: 'Jump Transformer',
            dateAdded: '17.01.2023'
        },
        {
            img: '../../images/finger/finger_2.webp',
            alt: 'Fingerboard Jump Turbo',
            prodName: 'Jump Turbo',
            dateAdded: '27.11.2022'
        },
        {
            img: '../../images/finger/finger_3.webp',
            alt: 'Fingerboard Trajectory',
            prodName: 'Trajectory',
            dateAdded: '07.12.2022'
        },
        {
            img: '../../images/finger/finger_5.webp',
            alt: 'Fingerboard Wide Turbo',
            prodName: 'Wide Turbo',
            dateAdded: '13.10.2022'
        },
        {
            img: '../../images/finger/finger_6.webp',
            alt: 'Fingerboard Jump Donut',
            prodName: 'Jump Donut',
            dateAdded: '25.01.2023'
        },
        {
            img: '../../images/finger/finger_7.webp',
            alt: 'Fingerboard Jump Turbo',
            prodName: 'Jump Turbo',
            dateAdded: '15.12.2022'
        },
        {
            img: '../../images/finger/finger_8.webp',
            alt: 'Fingerboard Anti-Once',
            prodName: 'Anti-Once',
            dateAdded: '11.04.2023'
        },
        {
            img: '../../images/finger/finger_9.webp',
            alt: 'Fingerboard Anti-Once',
            prodName: 'Anti-Once',
            dateAdded: '22.05.2023'
        },
        {
            img: '../../images/finger/finger_10.webp',
            alt: 'Fingerboard Profi',
            prodName: 'Profi',
            dateAdded: '22.04.2023'
        },
        {
            img: '../../images/finger/finger_11.webp',
            alt: 'Fingerboard BM Cheers',
            prodName: 'BM Cheers',
            dateAdded: '22.03.2023'
        },
        {
            img: '../../images/finger/finger_12.webp',
            alt: 'Fingerboard BM Fire',
            prodName: 'BM Fire',
            dateAdded: '22.02.2023'
        },
        {
            img: '../../images/finger/finger_13.webp',
            alt: 'Fingerboard BM Good Enough',
            prodName: 'BM Good Enough',
            dateAdded: '02.05.2023'
        },
        {
            img: '../../images/finger/finger_14.webp',
            alt: 'Fingerboard The Toxic Element',
            prodName: 'The Toxic Element',
            dateAdded: '22.09.2022'
        },
        {
            img: '../../images/finger/finger_15.webp',
            alt: 'Fingerboard K80-S',
            prodName: 'SK80-S',
            dateAdded: '21.10.2022'
        },
        {
            img: '../../images/finger/finger_16.webp',
            alt: 'Fingerboard Anti-Once Limited Edition',
            prodName: 'Anti-Once Limited Edition',
            dateAdded: '30.04.2023'
        },
    ]
}