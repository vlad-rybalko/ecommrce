// import LocationManager, { Location } from '../../../semyanich/js/components/global/LocationManager';

// export function changeRating(entity, id, value, ratingContainer) {
//     let url = '/' + entity + '/change_rating';
//     return $.post(url, {
//         id: id,
//         entity: entity,
//         action: getChangeAction(value),
//     })
//         .then((response) => {
//             let newRating = response.new_rating;
//             let ratingValue = ratingContainer.find('.js-voting-value');
//             ratingValue.html(newRating).removeClass('positive negative');
//             if (newRating > 0) {
//                 ratingValue.addClass('positive');
//             }
//             if (newRating < 0) {
//                 ratingValue.addClass('negative');
//             }
//         })
//         .catch((response) => {
//             if (response.status === 403) {
//                 LocationManager.openLocation(Location.Login);
//             }
//         });
// }

function getChangeAction(changeValue) {
    switch (changeValue) {
        case -1:
            return 'dislike';
        case 0:
            return 'indifferent';
        case 1:
            return 'like';
    }
}
