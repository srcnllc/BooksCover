import React from 'react';

export function getBrowserVisibilityProp() {
  if (process.browser) {
    if (typeof document?.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      return 'visibilitychange';
    } else if (typeof document?.msHidden !== 'undefined') {
      return 'msvisibilitychange';
    } else if (typeof document?.webkitHidden !== 'undefined') {
      return 'webkitvisibilitychange';
    }
  }
}

export function getBrowserDocumentHiddenProp() {
  if (process.browser) {
    if (typeof document?.hidden !== 'undefined') {
      return 'hidden';
    } else if (typeof document?.msHidden !== 'undefined') {
      return 'msHidden';
    } else if (typeof document?.webkitHidden !== 'undefined') {
      return 'webkitHidden';
    }
  }
}

export function getIsDocumentHidden() {
  if (process.browser) {
    return !document[getBrowserDocumentHiddenProp()];
  }
}

export function usePageVisibility() {
  const [isVisible, setIsVisible] = React.useState(getIsDocumentHidden());
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

  React.useEffect(() => {
    if (process.browser) {
      const visibilityChange = getBrowserVisibilityProp();

      document?.addEventListener(visibilityChange, onVisibilityChange, false);

      return () => {
        document?.removeEventListener(visibilityChange, onVisibilityChange);
      };
    }
  });

  return isVisible;
}

export const formatDate = (d) => {
  var utcDate = d;
  var localDate = new Date(utcDate);
  return (
    ('0' + localDate.getHours()).slice(-2) +
    ':' +
    ('0' + localDate.getMinutes()).slice(-2)
  );
};
// export const formatDate = (date) => {
//   const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
//   const localDate = new Date(date);
//   const utcDate = new Date(localDate.getTime() + userOffset);

//   const result = localDate.toLocaleString('en-US', {
//     hour: 'numeric',
//     minute: 'numeric',
//   });

//   return result;
// };

export function justNumbers(string) {
  var numsStr = string.replace(/[^0-9\.]+/g, '');
  return parseInt(numsStr);
}
