module.exports = {
  '_meta': {
    'sources': [
      'loopback/common/models',
      'loopback/server/models',
      '../common/models',
      './models'
    ],
    'mixins': [
      'loopback/common/mixins',
      'loopback/server/mixins',
      '../common/mixins',
      './mixins'
    ]
  },
  'Upload': {
    'dataSource': 'db',
    'public': process.env.ADMIN ? true : false
  },
  'User': {
    'dataSource': 'db',
    'public': false
  },
  'AccessToken': {
    'dataSource': 'db',
    'public': false
  },
  'ACL': {
    'dataSource': 'db',
    'public': false
  },
  'RoleMapping': {
    'dataSource': 'db',
    'public': process.env.ADMIN ? true : false
  },
  'Role': {
    'dataSource': 'db',
    'public': process.env.ADMIN ? true : false
  },
  'MyUser': {
    'dataSource': 'db',
    'public': true
  },
  'ImageSet': {
    'dataSource': 'db',
    'public': process.env.ADMIN ? true : false
  },
  'TypeTest': {
    'dataSource': 'db',
    'public': process.env.ADMIN ? true : false
  }
};