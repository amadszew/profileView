const initState = {
    profiles: [
        {
            userId: '1',
            userName: 'Marilyn Monroe', 
            city: 'Poznań', 
            country: 'PL',
            firstText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eos iste, modi eaque atque in quam saepe nisi illum dolores accusantium sint blanditiis debitis! Ex officia asperiores aut autem nesciunt.',
            quoteText: 'Dolores, exercitationem sequi nostrum necessitatibus, repudiandae distinctio dicta excepturi soluta incidunt, fugit consequuntur impedit?',
            secondText: 'Voluptas laudantium provident quod ullam. Illo ipsam eaque minima. Mollitia quaerat debitis fuga et hic. Ab, quae. Cumque, ducimus eveniet! Repellendus similique reprehenderit voluptatibus, culpa assumenda totam eveniet non suscipit.'
        }
    ]
}

export const rootReducer = (state = initState) => {
    return state;
}