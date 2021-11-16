const map = {
  'pages/api/unit-creators': {
    index: 'page',
    'create-form': 'page',
    'create-field-array': 'page',
  },
  'pages/api/unit-types/form': {
    $values: 'page',
    '$fields-inline': 'page',
    'set-value': 'page',
  },
  'pages/api/unit-types/field-array': {
    push: 'page',
  },
  'pages/api/hooks': {
    'use-form': 'page',
    'use-error': 'page',
    'use-field-array': 'page',
  },
  'pages/api/utils': {
    'delete-in': 'page',
    'get-in-and-get-in-ts': 'page',
    'set-in': 'page',
    'make-nested': 'page',
    'remove-from-inline-map': 'page',
    'create-name-helper': 'page',
  },
};

module.exports = { map, aliases: {} };
