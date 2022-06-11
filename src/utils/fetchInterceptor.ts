import fetchIntercept from 'fetch-intercept';

export const registerFetchInterceptor = () => {
    fetchIntercept.register({
        request: (url, config) => {
            // Modify the url or config here
            return [url, config];
        },

        requestError: (error) => {
            // Called when an error occured during another 'request' interceptor call
            return Promise.reject(error);
        },

        response: (response) => {
            /**
             * refresh access token when our server starts sending 401 response
             */
            (async () => {
                const currentDomain = /(https?:\/\/).+?\//.exec(window.location.href)?.shift();
                const responseDomain = /(https?:\/\/).+?\//.exec(response.url)?.shift();

                /**
                 * if 401 was sent by our own server
                 */
                if (response.status === 401 && responseDomain === currentDomain) {
                    /**
                     * invalid access token: refresh for client
                     */
                    const refreshReq = await fetch('/api/auth/refresh-token', { method: 'post' });
                    if (refreshReq.status !== 200) return (window.location.href = '/api/auth/reset-session');
                    window.location.reload();
                }
            })();

            return response;
        },

        responseError: (error) => {
            // Handle an fetch error
            return Promise.reject(error);
        },
    });
};
