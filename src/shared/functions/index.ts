import { isArrayContains, findMinimumInObjectArray, HTMLCollectionToArray, cloneArray } from './arrayFunctions';
import {
    createElementFromString,
    insertAfter,
    copyToClipboard,
    copyToClipboardFromInput,
} from './DOMManipulationFunctions';
import { addEventListenerOnce, httpHeaders, clamp, safelyRun, once } from './miscellaneousFunctions';
import { openJivo, showJivo, hideJivoIfExists, moveJivoIfExists } from './jivoFunctions';
import { currentUrl, isCurrentUrl } from './currentUrlFunctions';
import { translate } from './translateFunction';

export {
    isArrayContains,
    findMinimumInObjectArray,
    HTMLCollectionToArray,
    cloneArray,
    createElementFromString,
    insertAfter,
    copyToClipboard,
    copyToClipboardFromInput,
    addEventListenerOnce,
    httpHeaders,
    clamp,
    safelyRun,
    openJivo,
    showJivo,
    hideJivoIfExists,
    moveJivoIfExists,
    currentUrl,
    isCurrentUrl,
    translate,
    once,
};
