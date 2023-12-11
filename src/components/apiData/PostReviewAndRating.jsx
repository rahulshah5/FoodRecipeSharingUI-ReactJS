// postReviewAndRating.js

import axios from './axios';

const postReviewAndRating = async (id, rating, review, country) => {
    try {
        const ratingRes = await axios.post(
            'rating/',
            {
                recipe: id,
                rating,
                country
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('user').replace(/"/g, '')}`,
                },
            }
        );

        const reviewRes = await axios.post(
            'review/',
            {
                recipe: id,
                content: review,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('user').replace(/"/g, '')}`,
                },
            }
        );

        return { reviewRes: reviewRes.data, ratingRes: ratingRes.data, error: null };
    } catch (error) {
        return { reviewRes: null, ratingRes: null, error: error};
    }
};

export default postReviewAndRating;
