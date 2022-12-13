const INTERNET_CHECK_URL = 'https://google.com';

export const isHasInternetConnection = async (): Promise<boolean> => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      } as any
    });
    if (
      res.status === 404
      || res.status === 401
      || res.status === 403
      || res.status === 500
      || (res.status >= 200 && res.status <= 300)
    ) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
  return false;
};
