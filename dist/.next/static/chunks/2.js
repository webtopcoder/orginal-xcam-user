(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.7.3
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2021 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



//     

                                                               

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

function repeat(str, count) {
  return Array(count + 1).join(str);
}

function toNumericString(num) {
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

  coefficient = coefficient.replace('.', '');

  /**
   * for scientific notation the current decimal index will be after first number (index 0)
   * So effective decimal index will always be 1 + exponent value
   */
  var decimalIndex = 1 + exponent;

  var coffiecientLn = coefficient.length;

  if (decimalIndex < 0) {
    // if decimal index is less then 0 add preceding 0s
    // add 1 as join will have
    coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
    // else add decimal point at proper index
    coefficient =
      (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
  }

  return sign + coefficient;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return (
    format ||
    (typeof navigator !== 'undefined' &&
      !(navigator.platform && /iPhone|iPod/.test(navigator.platform)))
  );
}

//     
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);
    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({ formattedValue: formattedValue, numAsString: numAsString, input: focusedElm });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var customNumerals = ref.customNumerals;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '[0-9' +
        (customNumerals ? customNumerals.join('') : '') +
        ']' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

    if (thousandSeparator === true) {
      thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, '.'];
    }

    return {
      decimalSeparator: decimalSeparator,
      thousandSeparator: thousandSeparator,
      allowedDecimalSeparators: allowedDecimalSeparators,
    };
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(/\d/g) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(/\d/g) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var customNumerals = ref.customNumerals;
    var formattedValue = numStr;

    if (customNumerals && customNumerals.length === 10) {
      var customNumeralRegex = new RegExp('[' + customNumerals.join('') + ']', 'g');
      formattedValue = numStr.replace(customNumeralRegex, function (digit) { return customNumerals.indexOf(digit).toString(); }
      );
    }

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');

    // Check number has '-' value
    var hasNegation = negationRegex.test(value);

    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);

    //remove negation
    value = value.replace(/-/g, '');

    if (hasNegation && !removeNegation && allowNegative) {
      value = '-' + value;
    }

    return value;
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1.isCharacterAFormat(idx + start, lastValue); }
    );

    // if it has, only remove characters that are not part of the format
    if (formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if (this$1.isCharacterAFormat(idx + start, lastValue)) {
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if (resolvedPortion.length > idx) {
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }

    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //calculate caret position if not defined
        if (!caretPos) {
          var inputValue = params.inputValue || input.value;

          var currentCaretPosition = getCurrentCaretPosition(input);

          /**
           * set the value imperatively, this is required for IE fix
           * This is also required as if new caret position is beyond the previous value.
           * Caret position will not be set correctly
           */
          input.value = formattedValue;

          //get the caret position
          caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
        }

        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      } else {
        /**
         * if we are not setting caret position set the value imperatively.
         * This is required on onBlur method
         */
        input.value = formattedValue;
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString));
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({ formattedValue: formattedValue, numAsString: numAsString, inputValue: inputValue, input: el });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var removeFormatting = ref.removeFormatting;
    var mask = ref.mask;
    var defaultValue = ref.defaultValue;
    var isNumericString = ref.isNumericString;
    var allowNegative = ref.allowNegative;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var allowLeadingZeros = ref.allowLeadingZeros;
    var onValueChange = ref.onValueChange;
    var isAllowed = ref.isAllowed;
    var customNumerals = ref.customNumerals;
    var onChange = ref.onChange;
    var onKeyDown = ref.onKeyDown;
    var onMouseUp = ref.onMouseUp;
    var onFocus = ref.onFocus;
    var onBlur = ref.onBlur;
    var propValue = ref.value;
    var rest = objectWithoutProperties( ref, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"] );
    var otherProps = rest;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW51bWJlci1mb3JtYXQvZGlzdC9yZWFjdC1udW1iZXItZm9ybWF0LmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOztBQUUxQjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGFBQWEsd0JBQXdCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDJCQUEyQjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGlCQUFpQixzSEFBc0gsZUFBZTs7QUFFdk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQThFO0FBQ3hHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5S0FBeUssS0FBSztBQUM5Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixVQUFVOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsaUJBQWlCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG9DQUFvQzs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0RBQStELG1CQUFtQixFQUFFO0FBQ3BGO0FBQ0E7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0NBQXdDO0FBQ3pELGlCQUFpQixzQ0FBc0M7O0FBRXZEO0FBQ0Esc0JBQXNCLHFDQUFxQzs7QUFFM0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RSxpREFBaUQ7QUFDN0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsV0FBVzs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLGFBQWE7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUZBQXlGLDBEQUEwRDtBQUNuSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFrRDs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw4RkFBOEY7O0FBRXBIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBSyx3Q0FBd0MsZUFBZSxtQkFBbUI7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSw0Q0FBSyw2Q0FBNkMsZUFBZSxtQkFBbUI7QUFDakc7O0FBRUEsV0FBVyw0Q0FBSyx5Q0FBeUMsZUFBZSxtQkFBbUI7QUFDM0Y7O0FBRUE7QUFDQSxDQUFDLENBQUMsNENBQUs7O0FBRVA7O0FBRWUsMkVBQVksRUFBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQgLSA0LjcuM1xuICogQXV0aG9yIDogU3VkaGFuc2h1IFlhZGF2XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIDIwMjEgdG8gU3VkaGFuc2h1IFlhZGF2LCByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gYmFzaWMgbm9vcCBmdW5jdGlvblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hhcklzTnVtYmVyKGNoYXIgICAgICAgICApIHtcbiAgcmV0dXJuICEhKGNoYXIgfHwgJycpLm1hdGNoKC9cXGQvKTtcbn1cblxuZnVuY3Rpb24gaXNOaWwodmFsICAgICApIHtcbiAgcmV0dXJuIHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0ciAgICAgICAgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaG91c2FuZHNHcm91cFJlZ2V4KHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgICkge1xuICBzd2l0Y2ggKHRob3VzYW5kc0dyb3VwU3R5bGUpIHtcbiAgICBjYXNlICdsYWtoJzpcbiAgICAgIHJldHVybiAvKFxcZCs/KSg/PShcXGRcXGQpKyhcXGQpKD8hXFxkKSkoXFwuXFxkKyk/L2c7XG4gICAgY2FzZSAnd2FuJzpcbiAgICAgIHJldHVybiAvKFxcZCkoPz0oXFxkezR9KSsoPyFcXGQpKS9nO1xuICAgIGNhc2UgJ3Rob3VzYW5kJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaG91c2FuZFNlcGFyYXRvcihcbiAgc3RyICAgICAgICAsXG4gIHRob3VzYW5kU2VwYXJhdG9yICAgICAgICAsXG4gIHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgIFxuKSB7XG4gIHZhciB0aG91c2FuZHNHcm91cFJlZ2V4ID0gZ2V0VGhvdXNhbmRzR3JvdXBSZWdleCh0aG91c2FuZHNHcm91cFN0eWxlKTtcbiAgdmFyIGluZGV4ID0gc3RyLnNlYXJjaCgvWzEtOV0vKTtcbiAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyBzdHIubGVuZ3RoIDogaW5kZXg7XG4gIHJldHVybiAoXG4gICAgc3RyLnN1YnN0cmluZygwLCBpbmRleCkgK1xuICAgIHN0ci5zdWJzdHJpbmcoaW5kZXgsIHN0ci5sZW5ndGgpLnJlcGxhY2UodGhvdXNhbmRzR3JvdXBSZWdleCwgJyQxJyArIHRob3VzYW5kU2VwYXJhdG9yKVxuICApO1xufVxuXG4vL3NwaWx0IGEgZmxvYXQgbnVtYmVyIGludG8gZGlmZmVyZW50IHBhcnRzIGJlZm9yZURlY2ltYWwsIGFmdGVyRGVjaW1hbCwgYW5kIG5lZ2F0aW9uXG5mdW5jdGlvbiBzcGxpdERlY2ltYWwobnVtU3RyICAgICAgICAsIGFsbG93TmVnYXRpdmUpIHtcbiAgaWYgKCBhbGxvd05lZ2F0aXZlID09PSB2b2lkIDAgKSBhbGxvd05lZ2F0aXZlICAgICAgICAgID0gdHJ1ZTtcblxuICB2YXIgaGFzTmFnYXRpb24gPSBudW1TdHJbMF0gPT09ICctJztcbiAgdmFyIGFkZE5lZ2F0aW9uID0gaGFzTmFnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZTtcbiAgbnVtU3RyID0gbnVtU3RyLnJlcGxhY2UoJy0nLCAnJyk7XG5cbiAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcGFydHNbMF07XG4gIHZhciBhZnRlckRlY2ltYWwgPSBwYXJ0c1sxXSB8fCAnJztcblxuICByZXR1cm4ge1xuICAgIGJlZm9yZURlY2ltYWw6IGJlZm9yZURlY2ltYWwsXG4gICAgYWZ0ZXJEZWNpbWFsOiBhZnRlckRlY2ltYWwsXG4gICAgaGFzTmFnYXRpb246IGhhc05hZ2F0aW9uLFxuICAgIGFkZE5lZ2F0aW9uOiBhZGROZWdhdGlvbixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZml4TGVhZGluZ1plcm8obnVtU3RyICAgICAgICAgKSB7XG4gIGlmICghbnVtU3RyKSB7IHJldHVybiBudW1TdHI7IH1cbiAgdmFyIGlzTmVnYXRpdmUgPSBudW1TdHJbMF0gPT09ICctJztcbiAgaWYgKGlzTmVnYXRpdmUpIHsgbnVtU3RyID0gbnVtU3RyLnN1YnN0cmluZygxLCBudW1TdHIubGVuZ3RoKTsgfVxuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXS5yZXBsYWNlKC9eMCsvLCAnJykgfHwgJzAnO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcGFydHNbMV0gfHwgJyc7XG5cbiAgcmV0dXJuIChcIlwiICsgKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBiZWZvcmVEZWNpbWFsICsgKGFmdGVyRGVjaW1hbCA/IChcIi5cIiArIGFmdGVyRGVjaW1hbCkgOiAnJykpO1xufVxuXG4vKipcbiAqIGxpbWl0IGRlY2ltYWwgbnVtYmVycyB0byBnaXZlbiBzY2FsZVxuICogTm90IHVzZWQgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiBsaW1pdFRvU2NhbGUobnVtU3RyICAgICAgICAsIHNjYWxlICAgICAgICAsIGZpeGVkRGVjaW1hbFNjYWxlICAgICAgICAgKSB7XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIGZpbGxlciA9IGZpeGVkRGVjaW1hbFNjYWxlID8gJzAnIDogJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHNjYWxlIC0gMTsgaSsrKSB7XG4gICAgc3RyICs9IG51bVN0cltpXSB8fCBmaWxsZXI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgY291bnQpIHtcbiAgcmV0dXJuIEFycmF5KGNvdW50ICsgMSkuam9pbihzdHIpO1xufVxuXG5mdW5jdGlvbiB0b051bWVyaWNTdHJpbmcobnVtKSB7XG4gIG51bSArPSAnJzsgLy8gdHlwZWNhc3QgbnVtYmVyIHRvIHN0cmluZ1xuXG4gIC8vIHN0b3JlIHRoZSBzaWduIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgbnVtYmVyLlxuICB2YXIgc2lnbiA9IG51bVswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gIGlmIChzaWduKSB7IG51bSA9IG51bS5zdWJzdHJpbmcoMSk7IH1cblxuICAvLyBzcGxpdCB0aGUgbnVtYmVyIGludG8gY29mZmljaWVudCBhbmQgZXhwb25lbnRcbiAgdmFyIHJlZiA9IG51bS5zcGxpdCgvW2VFXS9nKTtcbiAgdmFyIGNvZWZmaWNpZW50ID0gcmVmWzBdO1xuICB2YXIgZXhwb25lbnQgPSByZWZbMV07XG5cbiAgLy8gY292ZXJ0IGV4cG9uZW50IHRvIG51bWJlcjtcbiAgZXhwb25lbnQgPSBOdW1iZXIoZXhwb25lbnQpO1xuXG4gIC8vIGlmIHRoZXJlIGlzIG5vIGV4cG9uZW50IHBhcnQgb3IgaXRzIDAsIHJldHVybiB0aGUgY29mZmllY2llbnQgd2l0aCBzaWduXG4gIGlmICghZXhwb25lbnQpIHsgcmV0dXJuIHNpZ24gKyBjb2VmZmljaWVudDsgfVxuXG4gIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQucmVwbGFjZSgnLicsICcnKTtcblxuICAvKipcbiAgICogZm9yIHNjaWVudGlmaWMgbm90YXRpb24gdGhlIGN1cnJlbnQgZGVjaW1hbCBpbmRleCB3aWxsIGJlIGFmdGVyIGZpcnN0IG51bWJlciAoaW5kZXggMClcbiAgICogU28gZWZmZWN0aXZlIGRlY2ltYWwgaW5kZXggd2lsbCBhbHdheXMgYmUgMSArIGV4cG9uZW50IHZhbHVlXG4gICAqL1xuICB2YXIgZGVjaW1hbEluZGV4ID0gMSArIGV4cG9uZW50O1xuXG4gIHZhciBjb2ZmaWVjaWVudExuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuXG4gIGlmIChkZWNpbWFsSW5kZXggPCAwKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgcHJlY2VkaW5nIDBzXG4gICAgLy8gYWRkIDEgYXMgam9pbiB3aWxsIGhhdmVcbiAgICBjb2VmZmljaWVudCA9ICcwLicgKyByZXBlYXQoJzAnLCBNYXRoLmFicyhkZWNpbWFsSW5kZXgpKSArIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGRlY2ltYWxJbmRleCA+PSBjb2ZmaWVjaWVudExuKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgbGVhZGluZyAwc1xuICAgIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQgKyByZXBlYXQoJzAnLCBkZWNpbWFsSW5kZXggLSBjb2ZmaWVjaWVudExuKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGFkZCBkZWNpbWFsIHBvaW50IGF0IHByb3BlciBpbmRleFxuICAgIGNvZWZmaWNpZW50ID1cbiAgICAgIChjb2VmZmljaWVudC5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KSB8fCAnMCcpICsgJy4nICsgY29lZmZpY2llbnQuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCk7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIGNvZWZmaWNpZW50O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHJlcXVpcmVkIHRvIHJvdW5kIHByb3AgdmFsdWUgdG8gZ2l2ZW4gc2NhbGUuXG4gKiBOb3QgdXNlZCAucm91bmQgb3IgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiByb3VuZFRvUHJlY2lzaW9uKG51bVN0ciAgICAgICAgLCBzY2FsZSAgICAgICAgLCBmaXhlZERlY2ltYWxTY2FsZSAgICAgICAgICkge1xuICAvL2lmIG51bWJlciBpcyBlbXB0eSBkb24ndCBkbyBhbnl0aGluZyByZXR1cm4gZW1wdHkgc3RyaW5nXG4gIGlmIChbJycsICctJ10uaW5kZXhPZihudW1TdHIpICE9PSAtMSkgeyByZXR1cm4gbnVtU3RyOyB9XG5cbiAgdmFyIHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSAmJiBzY2FsZTtcbiAgdmFyIHJlZiA9IHNwbGl0RGVjaW1hbChudW1TdHIpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZi5iZWZvcmVEZWNpbWFsO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmLmFmdGVyRGVjaW1hbDtcbiAgdmFyIGhhc05hZ2F0aW9uID0gcmVmLmhhc05hZ2F0aW9uO1xuICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQoKFwiMC5cIiArIChhZnRlckRlY2ltYWwgfHwgJzAnKSkpO1xuICB2YXIgZmxvYXRWYWx1ZVN0ciA9XG4gICAgYWZ0ZXJEZWNpbWFsLmxlbmd0aCA8PSBzY2FsZSA/IChcIjAuXCIgKyBhZnRlckRlY2ltYWwpIDogZmxvYXRWYWx1ZS50b0ZpeGVkKHNjYWxlKTtcbiAgdmFyIHJvdW5kZWREZWNpbWFsUGFydHMgPSBmbG9hdFZhbHVlU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBpbnRQYXJ0ID0gYmVmb3JlRGVjaW1hbFxuICAgIC5zcGxpdCgnJylcbiAgICAucmV2ZXJzZSgpXG4gICAgLnJlZHVjZShmdW5jdGlvbiAocm91bmRlZFN0ciwgY3VycmVudCwgaWR4KSB7XG4gICAgICBpZiAocm91bmRlZFN0ci5sZW5ndGggPiBpZHgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoTnVtYmVyKHJvdW5kZWRTdHJbMF0pICsgTnVtYmVyKGN1cnJlbnQpKS50b1N0cmluZygpICtcbiAgICAgICAgICByb3VuZGVkU3RyLnN1YnN0cmluZygxLCByb3VuZGVkU3RyLmxlbmd0aClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50ICsgcm91bmRlZFN0cjtcbiAgICB9LCByb3VuZGVkRGVjaW1hbFBhcnRzWzBdKTtcblxuICB2YXIgZGVjaW1hbFBhcnQgPSBsaW1pdFRvU2NhbGUoXG4gICAgcm91bmRlZERlY2ltYWxQYXJ0c1sxXSB8fCAnJyxcbiAgICBNYXRoLm1pbihzY2FsZSwgYWZ0ZXJEZWNpbWFsLmxlbmd0aCksXG4gICAgZml4ZWREZWNpbWFsU2NhbGVcbiAgKTtcbiAgdmFyIG5lZ2F0aW9uID0gaGFzTmFnYXRpb24gPyAnLScgOiAnJztcbiAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID8gJy4nIDogJyc7XG4gIHJldHVybiAoXCJcIiArIG5lZ2F0aW9uICsgaW50UGFydCArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFsUGFydCk7XG59XG5cbi8qKiBzZXQgdGhlIGNhcmV0IHBvc2l0b24gaW4gYW4gaW5wdXQgZmllbGQgKiovXG5mdW5jdGlvbiBzZXRDYXJldFBvc2l0aW9uKGVsICAgICAgICAgICAgICAgICAgLCBjYXJldFBvcyAgICAgICAgKSB7XG4gIGVsLnZhbHVlID0gZWwudmFsdWU7XG4gIC8vIF4gdGhpcyBpcyB1c2VkIHRvIG5vdCBvbmx5IGdldCAnZm9jdXMnLCBidXRcbiAgLy8gdG8gbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgaXQgZXZlcnl0aGluZyAtc2VsZWN0ZWQtXG4gIC8vIChpdCBjYXVzZXMgYW4gaXNzdWUgaW4gY2hyb21lLCBhbmQgaGF2aW5nIGl0IGRvZXNuJ3QgaHVydCBhbnkgb3RoZXIgYnJvd3NlcilcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgaWYgKGVsLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgdmFyIHJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBjYXJldFBvcyk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyAoZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgYWRkZWQgZm9yIEZpcmVmb3ggYnVnKVxuICAgIGlmIChlbC5zZWxlY3Rpb25TdGFydCB8fCBlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKGNhcmV0UG9zLCBjYXJldFBvcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWlsIGNpdHksIGZvcnR1bmF0ZWx5IHRoaXMgbmV2ZXIgaGFwcGVucyAoYXMgZmFyIGFzIEkndmUgdGVzdGVkKSA6KVxuICAgIGVsLmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICBHaXZlbiBwcmV2aW91cyB2YWx1ZSBhbmQgbmV3VmFsdWUgaXQgcmV0dXJucyB0aGUgaW5kZXhcbiAgc3RhcnQgLSBlbmQgdG8gd2hpY2ggdmFsdWVzIGhhdmUgY2hhbmdlZC5cbiAgVGhpcyBmdW5jdGlvbiBtYWtlcyBhc3N1bXB0aW9uIGFib3V0IG9ubHkgY29uc2VjdXRpdmVcbiAgY2hhcmFjdGVycyBhcmUgY2hhbmdlZCB3aGljaCBpcyBjb3JyZWN0IGFzc3VtcHRpb24gZm9yIGNhcmV0IGlucHV0LlxuKi9cbmZ1bmN0aW9uIGZpbmRDaGFuZ2VkSW5kZXgocHJldlZhbHVlICAgICAgICAsIG5ld1ZhbHVlICAgICAgICApIHtcbiAgdmFyIGkgPSAwLFxuICAgIGogPSAwO1xuICB2YXIgcHJldkxlbmd0aCA9IHByZXZWYWx1ZS5sZW5ndGg7XG4gIHZhciBuZXdMZW5ndGggPSBuZXdWYWx1ZS5sZW5ndGg7XG4gIHdoaWxlIChwcmV2VmFsdWVbaV0gPT09IG5ld1ZhbHVlW2ldICYmIGkgPCBwcmV2TGVuZ3RoKSB7IGkrKzsgfVxuXG4gIC8vY2hlY2sgd2hhdCBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gbGFzdFxuICB3aGlsZSAoXG4gICAgcHJldlZhbHVlW3ByZXZMZW5ndGggLSAxIC0gal0gPT09IG5ld1ZhbHVlW25ld0xlbmd0aCAtIDEgLSBqXSAmJlxuICAgIG5ld0xlbmd0aCAtIGogPiBpICYmXG4gICAgcHJldkxlbmd0aCAtIGogPiBpXG4gICkge1xuICAgIGorKztcbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0OiBpLCBlbmQ6IHByZXZMZW5ndGggLSBqIH07XG59XG5cbi8qXG4gIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2VcbiovXG5mdW5jdGlvbiBjbGFtcChudW0gICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsICAgICAgICAgICAgICAgICAgKSB7XG4gIC8qTWF4IG9mIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgaXMgdGFrZW4gZm9yIHRoZSBwYXRjaCBvZiBwaXhlbCBhbmQgb3RoZXIgbW9iaWxlIGRldmljZSBjYXJldCBidWcqL1xuICByZXR1cm4gTWF0aC5tYXgoZWwuc2VsZWN0aW9uU3RhcnQsIGVsLnNlbGVjdGlvbkVuZCk7XG59XG5cbmZ1bmN0aW9uIGFkZElucHV0TW9kZShmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICByZXR1cm4gKFxuICAgIGZvcm1hdCB8fFxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgIShuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpKVxuICApO1xufVxuXG4vLyAgICAgXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheVR5cGU6ICdpbnB1dCcsXG4gIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgdGhvdXNhbmRzR3JvdXBTdHlsZTogJ3Rob3VzYW5kJyxcbiAgZml4ZWREZWNpbWFsU2NhbGU6IGZhbHNlLFxuICBwcmVmaXg6ICcnLFxuICBzdWZmaXg6ICcnLFxuICBhbGxvd05lZ2F0aXZlOiB0cnVlLFxuICBhbGxvd0VtcHR5Rm9ybWF0dGluZzogZmFsc2UsXG4gIGFsbG93TGVhZGluZ1plcm9zOiBmYWxzZSxcbiAgaXNOdW1lcmljU3RyaW5nOiBmYWxzZSxcbiAgdHlwZTogJ3RleHQnLFxuICBvblZhbHVlQ2hhbmdlOiBub29wLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25LZXlEb3duOiBub29wLFxuICBvbk1vdXNlVXA6IG5vb3AsXG4gIG9uRm9jdXM6IG5vb3AsXG4gIG9uQmx1cjogbm9vcCxcbiAgaXNBbGxvd2VkOiByZXR1cm5UcnVlLFxufTtcbnZhciBOdW1iZXJGb3JtYXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChzdXBlcmNsYXNzKSB7XG4gIGZ1bmN0aW9uIE51bWJlckZvcm1hdChwcm9wcyAgICAgICAgKSB7XG4gICAgc3VwZXJjbGFzcy5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZVByb3AoZGVmYXVsdFZhbHVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICBudW1Bc1N0cmluZzogdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKSxcbiAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0ID0ge1xuICAgICAgc2VsZWN0aW9uU3RhcnQ6IDAsXG4gICAgICBzZWxlY3Rpb25FbmQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBpZiAoIHN1cGVyY2xhc3MgKSBOdW1iZXJGb3JtYXQuX19wcm90b19fID0gc3VwZXJjbGFzcztcbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIHN1cGVyY2xhc3MgJiYgc3VwZXJjbGFzcy5wcm90b3R5cGUgKTtcbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlckZvcm1hdDtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIHNldCBtb3VudGVkIHN0YXRlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcyAgICAgICAgKSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUlmUmVxdWlyZWQocHJldlByb3BzKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FyZXRQb3NpdGlvblRpbWVvdXQpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudXBkYXRlVmFsdWVJZlJlcXVpcmVkID0gZnVuY3Rpb24gdXBkYXRlVmFsdWVJZlJlcXVpcmVkIChwcmV2UHJvcHMgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSByZWYuc3RhdGU7XG4gICAgdmFyIGZvY3VzZWRFbG0gPSByZWYuZm9jdXNlZEVsbTtcbiAgICB2YXIgc3RhdGVWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBsYXN0TnVtU3RyID0gc3RhdGUubnVtQXNTdHJpbmc7IGlmICggbGFzdE51bVN0ciA9PT0gdm9pZCAwICkgbGFzdE51bVN0ciA9ICcnO1xuXG4gICAgLy8gSWYgb25seSBzdGF0ZSBjaGFuZ2VkIG5vIG5lZWQgdG8gZG8gYW55IHRoaW5nXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gcHJvcHMpIHtcbiAgICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgICB2YXIgbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKGxhc3ROdW1TdHIpO1xuXG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpc05pbChwcm9wcy52YWx1ZSkgPyBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0IDogdGhpcy5mb3JtYXRWYWx1ZVByb3AoKTtcbiAgICAgIHZhciBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdChudW1Bc1N0cmluZyk7XG4gICAgICB2YXIgbGFzdEZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KGxhc3ROdW1TdHIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIC8vd2hpbGUgdHlwaW5nIHNldCBzdGF0ZSBvbmx5IHdoZW4gZmxvYXQgdmFsdWUgY2hhbmdlc1xuICAgICAgICAoKCFpc05hTihmbG9hdFZhbHVlKSB8fCAhaXNOYU4obGFzdEZsb2F0VmFsdWUpKSAmJiBmbG9hdFZhbHVlICE9PSBsYXN0RmxvYXRWYWx1ZSkgfHxcbiAgICAgICAgLy9jYW4gYWxzbyBzZXQgc3RhdGUgd2hlbiBmbG9hdCB2YWx1ZSBpcyBzYW1lIGFuZCB0aGUgZm9ybWF0IHByb3BzIGNoYW5nZXNcbiAgICAgICAgbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCAhPT0gc3RhdGVWYWx1ZSB8fFxuICAgICAgICAvL3NldCBzdGF0ZSBhbHdheXMgd2hlbiBub3QgaW4gZm9jdXMgYW5kIGZvcm1hdHRlZCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgICAgIChmb2N1c2VkRWxtID09PSBudWxsICYmIGZvcm1hdHRlZFZhbHVlICE9PSBzdGF0ZVZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoeyBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZywgaW5wdXQ6IGZvY3VzZWRFbG0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBNaXNjIG1ldGhvZHMgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0RmxvYXRTdHJpbmcgPSBmdW5jdGlvbiBnZXRGbG9hdFN0cmluZyAobnVtKSB7XG4gICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bSAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcblxuICAgIC8vcmVtb3ZlIG5lZ2F0aW9uIGZvciByZWdleCBjaGVja1xuICAgIHZhciBoYXNOZWdhdGlvbiA9IG51bVswXSA9PT0gJy0nO1xuICAgIGlmIChoYXNOZWdhdGlvbikgeyBudW0gPSBudW0ucmVwbGFjZSgnLScsICcnKTsgfVxuXG4gICAgLy9pZiBkZWNpbWFsIHNjYWxlIGlzIHplcm8gcmVtb3ZlIGRlY2ltYWwgYW5kIG51bWJlciBhZnRlciBkZWNpbWFsU2VwYXJhdG9yXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNjYWxlID09PSAwKSB7XG4gICAgICBudW0gPSBudW0uc3BsaXQoZGVjaW1hbFNlcGFyYXRvcilbMF07XG4gICAgfVxuXG4gICAgbnVtID0gKG51bS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpLnJlcGxhY2UoZGVjaW1hbFNlcGFyYXRvciwgJy4nKTtcblxuICAgIC8vcmVtb3ZlIGV4dHJhIGRlY2ltYWxzXG4gICAgdmFyIGZpcnN0RGVjaW1hbEluZGV4ID0gbnVtLmluZGV4T2YoJy4nKTtcblxuICAgIGlmIChmaXJzdERlY2ltYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIG51bSA9IChudW0uc3Vic3RyaW5nKDAsIGZpcnN0RGVjaW1hbEluZGV4KSkgKyBcIi5cIiArIChudW1cbiAgICAgICAgLnN1YnN0cmluZyhmaXJzdERlY2ltYWxJbmRleCArIDEsIG51bS5sZW5ndGgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpLCAnZycpLCAnJykpO1xuICAgIH1cblxuICAgIC8vYWRkIG5lZ2F0aW9uIGJhY2tcbiAgICBpZiAoaGFzTmVnYXRpb24pIHsgbnVtID0gJy0nICsgbnVtOyB9XG5cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIC8vcmV0dXJuZWQgcmVnZXggYXNzdW1lcyBkZWNpbWFsU2VwYXJhdG9yIGlzIGFzIHBlciBwcm9wXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0TnVtYmVyUmVnZXggPSBmdW5jdGlvbiBnZXROdW1iZXJSZWdleCAoZyAgICAgICAgICwgaWdub3JlRGVjaW1hbFNlcGFyYXRvciAgICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgY3VzdG9tTnVtZXJhbHMgPSByZWYuY3VzdG9tTnVtZXJhbHM7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ1swLTknICtcbiAgICAgICAgKGN1c3RvbU51bWVyYWxzID8gY3VzdG9tTnVtZXJhbHMuam9pbignJykgOiAnJykgK1xuICAgICAgICAnXScgK1xuICAgICAgICAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgIT09IDAgJiYgIWlnbm9yZURlY2ltYWxTZXBhcmF0b3IgJiYgIWZvcm1hdFxuICAgICAgICAgID8gJ3wnICsgZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpXG4gICAgICAgICAgOiAnJyksXG4gICAgICBnID8gJ2cnIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldFNlcGFyYXRvcnMgPSBmdW5jdGlvbiBnZXRTZXBhcmF0b3JzICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZi5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciByZWYkMSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmJDEudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IHJlZiQxLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcblxuICAgIGlmICh0aG91c2FuZFNlcGFyYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgdGhvdXNhbmRTZXBhcmF0b3IgPSAnLCc7XG4gICAgfVxuICAgIGlmICghYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzKSB7XG4gICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSBbZGVjaW1hbFNlcGFyYXRvciwgJy4nXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiB0aG91c2FuZFNlcGFyYXRvcixcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9yczogYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzLFxuICAgIH07XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRNYXNrQXRJbmRleCA9IGZ1bmN0aW9uIGdldE1hc2tBdEluZGV4IChpbmRleCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1hc2sgPSByZWYubWFzazsgaWYgKCBtYXNrID09PSB2b2lkIDAgKSBtYXNrID0gJyAnO1xuICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBtYXNrW2luZGV4XSB8fCAnICc7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5nZXRWYWx1ZU9iamVjdCA9IGZ1bmN0aW9uIGdldFZhbHVlT2JqZWN0IChmb3JtYXR0ZWRWYWx1ZSAgICAgICAgLCBudW1Bc1N0cmluZyAgICAgICAgKSB7XG4gICAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KG51bUFzU3RyaW5nKTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICB2YWx1ZTogbnVtQXNTdHJpbmcsXG4gICAgICBmbG9hdFZhbHVlOiBpc05hTihmbG9hdFZhbHVlKSA/IHVuZGVmaW5lZCA6IGZsb2F0VmFsdWUsXG4gICAgfTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnZhbGlkYXRlUHJvcHMgPSBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgbWFzayA9IHJlZi5tYXNrO1xuXG4gICAgLy92YWxpZGF0ZSBkZWNpbWFsU2VwYXJhdG9yIGFuZCB0aG91c2FuZFNlcGFyYXRvclxuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcblxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yID09PSB0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKChcIlxcbiAgICAgICAgICBEZWNpbWFsIHNlcGFyYXRvciBjYW4ndCBiZSBzYW1lIGFzIHRob3VzYW5kIHNlcGFyYXRvci5cXG4gICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IFwiICsgdGhvdXNhbmRTZXBhcmF0b3IgKyBcIiAodGhvdXNhbmRTZXBhcmF0b3IgPSB7dHJ1ZX0gaXMgc2FtZSBhcyB0aG91c2FuZFNlcGFyYXRvciA9IFxcXCIsXFxcIilcXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogXCIgKyBkZWNpbWFsU2VwYXJhdG9yICsgXCIgKGRlZmF1bHQgdmFsdWUgZm9yIGRlY2ltYWxTZXBhcmF0b3IgaXMgLilcXG4gICAgICAgXCIpKTtcbiAgICB9XG5cbiAgICAvL3ZhbGlkYXRlIG1hc2tcbiAgICBpZiAobWFzaykge1xuICAgICAgdmFyIG1hc2tBc1N0ciA9IG1hc2sgPT09ICdzdHJpbmcnID8gbWFzayA6IG1hc2sudG9TdHJpbmcoKTtcbiAgICAgIGlmIChtYXNrQXNTdHIubWF0Y2goL1xcZC9nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiXFxuICAgICAgICAgIE1hc2sgXCIgKyBtYXNrICsgXCIgc2hvdWxkIG5vdCBjb250YWluIG51bWVyaWMgY2hhcmFjdGVyO1xcbiAgICAgICAgXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qKiBNaXNjIG1ldGhvZHMgZW5kICoqL1xuXG4gIC8qKiBjYXJldCBzcGVjaWZpYyBtZXRob2RzICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24gc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24gKGVsICAgICAgICAgICAgICAgICAgLCBjYXJldFBvcyAgICAgICAgLCBjdXJyZW50VmFsdWUgICAgICAgICkge1xuICAgIC8qIHNldHRpbmcgY2FyZXQgcG9zaXRpb24gd2l0aGluIHRpbWVvdXQgb2YgMG1zIGlzIHJlcXVpcmVkIGZvciBtb2JpbGUgY2hyb21lLFxuICAgIG90aGVyd2lzZSBicm93c2VyIHJlc2V0cyB0aGUgY2FyZXQgcG9zaXRpb24gYWZ0ZXIgd2Ugc2V0IGl0XG4gICAgV2UgYXJlIGFsc28gc2V0dGluZyBpdCB3aXRob3V0IHRpbWVvdXQgc28gdGhhdCBpbiBub3JtYWwgYnJvd3NlciB3ZSBkb24ndCBzZWUgdGhlIGZsaWNrZXJpbmcgKi9cbiAgICBzZXRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcyk7XG4gICAgdGhpcy5jYXJldFBvc2l0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsLnZhbHVlID09PSBjdXJyZW50VmFsdWUpIHsgc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpOyB9XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLyogVGhpcyBrZWVwcyB0aGUgY2FyZXQgd2l0aGluIHR5cGluZyBhcmVhIHNvIHBlb3BsZSBjYW4ndCB0eXBlIGluIGJldHdlZW4gcHJlZml4IG9yIHN1ZmZpeCAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvcnJlY3RDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24gY29ycmVjdENhcmV0UG9zaXRpb24gKHZhbHVlICAgICAgICAsIGNhcmV0UG9zICAgICAgICAsIGRpcmVjdGlvbiAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuXG4gICAgLy9pZiB2YWx1ZSBpcyBlbXB0eSByZXR1cm4gMFxuICAgIGlmICh2YWx1ZSA9PT0gJycpIHsgcmV0dXJuIDA7IH1cblxuICAgIC8vY2FyZXQgcG9zaXRpb24gc2hvdWxkIGJlIGJldHdlZW4gMCBhbmQgdmFsdWUgbGVuZ3RoXG4gICAgY2FyZXRQb3MgPSBjbGFtcChjYXJldFBvcywgMCwgdmFsdWUubGVuZ3RoKTtcblxuICAgIC8vaW4gY2FzZSBvZiBmb3JtYXQgYXMgbnVtYmVyIGxpbWl0IGJldHdlZW4gcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFyIGhhc05lZ2F0aW9uID0gdmFsdWVbMF0gPT09ICctJztcbiAgICAgIHJldHVybiBjbGFtcChjYXJldFBvcywgcHJlZml4Lmxlbmd0aCArIChoYXNOZWdhdGlvbiA/IDEgOiAwKSwgdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy9pbiBjYXNlIGlmIGN1c3RvbSBmb3JtYXQgbWV0aG9kIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGNhcmV0UG9zOyB9XG5cbiAgICAvKiBpbiBjYXNlIGZvcm1hdCBpcyBzdHJpbmcgZmluZCB0aGUgY2xvc2VzdCAjIHBvc2l0aW9uIGZyb20gdGhlIGNhcmV0IHBvc2l0aW9uICovXG5cbiAgICAvL2luIGNhc2UgdGhlIGNhcmV0UG9zIGhhdmUgaW5wdXQgdmFsdWUgb24gaXQgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoZm9ybWF0W2NhcmV0UG9zXSA9PT0gJyMnICYmIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldFBvc10pKSB7XG4gICAgICByZXR1cm4gY2FyZXRQb3M7XG4gICAgfVxuXG4gICAgLy9pZiBjYXJldFBvcyBpcyBqdXN0IGFmdGVyIGlucHV0IHZhbHVlIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKGZvcm1hdFtjYXJldFBvcyAtIDFdID09PSAnIycgJiYgY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UG9zIC0gMV0pKSB7XG4gICAgICByZXR1cm4gY2FyZXRQb3M7XG4gICAgfVxuXG4gICAgLy9maW5kIHRoZSBuZWFyZXN0IGNhcmV0IHBvc2l0aW9uXG4gICAgdmFyIGZpcnN0SGFzaFBvc2l0aW9uID0gZm9ybWF0LmluZGV4T2YoJyMnKTtcbiAgICB2YXIgbGFzdEhhc2hQb3NpdGlvbiA9IGZvcm1hdC5sYXN0SW5kZXhPZignIycpO1xuXG4gICAgLy9saW1pdCB0aGUgY3Vyc29yIGJldHdlZW4gdGhlIGZpcnN0ICMgcG9zaXRpb24gYW5kIHRoZSBsYXN0ICMgcG9zaXRpb25cbiAgICBjYXJldFBvcyA9IGNsYW1wKGNhcmV0UG9zLCBmaXJzdEhhc2hQb3NpdGlvbiwgbGFzdEhhc2hQb3NpdGlvbiArIDEpO1xuXG4gICAgdmFyIG5leHRQb3MgPSBmb3JtYXQuc3Vic3RyaW5nKGNhcmV0UG9zLCBmb3JtYXQubGVuZ3RoKS5pbmRleE9mKCcjJyk7XG4gICAgdmFyIGNhcmV0TGVmdEJvdW5kID0gY2FyZXRQb3M7XG4gICAgdmFyIGNhcmV0UmlnaHRCb3VuZCA9IGNhcmV0UG9zICsgKG5leHRQb3MgPT09IC0xID8gMCA6IG5leHRQb3MpO1xuXG4gICAgLy9nZXQgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBsYXN0IG51bWJlciBpcyBwcmVzZW50XG4gICAgd2hpbGUgKFxuICAgICAgY2FyZXRMZWZ0Qm91bmQgPiBmaXJzdEhhc2hQb3NpdGlvbiAmJlxuICAgICAgKGZvcm1hdFtjYXJldExlZnRCb3VuZF0gIT09ICcjJyB8fCAhY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkpXG4gICAgKSB7XG4gICAgICBjYXJldExlZnRCb3VuZCAtPSAxO1xuICAgIH1cblxuICAgIHZhciBnb1RvTGVmdCA9XG4gICAgICAhY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UmlnaHRCb3VuZF0pIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY2FyZXRQb3MgIT09IGZpcnN0SGFzaFBvc2l0aW9uKSB8fFxuICAgICAgY2FyZXRQb3MgLSBjYXJldExlZnRCb3VuZCA8IGNhcmV0UmlnaHRCb3VuZCAtIGNhcmV0UG9zO1xuXG4gICAgaWYgKGdvVG9MZWZ0KSB7XG4gICAgICAvL2NoZWNrIGlmIG51bWJlciBzaG91bGQgYmUgdGFrZW4gYWZ0ZXIgdGhlIGJvdW5kIG9yIGFmdGVyIGl0XG4gICAgICAvL2lmIG51bWJlciBwcmVjZWRpbmcgYSB2YWxpZCBudW1iZXIga2VlcCBpdCBhZnRlclxuICAgICAgcmV0dXJuIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldExlZnRCb3VuZF0pID8gY2FyZXRMZWZ0Qm91bmQgKyAxIDogY2FyZXRMZWZ0Qm91bmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmV0UmlnaHRCb3VuZDtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRDYXJldFBvc2l0aW9uIChpbnB1dFZhbHVlICAgICAgICAsIGZvcm1hdHRlZFZhbHVlICAgICAgICAsIGNhcmV0UG9zICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgc3RhdGVWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcbiAgICB2YXIgaW5wdXROdW1iZXIgPSAoaW5wdXRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSAoZm9ybWF0dGVkVmFsdWUubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKTtcbiAgICB2YXIgaiwgaTtcblxuICAgIGogPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNhcmV0UG9zOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50SW5wdXRDaGFyID0gaW5wdXRWYWx1ZVtpXSB8fCAnJztcbiAgICAgIHZhciBjdXJyZW50Rm9ybWF0Q2hhciA9IGZvcm1hdHRlZFZhbHVlW2pdIHx8ICcnO1xuICAgICAgLy9ubyBuZWVkIHRvIGluY3JlYXNlIG5ldyBjdXJzb3IgcG9zaXRpb24gaWYgZm9ybWF0dGVkIHZhbHVlIGRvZXMgbm90IGhhdmUgdGhvc2UgY2hhcmFjdGVyc1xuICAgICAgLy9jYXNlIGlucHV0VmFsdWUgPSAxYTIzIGFuZCBmb3JtYXR0ZWRWYWx1ZSA9ICAxMjNcbiAgICAgIGlmICghY3VycmVudElucHV0Q2hhci5tYXRjaChudW1SZWdleCkgJiYgY3VycmVudElucHV0Q2hhciAhPT0gY3VycmVudEZvcm1hdENoYXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vV2hlbiB3ZSBhcmUgc3RyaXBpbmcgb3V0IGxlYWRpbmcgemVyb3MgbWFpbnRhaW4gdGhlIG5ldyBjdXJzb3IgcG9zaXRpb25cbiAgICAgIC8vQ2FzZSBpbnB1dFZhbHVlID0gMDAwMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gMjM7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRJbnB1dENoYXIgPT09ICcwJyAmJlxuICAgICAgICBjdXJyZW50Rm9ybWF0Q2hhci5tYXRjaChudW1SZWdleCkgJiZcbiAgICAgICAgY3VycmVudEZvcm1hdENoYXIgIT09ICcwJyAmJlxuICAgICAgICBpbnB1dE51bWJlci5sZW5ndGggIT09IGZvcm1hdHRlZE51bWJlci5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy93ZSBhcmUgbm90IHVzaW5nIGN1cnJlbnRGb3JtYXRDaGFyIGJlY2F1c2UgaiBjYW4gY2hhbmdlIGhlcmVcbiAgICAgIHdoaWxlIChjdXJyZW50SW5wdXRDaGFyICE9PSBmb3JtYXR0ZWRWYWx1ZVtqXSAmJiBqIDwgZm9ybWF0dGVkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGorKztcbiAgICAgIH1cbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycgJiYgIXN0YXRlVmFsdWUpIHtcbiAgICAgIC8vc2V0IGl0IHRvIHRoZSBtYXhpbXVtIHZhbHVlIHNvIGl0IGdvZXMgYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyXG4gICAgICBqID0gZm9ybWF0dGVkVmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vY29ycmVjdCBjYXJldCBwb3NpdGlvbiBpZiBpdHMgb3V0c2lkZSBvZiBlZGl0YWJsZSBhcmVhXG4gICAgaiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24oZm9ybWF0dGVkVmFsdWUsIGopO1xuXG4gICAgcmV0dXJuIGo7XG4gIH07XG4gIC8qKiBjYXJldCBzcGVjaWZpYyBtZXRob2RzIGVuZHMgKiovXG5cbiAgLyoqIG1ldGhvZHMgdG8gcmVtb3ZlIGZvcm1hdHR0aW5nICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCA9IGZ1bmN0aW9uIHJlbW92ZVByZWZpeEFuZFN1ZmZpeCAodmFsICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcblxuICAgIC8vcmVtb3ZlIHByZWZpeCBhbmQgc3VmZml4XG4gICAgaWYgKCFmb3JtYXQgJiYgdmFsKSB7XG4gICAgICB2YXIgaXNOZWdhdGl2ZSA9IHZhbFswXSA9PT0gJy0nO1xuXG4gICAgICAvL3JlbW92ZSBuZWdhdGlvbiBzaWduXG4gICAgICBpZiAoaXNOZWdhdGl2ZSkgeyB2YWwgPSB2YWwuc3Vic3RyaW5nKDEsIHZhbC5sZW5ndGgpOyB9XG5cbiAgICAgIC8vcmVtb3ZlIHByZWZpeFxuICAgICAgdmFsID0gcHJlZml4ICYmIHZhbC5pbmRleE9mKHByZWZpeCkgPT09IDAgPyB2YWwuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgsIHZhbC5sZW5ndGgpIDogdmFsO1xuXG4gICAgICAvL3JlbW92ZSBzdWZmaXhcbiAgICAgIHZhciBzdWZmaXhMYXN0SW5kZXggPSB2YWwubGFzdEluZGV4T2Yoc3VmZml4KTtcbiAgICAgIHZhbCA9XG4gICAgICAgIHN1ZmZpeCAmJiBzdWZmaXhMYXN0SW5kZXggIT09IC0xICYmIHN1ZmZpeExhc3RJbmRleCA9PT0gdmFsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGhcbiAgICAgICAgICA/IHZhbC5zdWJzdHJpbmcoMCwgc3VmZml4TGFzdEluZGV4KVxuICAgICAgICAgIDogdmFsO1xuXG4gICAgICAvL2FkZCBuZWdhdGlvbiBzaWduIGJhY2tcbiAgICAgIGlmIChpc05lZ2F0aXZlKSB7IHZhbCA9ICctJyArIHZhbDsgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW1vdmVQYXR0ZXJuRm9ybWF0dGluZyA9IGZ1bmN0aW9uIHJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBmb3JtYXRBcnJheSA9IGZvcm1hdC5zcGxpdCgnIycpLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIgIT09ICcnOyB9KTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBudW1TdHIgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsbiA9IGZvcm1hdEFycmF5Lmxlbmd0aDsgaSA8PSBsbjsgaSsrKSB7XG4gICAgICB2YXIgcGFydCA9IGZvcm1hdEFycmF5W2ldIHx8ICcnO1xuXG4gICAgICAvL2lmIGkgaXMgdGhlIGxhc3QgZnJhZ21lbnQgdGFrZSB0aGUgaW5kZXggb2YgZW5kIG9mIHRoZSB2YWx1ZVxuICAgICAgLy9Gb3IgY2FzZSBsaWtlICsxICg5MTEpIDkxMSA5MSA5MSBoYXZpbmcgcGF0dGVybiArMSAoIyMjKSAjIyMgIyMgIyNcbiAgICAgIHZhciBpbmRleCA9IGkgPT09IGxuID8gdmFsLmxlbmd0aCA6IHZhbC5pbmRleE9mKHBhcnQsIHN0YXJ0KTtcblxuICAgICAgLyogaW4gYW55IGNhc2UgaWYgd2UgZG9uJ3QgZmluZCB0aGUgcGF0dGVybiBwYXJ0IGluIHRoZSB2YWx1ZSBhc3N1bWUgdGhlIHZhbCBhcyBudW1lcmljIHN0cmluZ1xuICAgICAgVGhpcyB3aWxsIGJlIGFsc28gaW4gY2FzZSBpZiB1c2VyIGhhcyBzdGFydGVkIHR5cGluZywgaW4gYW55IG90aGVyIGNhc2UgaXQgd2lsbCBub3QgYmUgLTFcbiAgICAgIHVubGVzcyB3cm9uZyBwcm9wIHZhbHVlIGlzIHByb3ZpZGVkICovXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIG51bVN0ciA9IHZhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW1TdHIgKz0gdmFsLnN1YnN0cmluZyhzdGFydCwgaW5kZXgpO1xuICAgICAgICBzdGFydCA9IGluZGV4ICsgcGFydC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChudW1TdHIubWF0Y2goL1xcZC9nKSB8fCBbXSkuam9pbignJyk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW1vdmVGb3JtYXR0aW5nID0gZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZyAodmFsICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcmVtb3ZlRm9ybWF0dGluZyA9IHJlZi5yZW1vdmVGb3JtYXR0aW5nO1xuICAgIGlmICghdmFsKSB7IHJldHVybiB2YWw7IH1cblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YWwgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWwpO1xuICAgICAgdmFsID0gdGhpcy5nZXRGbG9hdFN0cmluZyh2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcodmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW1vdmVGb3JtYXR0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvL2NvbmRpdGlvbiBuZWVkIHRvIGJlIGhhbmRsZWQgaWYgZm9ybWF0IG1ldGhvZCBpcyBwcm92aWRlLFxuICAgICAgdmFsID0gcmVtb3ZlRm9ybWF0dGluZyh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSAodmFsLm1hdGNoKC9cXGQvZykgfHwgW10pLmpvaW4oJycpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9O1xuICAvKiogbWV0aG9kcyB0byByZW1vdmUgZm9ybWF0dHRpbmcgZW5kICoqL1xuXG4gIC8qKiogZm9ybWF0IHNwZWNpZmljIG1ldGhvZHMgc3RhcnQgKioqL1xuICAvKipcbiAgICogRm9ybWF0IHdoZW4gIyBiYXNlZCBzdHJpbmcgaXMgcHJvdmlkZWRcbiAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBTdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgZm9ybWF0dGVkIFZhbHVlXG4gICAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdFdpdGhQYXR0ZXJuID0gZnVuY3Rpb24gZm9ybWF0V2l0aFBhdHRlcm4gKG51bVN0ciAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGhhc2hDb3VudCA9IDA7XG4gICAgdmFyIGZvcm1hdHRlZE51bWJlckFyeSA9IGZvcm1hdC5zcGxpdCgnJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0Lmxlbmd0aDsgaSA8IGxuOyBpKyspIHtcbiAgICAgIGlmIChmb3JtYXRbaV0gPT09ICcjJykge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXJBcnlbaV0gPSBudW1TdHJbaGFzaENvdW50XSB8fCB0aGlzLmdldE1hc2tBdEluZGV4KGhhc2hDb3VudCk7XG4gICAgICAgIGhhc2hDb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyQXJ5LmpvaW4oJycpO1xuICB9O1xuICAvKipcbiAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBzdHJpbmcvZmxvYXRTdHJpbmddIEl0IGFsd2F5cyBoYXZlIGRlY2ltYWxTZXBhcmF0b3IgYXMgLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGZvcm1hdHRlZCBWYWx1ZVxuICAgKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRBc051bWJlciA9IGZ1bmN0aW9uIGZvcm1hdEFzTnVtYmVyIChudW1TdHIgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciB0aG91c2FuZHNHcm91cFN0eWxlID0gcmVmLnRob3VzYW5kc0dyb3VwU3R5bGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gcmVmJDEudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgdmFyIGhhc0RlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSB8fCAoZGVjaW1hbFNjYWxlICYmIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgICB2YXIgcmVmJDIgPSBzcGxpdERlY2ltYWwobnVtU3RyLCBhbGxvd05lZ2F0aXZlKTtcbiAgICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZiQyLmJlZm9yZURlY2ltYWw7XG4gICAgdmFyIGFmdGVyRGVjaW1hbCA9IHJlZiQyLmFmdGVyRGVjaW1hbDtcbiAgICB2YXIgYWRkTmVnYXRpb24gPSByZWYkMi5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgIC8vYXBwbHkgZGVjaW1hbCBwcmVjaXNpb24gaWYgaXRzIGRlZmluZWRcbiAgICBpZiAoZGVjaW1hbFNjYWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFmdGVyRGVjaW1hbCA9IGxpbWl0VG9TY2FsZShhZnRlckRlY2ltYWwsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIH1cblxuICAgIGlmICh0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgYmVmb3JlRGVjaW1hbCA9IGFwcGx5VGhvdXNhbmRTZXBhcmF0b3IoYmVmb3JlRGVjaW1hbCwgdGhvdXNhbmRTZXBhcmF0b3IsIHRob3VzYW5kc0dyb3VwU3R5bGUpO1xuICAgIH1cblxuICAgIC8vYWRkIHByZWZpeCBhbmQgc3VmZml4XG4gICAgaWYgKHByZWZpeCkgeyBiZWZvcmVEZWNpbWFsID0gcHJlZml4ICsgYmVmb3JlRGVjaW1hbDsgfVxuICAgIGlmIChzdWZmaXgpIHsgYWZ0ZXJEZWNpbWFsID0gYWZ0ZXJEZWNpbWFsICsgc3VmZml4OyB9XG5cbiAgICAvL3Jlc3RvcmUgbmVnYXRpb24gc2lnblxuICAgIGlmIChhZGROZWdhdGlvbikgeyBiZWZvcmVEZWNpbWFsID0gJy0nICsgYmVmb3JlRGVjaW1hbDsgfVxuXG4gICAgbnVtU3RyID0gYmVmb3JlRGVjaW1hbCArICgoaGFzRGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2VwYXJhdG9yKSB8fCAnJykgKyBhZnRlckRlY2ltYWw7XG5cbiAgICByZXR1cm4gbnVtU3RyO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0TnVtU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0TnVtU3RyaW5nIChudW1TdHIpIHtcbiAgICBpZiAoIG51bVN0ciA9PT0gdm9pZCAwICkgbnVtU3RyICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IHJlZi5hbGxvd0VtcHR5Rm9ybWF0dGluZztcbiAgICB2YXIgY3VzdG9tTnVtZXJhbHMgPSByZWYuY3VzdG9tTnVtZXJhbHM7XG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gbnVtU3RyO1xuXG4gICAgaWYgKGN1c3RvbU51bWVyYWxzICYmIGN1c3RvbU51bWVyYWxzLmxlbmd0aCA9PT0gMTApIHtcbiAgICAgIHZhciBjdXN0b21OdW1lcmFsUmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIGN1c3RvbU51bWVyYWxzLmpvaW4oJycpICsgJ10nLCAnZycpO1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBudW1TdHIucmVwbGFjZShjdXN0b21OdW1lcmFsUmVnZXgsIGZ1bmN0aW9uIChkaWdpdCkgeyByZXR1cm4gY3VzdG9tTnVtZXJhbHMuaW5kZXhPZihkaWdpdCkudG9TdHJpbmcoKTsgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobnVtU3RyID09PSAnJyAmJiAhYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgfSBlbHNlIGlmIChudW1TdHIgPT09ICctJyAmJiAhZm9ybWF0KSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9ICctJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0V2l0aFBhdHRlcm4oZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXQoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0QXNOdW1iZXIoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGZvcm1hdFZhbHVlUHJvcCAoZGVmYXVsdFZhbHVlICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gcmVmLmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgIHZhciByZWYkMSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHZhbHVlID0gcmVmJDEudmFsdWU7XG4gICAgdmFyIGlzTnVtZXJpY1N0cmluZyA9IHJlZiQxLmlzTnVtZXJpY1N0cmluZztcblxuICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB1c2UgZGVmYXVsdFZhbHVlIGluc3RlYWRcbiAgICB2YWx1ZSA9IGlzTmlsKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuXG4gICAgdmFyIGlzTm9uTnVtZXJpY0ZhbHN5ID0gIXZhbHVlICYmIHZhbHVlICE9PSAwO1xuXG4gICAgaWYgKGlzTm9uTnVtZXJpY0ZhbHN5ICYmIGFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIGlmIHZhbHVlIGlzIG5vdCBkZWZpbmVkIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoaXNOb25OdW1lcmljRmFsc3kgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSB7IHJldHVybiAnJzsgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdG9OdW1lcmljU3RyaW5nKHZhbHVlKTtcbiAgICAgIGlzTnVtZXJpY1N0cmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9jaGFuZ2UgaW5maW5pdHkgdmFsdWUgdG8gZW1wdHkgc3RyaW5nXG4gICAgaWYgKHZhbHVlID09PSAnSW5maW5pdHknICYmIGlzTnVtZXJpY1N0cmluZykge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvL3JvdW5kIHRoZSBudW1iZXIgYmFzZWQgb24gZGVjaW1hbFNjYWxlXG4gICAgLy9mb3JtYXQgb25seSBpZiBub24gZm9ybWF0dGVkIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAgaWYgKGlzTnVtZXJpY1N0cmluZyAmJiAhZm9ybWF0ICYmIHR5cGVvZiBkZWNpbWFsU2NhbGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHJvdW5kVG9QcmVjaXNpb24odmFsdWUsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGlzTnVtZXJpY1N0cmluZyA/IHRoaXMuZm9ybWF0TnVtU3RyaW5nKHZhbHVlKSA6IHRoaXMuZm9ybWF0SW5wdXQodmFsdWUpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0TmVnYXRpb24gPSBmdW5jdGlvbiBmb3JtYXROZWdhdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSAgICAgICAgID0gJyc7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciBuZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pJyk7XG4gICAgdmFyIGRvdWJsZU5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSkoLikqKC0pJyk7XG5cbiAgICAvLyBDaGVjayBudW1iZXIgaGFzICctJyB2YWx1ZVxuICAgIHZhciBoYXNOZWdhdGlvbiA9IG5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7XG5cbiAgICAvLyBDaGVjayBudW1iZXIgaGFzIDIgb3IgbW9yZSAnLScgdmFsdWVzXG4gICAgdmFyIHJlbW92ZU5lZ2F0aW9uID0gZG91YmxlTmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgIC8vcmVtb3ZlIG5lZ2F0aW9uXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8tL2csICcnKTtcblxuICAgIGlmIChoYXNOZWdhdGlvbiAmJiAhcmVtb3ZlTmVnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgdmFsdWUgPSAnLScgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRJbnB1dCA9IGZ1bmN0aW9uIGZvcm1hdElucHV0ICh2YWx1ZSkge1xuICAgIGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuXG4gICAgLy9mb3JtYXQgbmVnYXRpb24gb25seSBpZiB3ZSBhcmUgZm9ybWF0dGluZyBhcyBudW1iZXJcbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWx1ZSk7XG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0TmVnYXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIC8vcmVtb3ZlIGZvcm1hdHRpbmcgZnJvbSBudW1iZXJcbiAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpO1xuICB9O1xuXG4gIC8qKiogZm9ybWF0IHNwZWNpZmljIG1ldGhvZHMgZW5kICoqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5pc0NoYXJhY3RlckFGb3JtYXQgPSBmdW5jdGlvbiBpc0NoYXJhY3RlckFGb3JtYXQgKGNhcmV0UG9zICAgICAgICAsIHZhbHVlICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgZml4ZWREZWNpbWFsU2NhbGUgPSByZWYuZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgLy9jaGVjayB3aXRoaW4gZm9ybWF0IHBhdHRlcm5cbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycgJiYgZm9ybWF0W2NhcmV0UG9zXSAhPT0gJyMnKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAvL2NoZWNrIGluIG51bWJlciBmb3JtYXRcbiAgICBpZiAoXG4gICAgICAhZm9ybWF0ICYmXG4gICAgICAoY2FyZXRQb3MgPCBwcmVmaXgubGVuZ3RoIHx8XG4gICAgICAgIGNhcmV0UG9zID49IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGggfHxcbiAgICAgICAgKGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZSAmJiB2YWx1ZVtjYXJldFBvc10gPT09IGRlY2ltYWxTZXBhcmF0b3IpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2hlY2sgaWYgYW55IGZvcm1hdHRpbmcgZ290IHJlbW92ZWQgYnkgdGhlIGRlbGV0ZSBvciBiYWNrc3BhY2UgYW5kIHJlc2V0IHRoZSB2YWx1ZVxuICAgKiBJdCB3aWxsIGFsc28gd29yayBhcyBmYWxsYmFjayBpZiBhbmRyb2lkIGNob21lIGtleURvd24gaGFuZGxlciBkb2VzIG5vdCB3b3JrXG4gICAqKi9cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb3JyZWN0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGNvcnJlY3RJbnB1dFZhbHVlIChjYXJldFBvcyAgICAgICAgLCBsYXN0VmFsdWUgICAgICAgICwgdmFsdWUgICAgICAgICkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZGVjaW1hbFNjYWxlID0gcmVmLmRlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmJDEuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmJDEuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgbGFzdE51bVN0ciA9IHRoaXMuc3RhdGUubnVtQXNTdHJpbmcgfHwgJyc7XG4gICAgdmFyIHJlZiQyID0gdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dDtcbiAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSByZWYkMi5zZWxlY3Rpb25TdGFydDtcbiAgICB2YXIgc2VsZWN0aW9uRW5kID0gcmVmJDIuc2VsZWN0aW9uRW5kO1xuICAgIHZhciByZWYkMyA9IGZpbmRDaGFuZ2VkSW5kZXgobGFzdFZhbHVlLCB2YWx1ZSk7XG4gICAgdmFyIHN0YXJ0ID0gcmVmJDMuc3RhcnQ7XG4gICAgdmFyIGVuZCA9IHJlZiQzLmVuZDtcblxuICAgIC8qKiBDaGVjayBmb3IgYW55IGFsbG93ZWQgZGVjaW1hbCBzZXBhcmF0b3IgaXMgYWRkZWQgaW4gdGhlIG51bWVyaWMgZm9ybWF0IGFuZCByZXBsYWNlIGl0IHdpdGggZGVjaW1hbCBzZXBhcmF0b3IgKi9cbiAgICBpZiAoXG4gICAgICAhZm9ybWF0ICYmXG4gICAgICBzdGFydCA9PT0gZW5kICYmXG4gICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMuaW5kZXhPZih2YWx1ZVtzZWxlY3Rpb25TdGFydF0pICE9PSAtMVxuICAgICkge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSA9PT0gMCA/ICcnIDogZGVjaW1hbFNlcGFyYXRvcjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb25TdGFydCkgKyBzZXBhcmF0b3IgKyB2YWx1ZS5zdWJzdHIoc2VsZWN0aW9uU3RhcnQgKyAxLCB2YWx1ZS5sZW5ndGgpXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBsZWZ0Qm91bmQgPSAhIWZvcm1hdCA/IDAgOiBwcmVmaXgubGVuZ3RoO1xuICAgIHZhciByaWdodEJvdW5kID0gbGFzdFZhbHVlLmxlbmd0aCAtICghIWZvcm1hdCA/IDAgOiBzdWZmaXgubGVuZ3RoKTtcblxuICAgIGlmIChcbiAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNvbWV0aGluZyBnb3QgYWRkZWRcbiAgICAgIHZhbHVlLmxlbmd0aCA+IGxhc3RWYWx1ZS5sZW5ndGggfHxcbiAgICAgIC8vIG9yIGlmIHRoZSBuZXcgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgICAhdmFsdWUubGVuZ3RoIHx8XG4gICAgICAvLyBvciBpZiBub3RoaW5nIGhhcyBjaGFuZ2VkLCBpbiB3aGljaCBjYXNlIHN0YXJ0IHdpbGwgYmUgc2FtZSBhcyBlbmRcbiAgICAgIHN0YXJ0ID09PSBlbmQgfHxcbiAgICAgIC8vIG9yIGluIGNhc2UgaWYgd2hvbGUgaW5wdXQgaXMgc2VsZWN0ZWQgYW5kIG5ldyB2YWx1ZSBpcyB0eXBlZFxuICAgICAgKHNlbGVjdGlvblN0YXJ0ID09PSAwICYmIHNlbGVjdGlvbkVuZCA9PT0gbGFzdFZhbHVlLmxlbmd0aCkgfHxcbiAgICAgIC8vIG9yIGluIGNhc2UgaWYgdGhlIHdob2xlIGNvbnRlbnQgaXMgcmVwbGFjZWQgYnkgYnJvd3NlciwgZXhhbXBsZSAoYXV0b2NvbXBsZXRlKVxuICAgICAgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdFZhbHVlLmxlbmd0aCkgfHxcbiAgICAgIC8vIG9yIGlmIGNoYXJjdGVycyBiZXR3ZWVuIHByZWZpeCBhbmQgc3VmZml4IGlzIHNlbGVjdGVkLlxuICAgICAgLy8gRm9yIG51bWVyaWMgaW5wdXRzIHdlIGFwcGx5IHRoZSBmb3JtYXQgc28sIHByZWZpeCBhbmQgc3VmZml4IGNhbiBiZSBpZ25vcmVkXG4gICAgICAoc2VsZWN0aW9uU3RhcnQgPT09IGxlZnRCb3VuZCAmJiBzZWxlY3Rpb25FbmQgPT09IHJpZ2h0Qm91bmQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgZGVsZXRlZCBwb3J0aW9uIGhhcyBhIGNoYXJhY3RlciB0aGF0IGlzIHBhcnQgb2YgYSBmb3JtYXRcbiAgICB2YXIgZGVsZXRlZFZhbHVlcyA9IGxhc3RWYWx1ZS5zdWJzdHIoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YXIgZm9ybWF0R290RGVsZXRlZCA9ICEhW10uY29uY2F0KCBkZWxldGVkVmFsdWVzICkuZmluZChmdW5jdGlvbiAoZGVsZXRlZFZhbCwgaWR4KSB7IHJldHVybiB0aGlzJDEuaXNDaGFyYWN0ZXJBRm9ybWF0KGlkeCArIHN0YXJ0LCBsYXN0VmFsdWUpOyB9XG4gICAgKTtcblxuICAgIC8vIGlmIGl0IGhhcywgb25seSByZW1vdmUgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgZm9ybWF0XG4gICAgaWYgKGZvcm1hdEdvdERlbGV0ZWQpIHtcbiAgICAgIHZhciBkZWxldGVkVmFsdWVQb3J0aW9uID0gbGFzdFZhbHVlLnN1YnN0cihzdGFydCk7XG4gICAgICB2YXIgcmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnMgPSB7fTtcbiAgICAgIHZhciByZXNvbHZlZFBvcnRpb24gPSBbXTtcbiAgICAgIFtdLmNvbmNhdCggZGVsZXRlZFZhbHVlUG9ydGlvbiApLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRQb3J0aW9uLCBpZHgpIHtcbiAgICAgICAgaWYgKHRoaXMkMS5pc0NoYXJhY3RlckFGb3JtYXQoaWR4ICsgc3RhcnQsIGxhc3RWYWx1ZSkpIHtcbiAgICAgICAgICByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdID0gY3VycmVudFBvcnRpb247XG4gICAgICAgIH0gZWxzZSBpZiAoaWR4ID4gZGVsZXRlZFZhbHVlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVzb2x2ZWRQb3J0aW9uLnB1c2goY3VycmVudFBvcnRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMocmVjb3JkSW5kZXhPZkZvcm1hdENoYXJhY3RlcnMpLmZvckVhY2goZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICBpZiAocmVzb2x2ZWRQb3J0aW9uLmxlbmd0aCA+IGlkeCkge1xuICAgICAgICAgIHJlc29sdmVkUG9ydGlvbi5zcGxpY2UoaWR4LCAwLCByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24ucHVzaChyZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhbHVlID0gbGFzdFZhbHVlLnN1YnN0cigwLCBzdGFydCkgKyByZXNvbHZlZFBvcnRpb24uam9pbignJyk7XG4gICAgfVxuXG4gICAgLy9mb3IgbnVtYmVycyBjaGVjayBpZiBiZWZvcmVEZWNpbWFsIGdvdCBkZWxldGVkIGFuZCB0aGVyZSBpcyBub3RoaW5nIGFmdGVyIGRlY2ltYWwsXG4gICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhciBudW1lcmljU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICAgIHZhciByZWYkNCA9IHNwbGl0RGVjaW1hbChcbiAgICAgICAgbnVtZXJpY1N0cmluZyxcbiAgICAgICAgYWxsb3dOZWdhdGl2ZVxuICAgICAgKTtcbiAgICAgIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmJDQuYmVmb3JlRGVjaW1hbDtcbiAgICAgIHZhciBhZnRlckRlY2ltYWwgPSByZWYkNC5hZnRlckRlY2ltYWw7XG4gICAgICB2YXIgYWRkTmVnYXRpb24gPSByZWYkNC5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgICAgLy9jbGVhciBvbmx5IGlmIHNvbWV0aGluZyBnb3QgZGVsZXRlZFxuICAgICAgdmFyIGlzQmVmb3JlRGVjaW1hbFBvaW50ID0gY2FyZXRQb3MgPCB2YWx1ZS5pbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpICsgMTtcbiAgICAgIGlmIChcbiAgICAgICAgbnVtZXJpY1N0cmluZy5sZW5ndGggPCBsYXN0TnVtU3RyLmxlbmd0aCAmJlxuICAgICAgICBpc0JlZm9yZURlY2ltYWxQb2ludCAmJlxuICAgICAgICBiZWZvcmVEZWNpbWFsID09PSAnJyAmJlxuICAgICAgICAhcGFyc2VGbG9hdChhZnRlckRlY2ltYWwpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFkZE5lZ2F0aW9uID8gJy0nIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKiBVcGRhdGUgdmFsdWUgYW5kIGNhcmV0IHBvc2l0aW9uICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAocGFyYW1zICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICApIHtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBwYXJhbXMuZm9ybWF0dGVkVmFsdWU7XG4gICAgdmFyIGlucHV0ID0gcGFyYW1zLmlucHV0O1xuICAgIHZhciBzZXRDYXJldFBvc2l0aW9uID0gcGFyYW1zLnNldENhcmV0UG9zaXRpb247IGlmICggc2V0Q2FyZXRQb3NpdGlvbiA9PT0gdm9pZCAwICkgc2V0Q2FyZXRQb3NpdGlvbiA9IHRydWU7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gcGFyYW1zLm51bUFzU3RyaW5nO1xuICAgIHZhciBjYXJldFBvcyA9IHBhcmFtcy5jYXJldFBvcztcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25WYWx1ZUNoYW5nZSA9IHJlZi5vblZhbHVlQ2hhbmdlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHJlZiQxLnZhbHVlO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvL3NldCBjYXJldCBwb3NpdGlvbiwgYW5kIHZhbHVlIGltcGVyYXRpdmVseSB3aGVuIGVsZW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgIGlmIChzZXRDYXJldFBvc2l0aW9uKSB7XG4gICAgICAgIC8vY2FsY3VsYXRlIGNhcmV0IHBvc2l0aW9uIGlmIG5vdCBkZWZpbmVkXG4gICAgICAgIGlmICghY2FyZXRQb3MpIHtcbiAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlIHx8IGlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgdmFyIGN1cnJlbnRDYXJldFBvc2l0aW9uID0gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oaW5wdXQpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogc2V0IHRoZSB2YWx1ZSBpbXBlcmF0aXZlbHksIHRoaXMgaXMgcmVxdWlyZWQgZm9yIElFIGZpeFxuICAgICAgICAgICAqIFRoaXMgaXMgYWxzbyByZXF1aXJlZCBhcyBpZiBuZXcgY2FyZXQgcG9zaXRpb24gaXMgYmV5b25kIHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICAgICAgICAgKiBDYXJldCBwb3NpdGlvbiB3aWxsIG5vdCBiZSBzZXQgY29ycmVjdGx5XG4gICAgICAgICAgICovXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcblxuICAgICAgICAgIC8vZ2V0IHRoZSBjYXJldCBwb3NpdGlvblxuICAgICAgICAgIGNhcmV0UG9zID0gdGhpcy5nZXRDYXJldFBvc2l0aW9uKGlucHV0VmFsdWUsIGZvcm1hdHRlZFZhbHVlLCBjdXJyZW50Q2FyZXRQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCBjYXJldCBwb3NpdGlvblxuICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGlucHV0LCBjYXJldFBvcywgZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHdlIGFyZSBub3Qgc2V0dGluZyBjYXJldCBwb3NpdGlvbiBzZXQgdGhlIHZhbHVlIGltcGVyYXRpdmVseS5cbiAgICAgICAgICogVGhpcyBpcyByZXF1aXJlZCBvbiBvbkJsdXIgbWV0aG9kXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIG51bWVyaWMgc3RyaW5nIGlmIG5vdCBwYXNzZWRcbiAgICBpZiAobnVtQXNTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH1cblxuICAgIC8vdXBkYXRlIHN0YXRlIGlmIHZhbHVlIGlzIGNoYW5nZWRcbiAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nIH0pO1xuXG4gICAgICAvLyB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2Ugc3luY2hyb25vdXNseSwgc28gcGFyZW50IGlzIHVwZGF0ZWQgYWxvbmcgd2l0aCB0aGUgbnVtYmVyIGZvcm1hdC4gRml4IGZvciAjMjc3LCAjMjg3XG4gICAgICBvblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZSAoZSAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBpbnB1dFZhbHVlID0gZWwudmFsdWU7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgaXNBbGxvd2VkID0gcHJvcHMuaXNBbGxvd2VkO1xuICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsKTtcblxuICAgIGlucHV0VmFsdWUgPSB0aGlzLmNvcnJlY3RJbnB1dFZhbHVlKGN1cnJlbnRDYXJldFBvc2l0aW9uLCBsYXN0VmFsdWUsIGlucHV0VmFsdWUpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRJbnB1dChpbnB1dFZhbHVlKSB8fCAnJztcbiAgICB2YXIgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgdmFyIHZhbHVlT2JqID0gdGhpcy5nZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpO1xuICAgIHZhciBpc0NoYW5nZUFsbG93ZWQgPSBpc0FsbG93ZWQodmFsdWVPYmopO1xuXG4gICAgaWYgKCFpc0NoYW5nZUFsbG93ZWQpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gbGFzdFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoeyBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZywgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSwgaW5wdXQ6IGVsIH0pO1xuXG4gICAgaWYgKGlzQ2hhbmdlQWxsb3dlZCkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25CbHVyID0gZnVuY3Rpb24gb25CbHVyIChlICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZTtcbiAgICB2YXIgZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuICAgIHZhciBvbkJsdXIgPSBwcm9wcy5vbkJsdXI7XG4gICAgdmFyIGFsbG93TGVhZGluZ1plcm9zID0gcHJvcHMuYWxsb3dMZWFkaW5nWmVyb3M7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHRoaXMuZm9jdXNlZEVsbSA9IG51bGw7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0KTtcblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAvLyBpZiB0aGUgbnVtQXNTdHJpbmcgaXMgbm90IGEgdmFsaWQgbnVtYmVyIHJlc2V0IGl0IHRvIGVtcHR5XG4gICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChudW1Bc1N0cmluZykpKSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxsb3dMZWFkaW5nWmVyb3MpIHtcbiAgICAgICAgbnVtQXNTdHJpbmcgPSBmaXhMZWFkaW5nWmVybyhudW1Bc1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKG51bUFzU3RyaW5nKTtcblxuICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgICAvLyB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgcGVyc2lzdGVkIGJlY2F1c2UgaXRzIHByb3BlcnRpZXMgY2FuIGJlIGFjY2Vzc2VkIGluIGFuIGFzeW5jaHJvbm91cyB3YXlcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgICAgICBpbnB1dDogZS50YXJnZXQsXG4gICAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkJsdXIoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgb25CbHVyKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25LZXlEb3duID0gZnVuY3Rpb24gb25LZXlEb3duIChlICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICB2YXIga2V5ID0gZS5rZXk7XG4gICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICB2YXIgdmFsdWUgPSBlbC52YWx1ZTsgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgPSAnJztcbiAgICB2YXIgZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgb25LZXlEb3duID0gcmVmLm9uS2V5RG93bjtcbiAgICB2YXIgaWdub3JlRGVjaW1hbFNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkICYmIGZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgoZmFsc2UsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IpO1xuICAgIHZhciBuZWdhdGl2ZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnLScpO1xuICAgIHZhciBpc1BhdHRlcm5Gb3JtYXQgPSB0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJztcblxuICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICBzZWxlY3Rpb25TdGFydDogc2VsZWN0aW9uU3RhcnQsXG4gICAgICBzZWxlY3Rpb25FbmQ6IHNlbGVjdGlvbkVuZCxcbiAgICB9O1xuXG4gICAgLy9IYW5kbGUgYmFja3NwYWNlIGFuZCBkZWxldGUgYWdhaW5zdCBub24gbnVtZXJpY2FsL2RlY2ltYWwgY2hhcmFjdGVycyBvciBhcnJvdyBrZXlzXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8vaWYgZXhwZWN0ZWRDYXJldFBvc2l0aW9uIGlzIG5vdCBzZXQgaXQgbWVhbnMgd2UgZG9uJ3Qgd2FudCB0byBIYW5kbGUga2V5RG93blxuICAgIC8vYWxzbyBpZiBtdWx0aXBsZSBjaGFyYWN0ZXJzIGFyZSBzZWxlY3RlZCBkb24ndCBoYW5kbGVcbiAgICBpZiAoZXhwZWN0ZWRDYXJldFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgc2VsZWN0aW9uU3RhcnQgIT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXdDYXJldFBvc2l0aW9uID0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciBsZWZ0Qm91bmQgPSBpc1BhdHRlcm5Gb3JtYXQgPyBmb3JtYXQuaW5kZXhPZignIycpIDogcHJlZml4Lmxlbmd0aDtcbiAgICB2YXIgcmlnaHRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5sYXN0SW5kZXhPZignIycpICsgMSA6IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGtleSA9PT0gJ0Fycm93TGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5ID09PSAnRGVsZXRlJyAmJlxuICAgICAgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkgJiZcbiAgICAgICFuZWdhdGl2ZVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSlcbiAgICApIHtcbiAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA8IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgLyogTk9URTogVGhpcyBpcyBzcGVjaWFsIGNhc2Ugd2hlbiBiYWNrc3BhY2UgaXMgcHJlc3NlZCBvbiBhXG4gICAgICBuZWdhdGl2ZSB2YWx1ZSB3aGlsZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIGFmdGVyIHByZWZpeC4gV2UgY2FuJ3QgaGFuZGxlIGl0IG9uIG9uQ2hhbmdlIGJlY2F1c2VcbiAgICAgIHdlIHdpbGwgbm90IGhhdmUgYW55IGluZm9ybWF0aW9uIG9mIGtleVByZXNzXG4gICAgICAqL1xuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IGxlZnRCb3VuZCArIDEgJiYgdmFsdWVbMF0gPT09ICctJyAmJiB0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBjYXJldFBvczogbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICBpbnB1dDogZWwsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uIC0gMV0pICYmIG5ld0NhcmV0UG9zaXRpb24gPiBsZWZ0Qm91bmQpIHtcbiAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uLS07XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIG5ld0NhcmV0UG9zaXRpb24sICdsZWZ0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiAhPT0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uIHx8XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPCBsZWZ0Qm91bmQgfHxcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA+IHJpZ2h0Qm91bmRcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiB0aGlzIGlzIGp1c3QgcmVxdWlyZWQgZm9yIHVuaXQgdGVzdCBhcyB3ZSBuZWVkIHRvIGdldCB0aGUgbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICAgIFJlbW92ZSB0aGlzIHdoZW4geW91IGZpbmQgZGlmZmVyZW50IHNvbHV0aW9uICovXG4gICAgaWYgKGUuaXNVbml0VGVzdFJ1bikge1xuICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKTtcbiAgfTtcblxuICAvKiogcmVxdWlyZWQgdG8gaGFuZGxlIHRoZSBjYXJldCBwb3NpdGlvbiB3aGVuIGNsaWNrIGFueXdoZXJlIHdpdGhpbiB0aGUgaW5wdXQgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24gb25Nb3VzZVVwIChlICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIE5PVEU6IHdlIGhhdmUgdG8gZ2l2ZSBkZWZhdWx0IHZhbHVlIGZvciB2YWx1ZSBhcyBpbiBjYXNlIHdoZW4gY3VzdG9tIGlucHV0IGlzIHByb3ZpZGVkXG4gICAgICogdmFsdWUgY2FuIGNvbWUgYXMgdW5kZWZpbmVkIHdoZW4gbm90aGluZyBpcyBwcm92aWRlZCBvbiB2YWx1ZSBwcm9wLlxuICAgICAqL1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gJyc7XG5cbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBpZiAoY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMgKGUgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIC8vIFdvcmthcm91bmQgQ2hyb21lIGFuZCBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3OTMyOFxuICAgIC8vIChvbkZvY3VzIGV2ZW50IHRhcmdldCBzZWxlY3Rpb25TdGFydCBpcyBhbHdheXMgMCBiZWZvcmUgc2V0VGltZW91dClcbiAgICBlLnBlcnNpc3QoKTtcblxuICAgIHRoaXMuZm9jdXNlZEVsbSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICAgIHZhciB2YWx1ZSA9IGVsLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9ICcnO1xuXG4gICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IHRoaXMkMS5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgc2VsZWN0aW9uU3RhcnQpO1xuXG4gICAgICAvL3NldFBhdGNoZWRDYXJldFBvc2l0aW9uIG9ubHkgd2hlbiBldmVyeXRoaW5nIGlzIG5vdCBzZWxlY3RlZCBvbiBmb2N1cyAod2hpbGUgdGFiYmluZyBpbnRvIHRoZSBmaWVsZClcbiAgICAgIGlmIChcbiAgICAgICAgY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQgJiZcbiAgICAgICAgIShzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IHZhbHVlLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICB0aGlzJDEuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcyQxLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIGRpc3BsYXlUeXBlID0gcmVmLmRpc3BsYXlUeXBlO1xuICAgIHZhciBjdXN0b21JbnB1dCA9IHJlZi5jdXN0b21JbnB1dDtcbiAgICB2YXIgcmVuZGVyVGV4dCA9IHJlZi5yZW5kZXJUZXh0O1xuICAgIHZhciBnZXRJbnB1dFJlZiA9IHJlZi5nZXRJbnB1dFJlZjtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYudGhvdXNhbmRTZXBhcmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYuZGVjaW1hbFNlcGFyYXRvcjtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcbiAgICB2YXIgdGhvdXNhbmRzR3JvdXBTdHlsZSA9IHJlZi50aG91c2FuZHNHcm91cFN0eWxlO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgcmVtb3ZlRm9ybWF0dGluZyA9IHJlZi5yZW1vdmVGb3JtYXR0aW5nO1xuICAgIHZhciBtYXNrID0gcmVmLm1hc2s7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHJlZi5kZWZhdWx0VmFsdWU7XG4gICAgdmFyIGlzTnVtZXJpY1N0cmluZyA9IHJlZi5pc051bWVyaWNTdHJpbmc7XG4gICAgdmFyIGFsbG93TmVnYXRpdmUgPSByZWYuYWxsb3dOZWdhdGl2ZTtcbiAgICB2YXIgYWxsb3dFbXB0eUZvcm1hdHRpbmcgPSByZWYuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgdmFyIGFsbG93TGVhZGluZ1plcm9zID0gcmVmLmFsbG93TGVhZGluZ1plcm9zO1xuICAgIHZhciBvblZhbHVlQ2hhbmdlID0gcmVmLm9uVmFsdWVDaGFuZ2U7XG4gICAgdmFyIGlzQWxsb3dlZCA9IHJlZi5pc0FsbG93ZWQ7XG4gICAgdmFyIGN1c3RvbU51bWVyYWxzID0gcmVmLmN1c3RvbU51bWVyYWxzO1xuICAgIHZhciBvbkNoYW5nZSA9IHJlZi5vbkNoYW5nZTtcbiAgICB2YXIgb25LZXlEb3duID0gcmVmLm9uS2V5RG93bjtcbiAgICB2YXIgb25Nb3VzZVVwID0gcmVmLm9uTW91c2VVcDtcbiAgICB2YXIgb25Gb2N1cyA9IHJlZi5vbkZvY3VzO1xuICAgIHZhciBvbkJsdXIgPSByZWYub25CbHVyO1xuICAgIHZhciBwcm9wVmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyggcmVmLCBbXCJ0eXBlXCIsIFwiZGlzcGxheVR5cGVcIiwgXCJjdXN0b21JbnB1dFwiLCBcInJlbmRlclRleHRcIiwgXCJnZXRJbnB1dFJlZlwiLCBcImZvcm1hdFwiLCBcInRob3VzYW5kU2VwYXJhdG9yXCIsIFwiZGVjaW1hbFNlcGFyYXRvclwiLCBcImFsbG93ZWREZWNpbWFsU2VwYXJhdG9yc1wiLCBcInRob3VzYW5kc0dyb3VwU3R5bGVcIiwgXCJkZWNpbWFsU2NhbGVcIiwgXCJmaXhlZERlY2ltYWxTY2FsZVwiLCBcInByZWZpeFwiLCBcInN1ZmZpeFwiLCBcInJlbW92ZUZvcm1hdHRpbmdcIiwgXCJtYXNrXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiaXNOdW1lcmljU3RyaW5nXCIsIFwiYWxsb3dOZWdhdGl2ZVwiLCBcImFsbG93RW1wdHlGb3JtYXR0aW5nXCIsIFwiYWxsb3dMZWFkaW5nWmVyb3NcIiwgXCJvblZhbHVlQ2hhbmdlXCIsIFwiaXNBbGxvd2VkXCIsIFwiY3VzdG9tTnVtZXJhbHNcIiwgXCJvbkNoYW5nZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uTW91c2VVcFwiLCBcIm9uRm9jdXNcIiwgXCJvbkJsdXJcIiwgXCJ2YWx1ZVwiXSApO1xuICAgIHZhciBvdGhlclByb3BzID0gcmVzdDtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlO1xuICAgIHZhciBtb3VudGVkID0gcmVmJDEubW91bnRlZDtcblxuICAgIC8vIGFkZCBpbnB1dCBtb2RlIG9uIGVsZW1lbnQgYmFzZWQgb24gZm9ybWF0IHByb3AgYW5kIGRldmljZSBvbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgIHZhciBpbnB1dE1vZGUgPSBtb3VudGVkICYmIGFkZElucHV0TW9kZShmb3JtYXQpID8gJ251bWVyaWMnIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGlucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHsgaW5wdXRNb2RlOiBpbnB1dE1vZGUgfSwgb3RoZXJQcm9wcywge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgIH0pO1xuXG4gICAgaWYgKGRpc3BsYXlUeXBlID09PSAndGV4dCcpIHtcbiAgICAgIHJldHVybiByZW5kZXJUZXh0ID8gKFxuICAgICAgICByZW5kZXJUZXh0KHZhbHVlLCBvdGhlclByb3BzKSB8fCBudWxsXG4gICAgICApIDogKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnc3BhbicsIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgcmVmOiBnZXRJbnB1dFJlZiB9KSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY3VzdG9tSW5wdXQpIHtcbiAgICAgIHZhciBDdXN0b21JbnB1dCA9IGN1c3RvbUlucHV0O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEN1c3RvbUlucHV0LCBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnLCBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSkpO1xuICB9O1xuXG4gIHJldHVybiBOdW1iZXJGb3JtYXQ7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuXG5OdW1iZXJGb3JtYXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGb3JtYXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9