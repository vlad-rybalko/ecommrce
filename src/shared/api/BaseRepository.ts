export default class BaseRepository {
    headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('content'),
    });
}
