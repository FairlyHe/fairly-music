import http from './request';

export function GET_BANNER() {
    return http('/banner');
}

export function postXXX(params) {
    return http('/api/post', {
        method: 'POST',
        params: params,
    });
}
