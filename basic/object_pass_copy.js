let color_lawn = {
    title: 'lawn',
    color: '#00F00',
    rating: 0
}

console.log('origin color ', color_lawn);

function RatingColor(color, rate) {
    color.rating = rate;
    return color;
}

console.log(RatingColor(color_lawn, 10))
