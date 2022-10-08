/**
 * This rule catches property overrides that conflicts with a key in the HTMLElement prototype
 * https://github.com/ionic-team/stencil-eslint/blob/main/src/rules/reserved-member-names.ts
 * https://github.com/ionic-team/stencil-eslint/blob/main/src/rules/reserved-event-names.ts
 */

const ariaProperties = [
  'ActiveDescendant',
  'Atomic',
  'AutoComplete',
  'Busy',
  'Checked',
  'ColCount',
  'ColIndex',
  'ColSpan',
  'Controls',
  'Current',
  'DescribedBy',
  'Details',
  'Disabled',
  'ErrorMessage',
  'Expanded',
  'FlowTo',
  'HasPopup',
  'Hidden',
  'Invalid',
  'KeyShortcuts',
  'Label',
  'LabelledBy',
  'Level',
  'Live',
  'Modal',
  'MultiLine',
  'MultiSelectable',
  'Orientation',
  'Owns',
  'Placeholder',
  'PosInSet',
  'Pressed',
  'ReadOnly',
  'Relevant',
  'Required',
  'RoleDescription',
  'RowCount',
  'RowIndex',
  'RowSpan',
  'Selected',
  'SetSize',
  'Sort',
  'ValueMax',
  'ValueMin',
  'ValueNow',
  'ValueText',
].map(name => `aria${name}`);

const htmlElementProperties = [
  'title',
  'lang',
  'translate',
  'dir',
  'dataset',
  'hidden',
  'tabIndex',
  'accessKey',
  'draggable',
  'spellcheck',
  'autocapitalize',
  'contentEditable',
  'isContentEditable',
  'inputMode',
  'offsetParent',
  'offsetTop',
  'offsetLeft',
  'offsetWidth',
  'offsetHeight',
  'style',
  'innerText',
  'outerText',
  'oncopy',
  'oncut',
  'onpaste',
  'onabort',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange',
  'onclick',
  'onclose',
  'oncontextmenu',
  'oncuechange',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onfocus',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreset',
  'onresize',
  'onscroll',
  'onseeked',
  'onseeking',
  'onselect',
  'onstalled',
  'onsubmit',
  'onsuspend',
  'ontimeupdate',
  'ontoggle',
  'onvolumechange',
  'onwaiting',
  'onwheel',
  'onauxclick',
  'ongotpointercapture',
  'onlostpointercapture',
  'onpointerdown',
  'onpointermove',
  'onpointerup',
  'onpointercancel',
  'onpointerover',
  'onpointerout',
  'onpointerenter',
  'onpointerleave',
  'onselectstart',
  'onselectionchange',
  'nonce',
  'click',
  'focus',
  'blur',
];

const elementProperties = [
  'namespaceURI',
  'prefix',
  'localName',
  'tagName',
  'id',
  'className',
  'classList',
  'slot',
  'attributes',
  'shadowRoot',
  'assignedSlot',
  'innerHTML',
  'outerHTML',
  'scrollTop',
  'scrollLeft',
  'scrollWidth',
  'scrollHeight',
  'clientTop',
  'clientLeft',
  'clientWidth',
  'clientHeight',
  'attributeStyleMap',
  'onbeforecopy',
  'onbeforecut',
  'onbeforepaste',
  'onsearch',
  'previousElementSibling',
  'nextElementSibling',
  'children',
  'firstElementChild',
  'lastElementChild',
  'childElementCount',
  'onfullscreenchange',
  'onfullscreenerror',
  'onwebkitfullscreenchange',
  'onwebkitfullscreenerror',
  'setPointerCapture',
  'releasePointerCapture',
  'hasPointerCapture',
  'hasAttributes',
  'getAttributeNames',
  'getAttribute',
  'getAttributeNS',
  'setAttribute',
  'setAttributeNS',
  'removeAttribute',
  'removeAttributeNS',
  'hasAttribute',
  'hasAttributeNS',
  'toggleAttribute',
  'getAttributeNode',
  'getAttributeNodeNS',
  'setAttributeNode',
  'setAttributeNodeNS',
  'removeAttributeNode',
  'closest',
  'matches',
  'webkitMatchesSelector',
  'attachShadow',
  'getElementsByTagName',
  'getElementsByTagNameNS',
  'getElementsByClassName',
  'insertAdjacentElement',
  'insertAdjacentText',
  'insertAdjacentHTML',
  'requestPointerLock',
  'getClientRects',
  'getBoundingClientRect',
  'scrollIntoView',
  'scroll',
  'scrollTo',
  'scrollBy',
  'scrollIntoViewIfNeeded',
  'animate',
  'computedStyleMap',
  'before',
  'after',
  'replaceWith',
  'remove',
  'prepend',
  'append',
  'querySelector',
  'querySelectorAll',
  'requestFullscreen',
  'webkitRequestFullScreen',
  'webkitRequestFullscreen',
  'part',
  'createShadowRoot',
  'getDestinationInsertionPoints',

  // custom elements
  'role',
  'form',
];

const reservedPublicProperties = new Set(
  [...ariaProperties, ...htmlElementProperties, ...elementProperties].map(p => p.toLowerCase())
);

export function isReservedProperty(memberName) {
  memberName = memberName.toLowerCase();
  return reservedPublicProperties.has(memberName);
}

const htmlElementEvents = [
  'abort',
  'auxclick',
  'blur',
  'cancel',
  'canplay',
  'canplaythrough',
  'change',
  'click',
  'close',
  'contextmenu',
  'copy',
  'cuechange',
  'cut',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'focus',
  'gotpointercapture',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'load',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'lostpointercapture',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'mousewheel',
  'paste',
  'pause',
  'play',
  'playing',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'progress',
  'ratechange',
  'reset',
  'resize',
  'scroll',
  'seeked',
  'seeking',
  'select',
  'selectionchange',
  'selectstart',
  'stalled',
  'submit',
  'suspend',
  'timeupdate',
  'toggle',
  'volumechange',
  'waiting',
  'wheel',
];

const reservedPublicEvents = new Set([...htmlElementEvents].map(p => p.toLowerCase()));

export function isReservedEvent(memberName) {
  memberName = memberName.toLowerCase();
  return reservedPublicEvents.has(memberName);
}